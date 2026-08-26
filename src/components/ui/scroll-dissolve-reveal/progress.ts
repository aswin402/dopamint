export const VISUAL_REVEAL_COMPLETE_AT = 0.95;

export function clampRevealProgress(value: number): number {
  return Math.max(0, Math.min(1, value));
}

/**
 * Past this point the dissolve is more than half done, so a short input pause
 * commits the reveal instead of leaving a visually finished transition stuck
 * one gesture short of the snap threshold (page locked, navbar theme stale).
 */
export const MAGNETIC_COMPLETION_AT = 0.5;

/**
 * Downward input completes the interaction at the same point the shader is
 * fully dissolved. Reverse input opts out of snapping so it can move away
 * from 1 smoothly.
 */
export function normalizeRevealTarget(
  value: number,
  snapAtVisualCompletion = true,
): number {
  const clamped = clampRevealProgress(value);
  return snapAtVisualCompletion && clamped >= VISUAL_REVEAL_COMPLETE_AT
    ? 1
    : clamped;
}

export function toDissolveProgress(progress: number): number {
  return Math.min(1, clampRevealProgress(progress) / VISUAL_REVEAL_COMPLETE_AT);
}
