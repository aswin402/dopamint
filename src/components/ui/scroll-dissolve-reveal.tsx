import React, { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, useVideoTexture, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue, motionValue } from "framer-motion";
import { cn } from "../../lib/utils";
import { getLenisInstance } from "../../lib/lenis";

const coverVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const coverFragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uImageResolution;
  uniform float uDissolve;
  uniform vec2 uCenter;
  uniform float uTime;
  uniform float uGrayscale;
  uniform float uEdgeIntensity;
  uniform float uEdgeBrightness;
  varying vec2 vUv;

  mat3 sobelX = mat3(
    -1.0, 0.0, 1.0,
    -2.0, 0.0, 2.0,
    -1.0, 0.0, 1.0
  );

  mat3 sobelY = mat3(
    -1.0, -2.0, -1.0,
     0.0,  0.0,  0.0,
     1.0,  2.0,  1.0
  );

  float getLuminance(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
  }

  float sobel(sampler2D tex, vec2 uv, vec2 texelSize) {
    float gx = 0.0;
    float gy = 0.0;

    for (int i = -1; i <= 1; i++) {
      for (int j = -1; j <= 1; j++) {
        vec2 offset = vec2(float(i), float(j)) * texelSize;
        float lum = getLuminance(texture2D(tex, uv + offset).rgb);
        gx += lum * sobelX[i + 1][j + 1];
        gy += lum * sobelY[i + 1][j + 1];
      }
    }

    return sqrt(gx * gx + gy * gy);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return value;
  }

  void main() {
    // When dissolve is complete, fully clear the fragment
    if (uDissolve >= 0.95) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }

    vec2 ratio = vec2(
      min((uResolution.x / uResolution.y) / (uImageResolution.x / uImageResolution.y), 1.0),
      min((uResolution.y / uResolution.x) / (uImageResolution.y / uImageResolution.x), 1.0)
    );

    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    vec4 texColor = texture2D(uTexture, uv);

    // Resting state: dissolve hasn't started, all edge/noise terms are inert.
    // Early-out skips sobel + fbm per-pixel cost while the hero idles.
    if (uDissolve <= 0.001) {
      gl_FragColor = vec4(texColor.rgb, texColor.a);
      return;
    }

    float gray = getLuminance(texColor.rgb);
    vec3 grayscaleColor = vec3(gray);
    texColor.rgb = mix(texColor.rgb, grayscaleColor, uGrayscale);
    
    vec2 centeredUv = vUv - uCenter;
    float aspect = uResolution.x / uResolution.y;
    centeredUv.x *= aspect;
    float dist = length(centeredUv);
    
    float angle = atan(centeredUv.y, centeredUv.x);
    
    float noiseScale = 5.5;
    vec2 pixelatedUv = floor(vUv * uResolution / noiseScale) * noiseScale / uResolution;
    float blockNoise = fbm(pixelatedUv * 80.0) * 0.14;
    
    float angularNoise = fbm(vec2(angle * 4.5, 0.0)) * 0.14;
    
    float totalNoise = blockNoise + angularNoise;
    float noisyDist = dist + totalNoise;
    
    float maxDist = length(vec2(aspect * 0.5, 0.5));
    float normalizedDist = noisyDist / maxDist;
    
    // Multiplier of 4.2 guarantees all 4 corners are cleared 100% on any screen
    float dissolveThreshold = uDissolve * 4.2; 
    
    vec2 texelSize = 1.0 / uResolution;
    float edge = sobel(uTexture, uv, texelSize);
    
    edge = pow(edge, 0.7) * 2.0;
    edge = clamp(edge, 0.0, 1.0);
    
    // Smooth feathered dissolve transition
    float dissolveMask = smoothstep(dissolveThreshold - 0.05, dissolveThreshold + 0.01, normalizedDist);
    
    vec3 edgeColor = vec3(1.0, 0.88, 0.7);
    
    vec3 baseColor = mix(texColor.rgb, vec3(0.0), uGrayscale);
    vec3 finalColor = baseColor;
    
    float edgeGlowIntensity = uEdgeIntensity * 2.5;
    float edgeGlow = edge * edgeGlowIntensity * (1.0 + uGrayscale * 3.0);
    finalColor += edgeColor * edgeGlow * uEdgeBrightness;
    
    float edgeZoneWidth = 0.14 * (1.0 - uDissolve) + 0.02;
    float edgeZone = smoothstep(dissolveThreshold - edgeZoneWidth, dissolveThreshold - edgeZoneWidth + 0.04, normalizedDist) * 
                     smoothstep(dissolveThreshold + 0.02, dissolveThreshold - 0.02, normalizedDist);
    float sparkle = hash(floor(vUv * uResolution / 4.0)) * edgeZone;
    
    float edgeBrightness = (1.0 - uDissolve) * uEdgeBrightness * (1.0 + uGrayscale * 2.0);
    finalColor += vec3(sparkle * 3.0 * edgeBrightness);
    
    float alpha = dissolveMask * texColor.a;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

function VideoShaderScene({
  videoFront,
  progress,
}: {
  videoFront: string;
  progress: number;
}) {
  const texture1 = useVideoTexture(videoFront, {
    start: true,
    loop: true,
    muted: true,
    playsInline: true,
    crossOrigin: "anonymous",
  });
  const material1Ref = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  const uniforms1 = useMemo(
    () => ({
      uTexture: { value: texture1 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uImageResolution: {
        value: new THREE.Vector2(1920, 1080),
      },
      uDissolve: { value: 0.0 },
      uCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0.0 },
      uGrayscale: { value: 0.0 },
      uEdgeIntensity: { value: 0.0 },
      uEdgeBrightness: { value: 1.0 },
    }),
    [texture1, size]
  );

  useFrame((state) => {
    const timeInSeconds = state.clock.getElapsedTime();

    if (material1Ref.current) {
      material1Ref.current.uniforms.uTime.value = timeInSeconds;
      material1Ref.current.uniforms.uResolution.value.set(size.width, size.height);
      
      // Slower, more gradual dissolve progression mapped across 80% of travel
      const dissolveProgress = Math.min(1.0, progress / 0.95);
      material1Ref.current.uniforms.uDissolve.value = dissolveProgress;
      
      const grayscaleProgress = Math.min(1.0, dissolveProgress / 0.30);
      material1Ref.current.uniforms.uGrayscale.value = grayscaleProgress;
      material1Ref.current.uniforms.uEdgeIntensity.value = dissolveProgress * 0.5;
      material1Ref.current.uniforms.uEdgeBrightness.value = Math.max(0.0, 1.0 - dissolveProgress);
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material1Ref}
        vertexShader={coverVertexShader}
        fragmentShader={coverFragmentShader}
        uniforms={uniforms1}
        transparent={true}
      />
    </mesh>
  );
}

function ImageShaderScene({
  imageFront,
  progress,
}: {
  imageFront: string;
  progress: number;
}) {
  const texture1 = useTexture(imageFront);
  const material1Ref = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  const uniforms1 = useMemo(
    () => ({
      uTexture: { value: texture1 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uImageResolution: {
        value: new THREE.Vector2(
          (texture1?.image as HTMLImageElement)?.naturalWidth || (texture1?.image as HTMLImageElement)?.width || 1920,
          (texture1?.image as HTMLImageElement)?.naturalHeight || (texture1?.image as HTMLImageElement)?.height || 1080
        ),
      },
      uDissolve: { value: 0.0 },
      uCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0.0 },
      uGrayscale: { value: 0.0 },
      uEdgeIntensity: { value: 0.0 },
      uEdgeBrightness: { value: 1.0 },
    }),
    [texture1, size]
  );

  useFrame((state) => {
    const timeInSeconds = state.clock.getElapsedTime();

    if (material1Ref.current) {
      material1Ref.current.uniforms.uTime.value = timeInSeconds;
      material1Ref.current.uniforms.uResolution.value.set(size.width, size.height);
      
      const dissolveProgress = Math.min(1.0, progress / 0.95);
      material1Ref.current.uniforms.uDissolve.value = dissolveProgress;
      const grayscaleProgress = Math.min(1.0, dissolveProgress / 0.30);
      material1Ref.current.uniforms.uGrayscale.value = grayscaleProgress;
      material1Ref.current.uniforms.uEdgeIntensity.value = dissolveProgress * 0.5;
      material1Ref.current.uniforms.uEdgeBrightness.value = Math.max(0.0, 1.0 - dissolveProgress);
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material1Ref}
        vertexShader={coverVertexShader}
        fragmentShader={coverFragmentShader}
        uniforms={uniforms1}
        transparent={true}
      />
    </mesh>
  );
}

export interface ScrollDissolveRevealProps {
  imageFront?: string;
  videoFront?: string;
  className?: string;
  containerClassName?: string;
  backgroundContent?: React.ReactNode;
  children?: React.ReactNode | ((scrollYProgress: MotionValue<number>) => React.ReactNode);
}

// Scroll-jack must also pause Lenis (RootLayout), otherwise its virtual-scroll
// engine keeps consuming wheel events and scrolls the document underneath the
// fixed overlay — leaving it at/past the scroll limit once unlocked.
function lockPageScroll() {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.dataset.scrollLocked = 'true';
  getLenisInstance()?.stop();
}

function unlockPageScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  delete document.documentElement.dataset.scrollLocked;
  getLenisInstance()?.start();
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
            <Canvas gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}>
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
