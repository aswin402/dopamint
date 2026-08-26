export const SECTION_HANDOFF_DURATION = 0.9;

export function smoothSectionHandoffProgress(progress: number): number {
  const clamped = Math.max(0, Math.min(1, progress));
  return clamped * clamped * (3 - 2 * clamped);
}
