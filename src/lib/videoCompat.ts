/**
 * Cross-browser video compatibility utility.
 * Safely determines whether WebM or universal H.264 MP4 should be used.
 * Safari / iOS / WebKit and browsers lacking VP9 support seamlessly receive MP4.
 */
export function getOptimalVideo(webmSrc: string, mp4Src: string): string {
  if (typeof document === 'undefined') return mp4Src;
  try {
    const video = document.createElement('video');
    const canPlayWebm =
      video.canPlayType('video/webm; codecs="vp9"') === 'probably' ||
      video.canPlayType('video/webm; codecs="vp9"') === 'maybe';

    // Safari on iOS/macOS has documented WebGL texture and decode issues with WebM VP9.
    // Use universal H.264 MP4 for Safari to guarantee 100% video playback.
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (canPlayWebm && !isSafari) {
      return webmSrc;
    }
  } catch {
    // Graceful fallback to MP4
  }
  return mp4Src;
}
