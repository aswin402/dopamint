/**
 * Global Video Cache
 *
 * Persists preloaded <video> elements attached to a hidden offscreen DOM
 * container so that browsers (especially iOS Safari and mobile Chrome)
 * allocate hardware decoder pipelines, respect autoplay policies, and
 * continuously produce frames for Three.js VideoTexture.
 */

const cache = new Map<string, HTMLVideoElement>();

function getHolderContainer(): HTMLElement | null {
  if (typeof document === 'undefined') return null;
  let holder = document.getElementById('__video_cache_dom_holder__');
  if (!holder && document.body) {
    holder = document.createElement('div');
    holder.id = '__video_cache_dom_holder__';
    holder.setAttribute('aria-hidden', 'true');
    holder.style.cssText =
      'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0.001;pointer-events:none;z-index:-9999;overflow:hidden;';
    document.body.appendChild(holder);
  }
  return holder;
}

/**
 * Get or create a persistent <video> element for the given URL.
 * Automatically attaches to the hidden DOM container and starts buffering.
 */
export function getOrCreateCachedVideo(src: string): HTMLVideoElement {
  if (cache.has(src)) {
    return cache.get(src)!;
  }

  const vid = document.createElement('video');
  vid.src = src;
  vid.preload = 'auto';
  vid.muted = true;
  vid.defaultMuted = true;
  vid.loop = true;
  vid.playsInline = true;
  vid.autoplay = true;
  vid.setAttribute('playsinline', '');
  vid.setAttribute('webkit-playsinline', '');
  vid.setAttribute('muted', '');
  vid.setAttribute('autoplay', '');
  vid.disablePictureInPicture = true;
  vid.disableRemotePlayback = true;

  const holder = getHolderContainer();
  if (holder) {
    holder.appendChild(vid);
  }

  vid.load();
  const playPromise = vid.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      const resume = () => {
        vid.play().catch(() => {});
      };
      window.addEventListener('touchstart', resume, { once: true, passive: true });
      window.addEventListener('pointerdown', resume, { once: true, passive: true });
      window.addEventListener('click', resume, { once: true, passive: true });
      window.addEventListener('scroll', resume, { once: true, passive: true });
      window.addEventListener('wheel', resume, { once: true, passive: true });
    });
  }

  cache.set(src, vid);
  return vid;
}

/**
 * Retrieve a cached <video> element, or `null` if not found.
 */
export function getCachedVideo(src: string): HTMLVideoElement | null {
  return cache.get(src) ?? null;
}

/**
 * Store an existing video element into the cache.
 */
export function cacheVideo(src: string, video: HTMLVideoElement): void {
  if (!cache.has(src)) {
    const holder = getHolderContainer();
    if (holder && !holder.contains(video)) {
      holder.appendChild(video);
    }
    cache.set(src, video);
  }
}

/**
 * Check whether a video for the given src has been cached.
 */
export function hasVideo(src: string): boolean {
  return cache.has(src);
}

/**
 * Clear all cached videos and clean up DOM holder.
 */
export function clearVideoCache(): void {
  cache.forEach((vid) => {
    vid.pause();
    vid.removeAttribute('src');
    vid.load();
    vid.remove();
  });
  cache.clear();
  const holder = document.getElementById('__video_cache_dom_holder__');
  if (holder) {
    holder.remove();
  }
}
