import type Lenis from "lenis";

/**
 * Module-level Lenis singleton accessor.
 *
 * Scroll-jacking components (e.g. ScrollDissolveReveal) need to pause/resume
 * Lenis so the virtual-scroll engine doesn't fight the lock. A module
 * singleton avoids prop drilling and mount-order races between layout and
 * page components.
 */
let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null): void {
  instance = lenis;
}

export function getLenisInstance(): Lenis | null {
  return instance;
}
