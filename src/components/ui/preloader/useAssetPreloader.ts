import { useState, useEffect, useRef } from 'react';
import iconDopeImg from '../../../assets/Icondope.webp';
import logoDopeImg from '../../../assets/logo_dope.webp';
import heroBgVidMp4 from '../../../assets/herosectionbgvid.mp4';
import heroBgVidMobMp4 from '../../../assets/herosection_bg_mob.mp4';
import chatScreenMp4 from '../../../assets/Chat_Screen.mp4';
import chatScreenMobileMp4 from '../../../assets/Chat_Screen_Mobile.mp4';
import iMessagePodiumImg from '../../../assets/iMessage_Podium.webp';
import candleStandImg from '../../../assets/Candle_Stand.webp';
import divBurnImg from '../../../assets/div_burn.webp';
import footerImg from '../../../assets/Footer.webp';
import footerMobImg from '../../../assets/Footer_mob.png';
import { PRELOADER_COMPLETE_HOLD_MS, PRELOADER_MIN_DURATION_MS, PRELOADER_TIMEOUT_MS } from './config';
import { getOrCreateCachedVideo } from '@/lib/videoCache';

export const PRELOADER_STAGES = [
  'Calibrating neural harnesses',
  'Verifying cryptographic proofs',
  'Synthesizing agent memory loops',
  'Awakening Dopamint protocol',
];

export interface UseAssetPreloaderOptions {
  minDurationMs?: number;
  timeoutMs?: number;
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    if (typeof img.decode === 'function') {
      img.decode().then(() => resolve()).catch(() => resolve());
    } else {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    }
  });
}

/**
 * Preload a video by obtaining or creating a persistent <video> element
 * that is attached to a hidden DOM holder. This guarantees the browser
 * allocates a hardware decoder, enables autoplay, and keeps frames ready
 * for WebGL VideoTexture.
 */
function preloadVideo(src: string, timeoutMs: number): Promise<void> {
  return new Promise((resolve) => {
    try {
      const vid = getOrCreateCachedVideo(src);
      if (vid.readyState >= 3) {
        resolve();
        return;
      }

      let finished = false;
      const done = () => {
        if (!finished) {
          finished = true;
          vid.removeEventListener('canplaythrough', done);
          vid.removeEventListener('canplay', done);
          vid.removeEventListener('loadeddata', done);
          vid.removeEventListener('error', done);
          resolve();
        }
      };

      vid.addEventListener('canplaythrough', done, { once: true });
      vid.addEventListener('canplay', done, { once: true });
      vid.addEventListener('loadeddata', done, { once: true });
      vid.addEventListener('error', done, { once: true });

      setTimeout(done, timeoutMs);
    } catch {
      resolve();
    }
  });
}

function preloadFonts(): Promise<void> {
  if (typeof document !== 'undefined' && document.fonts?.ready) {
    return Promise.race([
      document.fonts.ready.then(() => {}),
      new Promise<void>((r) => setTimeout(r, 1500)),
    ]);
  }
  return Promise.resolve();
}

interface QueuedAsset {
  name: string;
  load: () => Promise<void>;
}

export function useAssetPreloader({
  minDurationMs = PRELOADER_MIN_DURATION_MS,
  timeoutMs = PRELOADER_TIMEOUT_MS,
}: UseAssetPreloaderOptions = {}) {
  const [progress, setProgress] = useState(() => (typeof window === 'undefined' ? 100 : 0));
  const [isComplete, setIsComplete] = useState(() => typeof window === 'undefined');
  const [stageIndex, setStageIndex] = useState(() => (typeof window === 'undefined' ? 3 : 0));

  const realLoadedRef = useRef(0);
  const startTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    // If SSR or test environment without window
    if (typeof window === 'undefined') {
      return;
    }

    startTimeRef.current = performance.now();
    let isCancelled = false;

    const isMob = typeof window !== 'undefined' && window.innerWidth < 1024;
    const heroVid = isMob ? heroBgVidMobMp4 : heroBgVidMp4;

    // Per-video timeout: more generous on mobile (cellular networks are slower)
    const videoTimeout = isMob ? 4000 : 2500;

    // Ordered sequence of critical assets to load in the background
    const ASSET_PIPELINE: QueuedAsset[] = [
      { name: 'Fonts', load: preloadFonts },
      { name: 'Dope Icon', load: () => preloadImage(iconDopeImg) },
      { name: 'Dope Logo', load: () => preloadImage(logoDopeImg) },
      { name: 'Hero Background Video', load: () => preloadVideo(heroVid, videoTimeout) },
      { name: 'Chat Screen Video', load: () => preloadVideo(isMob ? chatScreenMobileMp4 : chatScreenMp4, videoTimeout) },
      { name: 'iMessage Podium', load: () => preloadImage(iMessagePodiumImg) },
      { name: 'Candle Stand', load: () => preloadImage(candleStandImg) },
      { name: 'Burn Div Texture', load: () => preloadImage(divBurnImg) },
      { name: 'Footer Art', load: () => preloadImage(isMob ? footerMobImg : footerImg) },
    ];

    const totalCount = ASSET_PIPELINE.length;

    // Concurrently preload assets so slow networks or unsupported codecs never cause cumulative stalls
    Promise.allSettled(
      ASSET_PIPELINE.map(async (item) => {
        try {
          await item.load();
        } catch {
          // Continue to next asset so nothing blocks
        }
        if (!isCancelled) {
          realLoadedRef.current += 1;
        }
      })
    );

    // Animation Loop for fluid, organic progress
    const updateProgress = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const timeRatio = Math.min(elapsed / minDurationMs, 1);
      
      // Calculate weighted progress (blend of real asset completion & minimum time pacing)
      const assetRatio = Math.min(realLoadedRef.current / totalCount, 1);
      const targetPercent = Math.min(
        Math.floor((assetRatio * 0.65 + timeRatio * 0.35) * 100),
        100
      );

      setProgress((prev) => {
        const next = Math.max(prev, targetPercent);
        
        // Update stage based on progress
        if (next < 25) setStageIndex(0);
        else if (next < 55) setStageIndex(1);
        else if (next < 85) setStageIndex(2);
        else setStageIndex(3);

        return next;
      });

      const isTimeFinished = elapsed >= minDurationMs;
      const isAssetsFinished = realLoadedRef.current >= totalCount;
      const isTimeoutExceeded = elapsed >= timeoutMs;

      if ((isTimeFinished && isAssetsFinished) || isTimeoutExceeded) {
        setProgress(100);
        setStageIndex(3);
        
        if (!completedRef.current) {
          completedRef.current = true;
          // Small buffer at 100% so the user visually sees the completed 100% state
          setTimeout(() => {
            if (!isCancelled) {
              setIsComplete(true);
            }
          }, PRELOADER_COMPLETE_HOLD_MS);
        }
        return;
      }

      rafIdRef.current = requestAnimationFrame(updateProgress);
    };

    rafIdRef.current = requestAnimationFrame(updateProgress);

    return () => {
      isCancelled = true;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [minDurationMs, timeoutMs]);

  return {
    progress,
    stageIndex,
    statusMessage: PRELOADER_STAGES[stageIndex] || PRELOADER_STAGES[0],
    isComplete,
  };
}
