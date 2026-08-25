import React, { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { MotionValue, motionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { VideoShaderScene, ImageShaderScene } from "./scenes";
import { lockPageScroll, unlockPageScroll } from "./scrollLock";


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
  const renderedProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const isUnlockedRef = useRef(false);
  // Deliberate-reverse gate: near the top, small negative wheel/touch deltas
  // (trackpad & wheel inertia tails) must NOT re-lock the scroll-jack. Only
  // sustained upward input (cumulative ≤ -140px, reset by any downward delta,
  // decayed after 600ms of inactivity) may reverse the animation.
  const upAccumRef = useRef(0);
  const lastUpTimeRef = useRef(0);
  const scrollYProgress = useMemo(() => motionValue(0), []);

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

      if (targetProgressRef.current >= 1.0 && smoothProgressRef.current >= 0.95) {
        smoothProgressRef.current = 1.0;
      } else if (targetProgressRef.current <= 0.0 && smoothProgressRef.current <= 0.05) {
        smoothProgressRef.current = 0.0;
      }

      const cur = smoothProgressRef.current;
      scrollYProgress.set(cur);

      const isHeroRevealed = cur > 0.45;
      if (document.documentElement.dataset.heroRevealed !== (isHeroRevealed ? 'true' : 'false')) {
        document.documentElement.dataset.heroRevealed = isHeroRevealed ? 'true' : 'false';
        window.dispatchEvent(new CustomEvent('hero-reveal-change', { detail: { isRevealed: isHeroRevealed, progress: cur } }));
      }

      // Gate React re-renders by epsilon — motion values above already drive
      // per-frame visuals; state is only needed for structural switches
      // (canvas mount/unmount). Prevents 60fps re-renders of the hero subtree.
      if (Math.abs(cur - renderedProgressRef.current) > 0.0004) {
        renderedProgressRef.current = cur;
        setSmoothProgress(cur);
      }

      const completed = targetProgressRef.current >= 1.0 && cur >= 0.999;
      if (completed !== isUnlockedRef.current) {
        isUnlockedRef.current = completed;
        setIsUnlocked(completed);

        // Toggle overflow immediately in this same rAF tick — no React re-render delay
        if (completed) {
          unlockPageScroll();
        } else {
          lockPageScroll();
          window.scrollTo(0, 0);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    lockPageScroll();

    animId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animId);
      unlockPageScroll();
      delete document.documentElement.dataset.heroRevealed;
    };
  }, [scrollYProgress]);

  const updateTarget = useCallback((val: number) => {
    const clamped = Math.max(0.0, Math.min(1.0, val));
    targetProgressRef.current = clamped;
  }, []);

  // Wheel, Touch, and Keyboard listeners
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) upAccumRef.current = 0;

      // 1. While animation is running, lock scrolling and gently advance/reverse
      if (!isUnlockedRef.current) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const delta = Math.min(Math.abs(e.deltaY) * 0.0005, 0.033);
        if (e.deltaY > 0) {
          updateTarget(targetProgressRef.current + delta);
        } else if (e.deltaY < 0) {
          updateTarget(targetProgressRef.current - delta);
        }
        return;
      }

      // 2. Unlocked at the very top: only a DELIBERATE upward scroll reverses.
      //    Small negative deltas (inertia tails) are swallowed harmlessly so a
      //    jittery wheel/trackpad can't re-lock the scroll-jack and throw the
      //    user back into the pinned hero.
      if (window.scrollY <= 6 && e.deltaY < 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const now = performance.now();
        if (now - lastUpTimeRef.current > 600) upAccumRef.current = 0;
        lastUpTimeRef.current = now;
        upAccumRef.current += e.deltaY;
        if (upAccumRef.current <= -140) {
          upAccumRef.current = 0;
          // Re-lock immediately via DOM (no React state lag)
          isUnlockedRef.current = false;
          setIsUnlocked(false);
          lockPageScroll();
          window.scrollTo(0, 0);
          const delta = Math.min(Math.abs(e.deltaY) * 0.0005, 0.033);
          updateTarget(targetProgressRef.current - delta);
        }
        return;
      }

      // 3. Unlocked + scrolling DOWN → do nothing, let browser handle naturally ✓
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      touchStartY = currentY;

      if (deltaY > 0) upAccumRef.current = 0;

      if (!isUnlockedRef.current) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const delta = Math.min(Math.abs(deltaY) * 0.0022, 0.045);
        if (deltaY > 0) {
          updateTarget(targetProgressRef.current + delta);
        } else if (deltaY < 0) {
          updateTarget(targetProgressRef.current - delta);
        }
        return;
      }

      // Same deliberate-reverse gate as wheel: an upward touch tail near the
      // top must not re-lock the scroll-jack.
      if (window.scrollY <= 6 && deltaY < 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const now = performance.now();
        if (now - lastUpTimeRef.current > 600) upAccumRef.current = 0;
        lastUpTimeRef.current = now;
        upAccumRef.current += deltaY;
        if (upAccumRef.current <= -140) {
          upAccumRef.current = 0;
          isUnlockedRef.current = false;
          setIsUnlocked(false);
          lockPageScroll();
          window.scrollTo(0, 0);
          const delta = Math.min(Math.abs(deltaY) * 0.0022, 0.045);
          updateTarget(targetProgressRef.current - delta);
        }
        return;
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isUnlockedRef.current) {
        if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
          e.preventDefault();
          updateTarget(targetProgressRef.current + 0.07);
        } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
          e.preventDefault();
          updateTarget(targetProgressRef.current - 0.07);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [updateTarget]);

  const isVideo = Boolean(videoFront || (imageFront && (imageFront.endsWith('.webm') || imageFront.endsWith('.mp4'))));
  const activeVideo = videoFront || (isVideo ? imageFront! : '');

  // Keep hero fixed at top: 0 while animation is running
  const isLocked = !isUnlocked;

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
          <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto overflow-hidden">
            {backgroundContent}
          </div>
        )}

        {/* Layer 2: WebGL GPU Dissolve Shader Canvas */}
        {smoothProgress < 0.999 && (
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
