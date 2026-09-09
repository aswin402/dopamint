/**
 * Global Video Cache
 *
 * The preloader creates <video> elements with `preload="auto"` and stores them
 * here so that downstream consumers (Three.js useVideoTexture, CSS fallback
 * layers) can grab the *already-buffered* element instead of creating a new one
 * that forces a full re-download.
 *
 * Keys are the resolved asset URLs (the Vite-hashed paths).
 */

const cache = new Map<string, HTMLVideoElement>();

/**
 * Store a preloaded <video> element in the global cache.
 * The element should already have `src` set and be in a buffered state.
 */
export function cacheVideo(src: string, video: HTMLVideoElement): void {
  cache.set(src, video);
}

/**
 * Retrieve a cached <video> element, or `null` if not found.
 * The caller should reuse the returned element directly (attach it to DOM,
 * use as Three.js texture source, etc.) instead of creating a new one.
 */
export function getCachedVideo(src: string): HTMLVideoElement | null {
  return cache.get(src) ?? null;
}

/**
 * Check whether a video for the given src has been cached.
 */
export function hasVideo(src: string): boolean {
  return cache.has(src);
}

/**
 * Remove a specific video from the cache and release its resources.
 */
export function evictVideo(src: string): void {
  const vid = cache.get(src);
  if (vid) {
    vid.pause();
    vid.removeAttribute('src');
    vid.load();
    cache.delete(src);
  }
}

/**
 * Clear all cached videos. Call on unmount of the entire app if needed.
 */
export function clearVideoCache(): void {
  cache.forEach((vid) => {
    vid.pause();
    vid.removeAttribute('src');
    vid.load();
  });
  cache.clear();
}
