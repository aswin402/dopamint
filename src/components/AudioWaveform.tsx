import React, { useEffect, useRef } from 'react';

interface AudioWaveformProps {
  isPlaying?: boolean;
  barsCount?: number;
  height?: number;
  barWidth?: number;
  gap?: number;
  color?: string;
  className?: string;
}

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  isPlaying = false,
  barsCount = 28,
  height = 36,
  barWidth = 3,
  gap = 2,
  color = '#FFFFFF',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    // Set canvas dimensions with DPR scaling for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    const totalWidth = barsCount * (barWidth + gap);
    canvas.width = totalWidth * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${totalWidth}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const render = () => {
      ctx.clearRect(0, 0, totalWidth, height);
      phase += 0.08;

      for (let i = 0; i < barsCount; i++) {
        let barHeight: number;
        if (isPlaying) {
          // Dynamic harmonic motion simulating human vocal frequency spectrum
          const sine1 = Math.sin(phase + i * 0.35);
          const sine2 = Math.cos(phase * 1.4 + i * 0.2);
          const rawHeight = Math.abs(sine1 * 0.5 + sine2 * 0.5);
          barHeight = Math.max(4, rawHeight * (height * 0.85));
        } else {
          // Static resting wave
          barHeight = Math.sin(i * 0.3) * (height * 0.2) + (height * 0.25);
        }

        const x = i * (barWidth + gap);
        const y = (height - barHeight) / 2;

        // Monochrome gradient for sleek depth
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, '#A3A3A3');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [2, 2, 2, 2]);
        ctx.fill();
      }

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, barsCount, height, barWidth, gap, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`inline-block shrink-0 ${className}`}
      aria-label="Audio frequency waveform"
    />
  );
};
