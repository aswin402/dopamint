// Smooth slow scroller using iOS easeInOut cubic curve
export function smoothScrollSlowly(
  element: HTMLElement,
  target: number,
  duration = 2600
): () => void {
  const start = element.scrollTop;
  const change = target - start;
  if (Math.abs(change) < 2) return () => {};
  const startTime = performance.now();

  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  let animationFrameId: number;

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    element.scrollTop = start + change * eased;

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animateScroll);
    }
  };

  animationFrameId = requestAnimationFrame(animateScroll);
  return () => cancelAnimationFrame(animationFrameId);
}
