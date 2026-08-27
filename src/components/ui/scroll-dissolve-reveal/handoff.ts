export const SECTION_HANDOFF_DURATION = 0.9;

export function smoothSectionHandoffProgress(progress: number): number {
  const clamped = Math.max(0, Math.min(1, progress));
  return clamped * clamped * (3 - 2 * clamped);
}

export function getScrollBoundaryState(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number,
  tolerance = 2,
) {
  return {
    atStart: scrollTop <= tolerance,
    atEnd: scrollTop + clientHeight >= scrollHeight - tolerance,
  };
}
