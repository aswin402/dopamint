import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';
import { coverVertexShader, coverFragmentShader } from './shaders';
import { toDissolveProgress } from './progress';

export function VideoShaderScene({
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
