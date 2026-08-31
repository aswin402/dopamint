import React, { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { MotionValue, motionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { VideoShaderScene, ImageShaderScene } from "./scenes";
import { lockPageScroll, unlockPageScroll } from "./scrollLock";
import { normalizeRevealTarget, MAGNETIC_COMPLETION_AT, NAVBAR_REVEAL_AT, resolveMagneticCompletionTarget } from "./progress";
import { SECTION_HANDOFF_DURATION, getScrollBoundaryState, smoothSectionHandoffProgress } from "./handoff";
import { getLenisInstance } from "@/lib/lenis";

const HERO_SCROLL_LOCK_OWNER = 'hero-reveal';

function getManifestoBoundaryState(manifesto: HTMLElement | null) {
  if (!manifesto) return { atStart: true, atEnd: true };

  const overflowY = window.getComputedStyle(manifesto).overflowY;
  const hasInnerScroll = (overflowY === 'auto' || overflowY === 'scroll')
    && manifesto.scrollHeight > manifesto.clientHeight + 2;

  if (!hasInnerScroll) return { atStart: true, atEnd: true };

  return getScrollBoundaryState(manifesto.scrollTop, manifesto.scrollHeight, manifesto.clientHeight);
}


export interface ScrollDissolveRevealProps {
  imageFront?: string;
  videoFront?: string;
  className?: string;
  containerClassName?: string;
  backgroundContent?: React.ReactNode;
  children?: React.ReactNode | ((scrollYProgress: MotionValue<number>) => React.ReactNode);
}


export function ScrollDissolveReveal({
  imageFront,
  videoFront,
  className,
  containerClassName,
  backgroundContent,
  children,
}: ScrollDissolveRevealProps) {
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const renderedProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const isUnlockedRef = useRef(false);
  // The wheel/touch stream that completes the dissolve can still contain
  // momentum events. Wait for a short quiet period before accepting the next
  // downward gesture as an intentional request to enter section three.
  const sectionHandoffReadyRef = useRef(false);
  const sectionHandoffInProgressRef = useRef(false);
  const sectionHandoffTimerRef = useRef<number | null>(null);
  const scrollYProgress = useMemo(() => motionValue(0), []);
  // Magnetic completion: forward input that stops just short of the snap
  // threshold leaves a visually finished dissolve that never commits (page
  // stays locked, navbar theme never flips). A short quiet window after the
  // last forward gesture finishes the interaction instead.
  const magnetTimerRef = useRef<number | null>(null);

  // Frame-rate independent exponential damping physics loop
  // Overflow is toggled SYNCHRONOUSLY via DOM inside rAF — no React state lag
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const deltaSec = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const factor = 1 - Math.exp(-6.5 * deltaSec);
      smoothProgressRef.current += (targetProgressRef.current - smoothProgressRef.current) * factor;

      // Once the user has completed the reveal, finish the last fraction in
      // this frame. Leaving it to the damping loop kept the page locked for
      // several additional wheel/touch gestures after the reveal looked done.
      if (targetProgressRef.current >= 1.0) {
        smoothProgressRef.current = 1.0;
      } else if (targetProgressRef.current <= 0.0 && smoothProgressRef.current <= 0.05) {
        smoothProgressRef.current = 0.0;
      }

      const cur = smoothProgressRef.current;
      scrollYProgress.set(cur);

      // Gate React re-renders by epsilon — motion values above already drive
      // per-frame visuals; state is only needed for structural switches
      // (canvas mount/unmount). Prevents 60fps re-renders of the hero subtree.
      if (Math.abs(cur - renderedProgressRef.current) > 0.0004) {
        renderedProgressRef.current = cur;
        setSmoothProgress(cur);
      }

      const completed = targetProgressRef.current >= 1.0 && cur >= 0.999;

      // Keep the global visual state synchronized independently from the
      // internal lock ref. Reverse input deliberately updates the lock ref
      // immediately, so coupling this signal to that ref skipped the navbar
      // reset while returning to the hero.
      const revealedValue = cur >= NAVBAR_REVEAL_AT ? 'true' : 'false';
      if (document.documentElement.dataset.heroRevealed !== revealedValue) {
        document.documentElement.dataset.heroRevealed = revealedValue;
        window.dispatchEvent(
          new CustomEvent('hero-reveal-change', {
            detail: { isRevealed: cur >= NAVBAR_REVEAL_AT, progress: cur },
          }),
        );
      }

      if (completed !== isUnlockedRef.current) {
        isUnlockedRef.current = completed;
        setIsUnlocked(completed);

        // Toggle overflow immediately in this same rAF tick — no React re-render delay
        if (completed) {
          sectionHandoffReadyRef.current = true;
          unlockPageScroll(HERO_SCROLL_LOCK_OWNER);
        } else {
          lockPageScroll(HERO_SCROLL_LOCK_OWNER);
          window.scrollTo(0, 0);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    if (prefersReducedMotion) {
      targetProgressRef.current = 1;
      smoothProgressRef.current = 1;
      renderedProgressRef.current = 1;
      scrollYProgress.set(1);
      isUnlockedRef.current = true;
      document.documentElement.dataset.heroRevealed = 'true';
      unlockPageScroll(HERO_SCROLL_LOCK_OWNER);
      sectionHandoffReadyRef.current = true;
      return () => {
        unlockPageScroll(HERO_SCROLL_LOCK_OWNER);
        delete document.documentElement.dataset.heroRevealed;
      };
    }

    animId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animId);
      if (magnetTimerRef.current !== null) {
        window.clearTimeout(magnetTimerRef.current);
        magnetTimerRef.current = null;
      }
      unlockPageScroll(HERO_SCROLL_LOCK_OWNER);
      delete document.documentElement.dataset.heroRevealed;
    };
  }, [prefersReducedMotion, scrollYProgress]);


  const armSectionHandoff = useCallback(() => {
    sectionHandoffReadyRef.current = false;
    if (sectionHandoffTimerRef.current !== null) {
      window.clearTimeout(sectionHandoffTimerRef.current);
    }
    sectionHandoffTimerRef.current = window.setTimeout(() => {
      sectionHandoffReadyRef.current = true;
      sectionHandoffTimerRef.current = null;
    }, 140);
  }, []);

  const updateTarget = useCallback((val: number, isForward: boolean) => {
    targetProgressRef.current = normalizeRevealTarget(val, isForward);

    // Direction-agnostic arming: a real trackpad flick often ends with tiny
    // backward jitter events, so requiring the last input to be forward would
    // leave the magnet disarmed exactly in the stuck state it exists to fix.
    if (magnetTimerRef.current !== null) {
      window.clearTimeout(magnetTimerRef.current);
      magnetTimerRef.current = null;
    }
    const target = targetProgressRef.current;
    if (target < 1 && target >= MAGNETIC_COMPLETION_AT) {
      magnetTimerRef.current = window.setTimeout(() => {
        magnetTimerRef.current = null;
        const completionTarget = resolveMagneticCompletionTarget(targetProgressRef.current, isUnlockedRef.current);
        if (completionTarget !== null) {
          targetProgressRef.current = completionTarget;
          // The completing gesture already happened; arm the handoff so the
          // user's next natural scroll moves on to section three.
          armSectionHandoff();
        }
      }, 250);
    }
  }, [armSectionHandoff]);

  const resetSectionHandoff = useCallback(() => {
    sectionHandoffReadyRef.current = false;
    if (sectionHandoffTimerRef.current !== null) {
      window.clearTimeout(sectionHandoffTimerRef.current);
      sectionHandoffTimerRef.current = null;
    }
  }, []);

  const scrollToNextSection = useCallback(() => {
    if (sectionHandoffInProgressRef.current) return;

    const nextSection = document.getElementById('asks');
    if (!nextSection) return;
    sectionHandoffInProgressRef.current = true;

    resetSectionHandoff();
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(nextSection, {
        // A balanced curve prevents the handoff from jumping through most of
        // the viewport in its opening frames while remaining responsive.
        duration: SECTION_HANDOFF_DURATION,
        easing: smoothSectionHandoffProgress,
        lock: true,
        onComplete: () => {
          sectionHandoffInProgressRef.current = false;
          sectionHandoffReadyRef.current = true;
        },
      });
      return;
    }

    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      sectionHandoffInProgressRef.current = false;
    }, SECTION_HANDOFF_DURATION * 1000);
    armSectionHandoff();
  }, [armSectionHandoff, resetSectionHandoff]);

  // Wheel, Touch, and Keyboard listeners
  useEffect(() => {
    if (prefersReducedMotion) return;

    const onWheel = (e: WheelEvent) => {
      // 1. While animation is running, lock scrolling and gently advance/reverse
      if (!isUnlockedRef.current) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const delta = Math.min(Math.abs(e.deltaY) * 0.0005, 0.033);
        if (e.deltaY > 0) {
          updateTarget(targetProgressRef.current + delta, true);
          armSectionHandoff();
        } else if (e.deltaY < 0) {
          resetSectionHandoff();
          updateTarget(targetProgressRef.current - delta, false);
        }
        return;
      }

      const manifesto = document.getElementById('manifesto');
      const manifestoState = getManifestoBoundaryState(manifesto);

      // 2. One intentional downward gesture moves the full viewport from the
      //    revealed second section to section three.
      if (window.scrollY <= 6 && e.deltaY > 0 && manifestoState.atEnd) {
        e.preventDefault();
        e.stopImmediatePropagation();
        scrollToNextSection();
        return;
      }

      // 3. The first upward gesture at the top immediately starts reversing
      //    the dissolve. The previous cumulative -140px gate caused the three
      //    apparently dead scrolls reported by users.
      if (window.scrollY <= 6 && e.deltaY < 0 && manifestoState.atStart) {
        e.preventDefault();
        e.stopImmediatePropagation();
        resetSectionHandoff();
        isUnlockedRef.current = false;
        setIsUnlocked(false);
        lockPageScroll(HERO_SCROLL_LOCK_OWNER);
        window.scrollTo(0, 0);
        // A single upward gesture requests the complete reverse transition.
        // The damping loop animates smoothly from 1 back to 0; requiring more
        // wheel input here made users repeat the gesture several times.
        updateTarget(0, false);
        return;
      }

      // 4. Elsewhere, keep normal Lenis scrolling.
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      touchStartY = currentY;

      if (!isUnlockedRef.current) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const delta = Math.min(Math.abs(deltaY) * 0.0022, 0.045);
        if (deltaY > 0) {
          updateTarget(targetProgressRef.current + delta, true);
        } else if (deltaY < 0) {
          resetSectionHandoff();
          updateTarget(targetProgressRef.current - delta, false);
        }
        return;
      }

      const manifesto = document.getElementById('manifesto');
      const manifestoState = getManifestoBoundaryState(manifesto);

      if (window.scrollY <= 6 && deltaY > 0 && manifestoState.atEnd) {
        e.preventDefault();
        e.stopImmediatePropagation();
        scrollToNextSection();
        return;
      }

      if (window.scrollY <= 6 && deltaY < 0 && manifestoState.atStart) {
        e.preventDefault();
        e.stopImmediatePropagation();
        resetSectionHandoff();
        isUnlockedRef.current = false;
        setIsUnlocked(false);
        lockPageScroll(HERO_SCROLL_LOCK_OWNER);
        window.scrollTo(0, 0);
        updateTarget(0, false);
        return;
      }
    };

    const onTouchEnd = () => {
      if (isUnlockedRef.current) armSectionHandoff();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isUnlockedRef.current && window.scrollY <= 6) {
        const manifesto = document.getElementById('manifesto');
        const manifestoState = getManifestoBoundaryState(manifesto);

        if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
          if (!manifestoState.atEnd) return;
          e.preventDefault();
          scrollToNextSection();
        } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
          if (!manifestoState.atStart) return;
          e.preventDefault();
          resetSectionHandoff();
          isUnlockedRef.current = false;
          setIsUnlocked(false);
          lockPageScroll(HERO_SCROLL_LOCK_OWNER);
          window.scrollTo(0, 0);
          updateTarget(0, false);
        }
        return;
      }

      if (!isUnlockedRef.current) {
        if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
          e.preventDefault();
          updateTarget(targetProgressRef.current + 0.07, true);
          armSectionHandoff();
        } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
          e.preventDefault();
          resetSectionHandoff();
          updateTarget(targetProgressRef.current - 0.07, false);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      resetSectionHandoff();
    };
  }, [armSectionHandoff, prefersReducedMotion, resetSectionHandoff, scrollToNextSection, updateTarget]);

  const isVideo = Boolean(videoFront || (imageFront && (imageFront.endsWith('.webm') || imageFront.endsWith('.mp4'))));
  const activeVideo = videoFront || (isVideo ? imageFront! : '');

  // Keep hero fixed at top: 0 while animation is running
  const isLocked = !isUnlocked && !prefersReducedMotion;

  return (
    /* Outer container always stays h-screen in document flow so next sections never shift */
    <div className={cn("relative w-full h-screen bg-[#f3f2e6]", containerClassName)}>
      
      {/* Inner Viewport: Fixed at top: 0 while dissolving, then seamlessly relative when unlocked */}
      <div
        className={cn(
          "w-full h-full overflow-hidden bg-[#f3f2e6]",
          isLocked ? "fixed inset-0 z-30" : "relative z-10",
          className
        )}
      >
        {/* Layer 1: Inner Section (House of Sovereign Agents) */}
        {backgroundContent && (
          <div 
            className="absolute inset-0 z-0 w-full h-full pointer-events-auto overflow-hidden"
            style={{ opacity: smoothProgress > 0.002 ? 1 : 0, pointerEvents: smoothProgress > 0.05 ? 'auto' : 'none' }}
          >
            {backgroundContent}
          </div>
        )}

        {/* Layer 2: WebGL GPU Dissolve Shader Canvas */}
        {!prefersReducedMotion && smoothProgress < 0.999 && (
          <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
            <Canvas
              dpr={[1, 1.5]}
              gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
            >
              <OrthographicCamera
                makeDefault
                manual
                left={-1}
                right={1}
                top={1}
                bottom={-1}
                near={0.1}
                far={10}
                position={[0, 0, 1]}
              />
              <React.Suspense fallback={null}>
                {isVideo ? (
                  <VideoShaderScene
                    videoFront={activeVideo}
                    progress={smoothProgress}
                  />
                ) : imageFront ? (
                  <ImageShaderScene
                    imageFront={imageFront}
                    progress={smoothProgress}
                  />
                ) : null}
              </React.Suspense>
            </Canvas>
          </div>
        )}

        {/* Layer 3: Interactive Hero Overlay */}
        {children && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            {typeof children === 'function' ? children(scrollYProgress) : children}
          </div>
        )}
      </div>
    </div>
  );
}
