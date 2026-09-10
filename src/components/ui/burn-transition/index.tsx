import React, { useRef, useState } from 'react';
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

/**
 * Organic SVG torn-paper edge fallback when WebGL is unavailable or disabled.
 */
function SVGBurnFallback({
  color,
  inverted,
}: {
  color: string;
  inverted?: boolean;
}) {
  const pathD = inverted
    ? 'M0,0 L1200,0 L1200,65 L1180,62 L1150,70 L1120,58 L1090,66 L1050,52 L1010,72 L970,55 L940,68 L900,48 L860,62 L820,44 L780,68 L740,50 L700,64 L660,46 L620,68 L580,52 L540,70 L500,48 L460,65 L420,45 L380,68 L340,50 L300,65 L260,42 L220,64 L180,48 L140,70 L100,52 L60,68 L30,48 L0,62 Z'
    : 'M0,120 L1200,120 L1200,55 L1180,58 L1150,50 L1120,62 L1090,54 L1050,68 L1010,48 L970,65 L940,52 L900,72 L860,58 L820,76 L780,52 L740,70 L700,56 L660,74 L620,52 L580,68 L540,50 L500,72 L460,55 L420,75 L380,52 L340,70 L300,55 L260,78 L220,56 L180,72 L140,50 L100,68 L60,52 L30,72 L0,58 Z';

  return (
    <svg
      className="absolute inset-0 w-full h-full block pointer-events-none"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d={pathD} fill={color} />
    </svg>
  );
}

export const BurnTransition: React.FC<BurnTransitionProps> = ({
  color = '#f3f2e6',
  transitionColor,
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
  const [hasWebGL, setHasWebGL] = useState(true);

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
    inverted,
    movement,
    onWebGLUnsupported: () => setHasWebGL(false),
  });

  return (
    <div
      ref={containerRef}
      style={style}
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
    >
      {hasWebGL ? (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      ) : (
        <SVGBurnFallback
          color={color}
          inverted={inverted}
        />
      )}
    </div>
  );
};
