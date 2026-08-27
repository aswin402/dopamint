export interface MotionPolicy {
  smoothScroll: boolean;
  heroDissolve: boolean;
  decorativeMotion: boolean;
}

export function createMotionPolicy(prefersReducedMotion: boolean): MotionPolicy {
  return {
    smoothScroll: !prefersReducedMotion,
    heroDissolve: !prefersReducedMotion,
    decorativeMotion: !prefersReducedMotion,
  };
}
