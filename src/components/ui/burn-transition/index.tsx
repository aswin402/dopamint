
import React, { useRef } from 'react';
import { useBurnAnimation } from './useBurnAnimation';

export interface BurnTransitionProps {
  color?: string;
  transitionColor?: string;
  noiseScale?: number;
  noiseIntensity?: number;
  scrollSensitivity?: number;
  baseAnimationSpeed?: number;
  edgeSoftness?: number;
  bloomIntensity?: number;
  bloomRadius?: number;
  parallaxEnabled?: boolean;
  inverted?: boolean;
  movement?: {
    horizontal?: 'left' | 'center' | 'right';
    vertical?: number;
  };
  style?: React.CSSProperties;
  className?: string;
}


export const BurnTransition: React.FC<BurnTransitionProps> = ({
  color = '#D9D6CA',
  transitionColor = '#FFFFFF',
  noiseScale = 2.5,
  noiseIntensity = 0.52,
  scrollSensitivity = 0.015,
  baseAnimationSpeed = 0.08,
  edgeSoftness = 0.38,
  bloomIntensity = 0.75,
  bloomRadius = 0.35,
  parallaxEnabled = true,
  inverted = false,
  movement = { horizontal: 'center', vertical: 0.5 },
  style,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useBurnAnimation(canvasRef, containerRef, {
    color,
    transitionColor,
    noiseScale,
    noiseIntensity,
    scrollSensitivity,
    baseAnimationSpeed,
    edgeSoftness,
    bloomIntensity,
    bloomRadius,
    parallaxEnabled,
    movement,
  });
  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        ...(inverted ? { transform: 'scaleY(-1)' } : {}),
      }}
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};
