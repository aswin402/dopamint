import { useEffect, type RefObject } from 'react';
import confetti from 'canvas-confetti';

/**
 * Celebratory smooth confetti pops when the Take Profit Executed Card appears
 * (stage 8) of the chat lifecycle.
 */
export function useConfettiCelebration(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  screenMode: 'lock' | 'chat',
  messageStage: number
): void {
  useEffect(() => {
    if (screenMode !== 'chat' || messageStage !== 8) return;

    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });

      // Initial energetic burst right above the profit card
      myConfetti({
        particleCount: 45,
        spread: 70,
        origin: { x: 0.5, y: 0.44 },
        colors: ['#10b981', '#34d399', '#fbbf24', '#f59e0b', '#38bdf8', '#a855f7', '#ec4899'],
        startVelocity: 22,
        gravity: 0.9,
        scalar: 0.8,
        ticks: 160,
      });

      // Subtle twin sparkle bursts from left and right
      const sparkleTimer = setTimeout(() => {
        myConfetti({
          particleCount: 22,
          angle: 60,
          spread: 45,
          origin: { x: 0.28, y: 0.46 },
          colors: ['#34d399', '#fbbf24', '#38bdf8'],
          startVelocity: 17,
          gravity: 0.85,
          scalar: 0.7,
          ticks: 140,
        });
        myConfetti({
          particleCount: 22,
          angle: 120,
          spread: 45,
          origin: { x: 0.72, y: 0.46 },
          colors: ['#10b981', '#f59e0b', '#a855f7'],
          startVelocity: 17,
          gravity: 0.85,
          scalar: 0.7,
          ticks: 140,
        });
      }, 160);

      return () => clearTimeout(sparkleTimer);
    }
  }, [messageStage, screenMode, canvasRef]);
}
