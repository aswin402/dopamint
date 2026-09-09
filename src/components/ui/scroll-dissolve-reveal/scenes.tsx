import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { coverVertexShader, coverFragmentShader } from './shaders';
import { toDissolveProgress } from './progress';
import { getOrCreateCachedVideo } from '@/lib/videoCache';

/**
 * Creates a VideoTexture using a persistent HTMLVideoElement attached to the DOM.
 * This guarantees the browser allocates hardware decoder resources, respects
 * autoplay policies, and feeds active frames to WebGL across all devices.
 */
function useCachedVideoTexture(src: string): THREE.VideoTexture {
  const [texture] = useState<THREE.VideoTexture>(() => {
    const vid = getOrCreateCachedVideo(src);
    const tex = new THREE.VideoTexture(vid);
    tex.generateMipmaps = false;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.format = THREE.RGBAFormat;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  });

  useEffect(() => {
    const vid = getOrCreateCachedVideo(src);
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const resume = () => {
          vid.play().catch(() => {});
        };
        window.addEventListener('touchstart', resume, { once: true, passive: true });
        window.addEventListener('pointerdown', resume, { once: true, passive: true });
        window.addEventListener('click', resume, { once: true, passive: true });
        window.addEventListener('scroll', resume, { once: true, passive: true });
        window.addEventListener('wheel', resume, { once: true, passive: true });
      });
    }

    return () => {
      texture.dispose();
    };
  }, [src, texture]);

  return texture;
}

/**
 * VideoShaderScene — renders the hero video via a WebGL dissolve shader.
 * Uses a single persistent VideoTexture that starts immediately without
 * suspending or double-downloading video streams.
 */
export function VideoShaderScene({
  videoFront,
  progress,
}: {
  videoFront: string;
  progress: number;
}) {
  const texture1 = useCachedVideoTexture(videoFront);
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
    [texture1]
  );

  useFrame((state) => {
    const timeInSeconds = state.clock.getElapsedTime();

    if (material1Ref.current) {
      material1Ref.current.uniforms.uTexture.value = texture1;
      texture1.needsUpdate = true;

      const video = texture1.image as HTMLVideoElement | undefined;
      if (video && video.videoWidth > 0 && video.videoHeight > 0) {
        if (
          material1Ref.current.uniforms.uImageResolution.value.x !== video.videoWidth ||
          material1Ref.current.uniforms.uImageResolution.value.y !== video.videoHeight
        ) {
          material1Ref.current.uniforms.uImageResolution.value.set(video.videoWidth, video.videoHeight);
        }
      }

      material1Ref.current.uniforms.uTime.value = timeInSeconds;
      material1Ref.current.uniforms.uResolution.value.set(size.width, size.height);
      
      const dissolveProgress = toDissolveProgress(progress);
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

export function ImageShaderScene({
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
          (texture1.image as HTMLImageElement)?.naturalWidth || 1920,
          (texture1.image as HTMLImageElement)?.naturalHeight || 1080
        ),
      },
      uDissolve: { value: 0.0 },
      uCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0.0 },
      uGrayscale: { value: 0.0 },
      uEdgeIntensity: { value: 0.0 },
      uEdgeBrightness: { value: 1.0 },
    }),
    [texture1]
  );

  useFrame((state) => {
    const timeInSeconds = state.clock.getElapsedTime();

    if (material1Ref.current) {
      material1Ref.current.uniforms.uTime.value = timeInSeconds;
      material1Ref.current.uniforms.uResolution.value.set(size.width, size.height);
      
      const dissolveProgress = toDissolveProgress(progress);
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
