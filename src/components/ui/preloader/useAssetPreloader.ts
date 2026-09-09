import { useState, useEffect, useRef } from 'react';
import iconDopeImg from '../../../assets/Icondope.webp';
import logoDopeImg from '../../../assets/logo_dope.webp';
import heroBgVidMp4 from '../../../assets/herosectionbgvid.mp4';
import heroBgVidMobWebm from '../../../assets/herosection_bg_mob.webm';
import chatScreenMp4 from '../../../assets/Chat_Screen.mp4';
import chatScreenMobileMp4 from '../../../assets/Chat_Screen_Mobile.mp4';
import iMessagePodiumImg from '../../../assets/iMessage_Podium.webp';
import candleStandImg from '../../../assets/Candle_Stand.webp';
import divBurnImg from '../../../assets/div_burn.webp';
import footerImg from '../../../assets/Footer.webp';
import footerMobImg from '../../../assets/Footer_mob.png';
import { PRELOADER_COMPLETE_HOLD_MS, PRELOADER_MIN_DURATION_MS, PRELOADER_TIMEOUT_MS } from './config';

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

function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve) => {
    const vid = document.createElement('video');
    vid.preload = 'auto';
    vid.muted = true;
    vid.playsInline = true;
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', '');
    vid.setAttribute('muted', '');

    let finished = false;
    const done = () => {
      if (!finished) {
        finished = true;
        vid.removeEventListener('canplay', done);
        vid.removeEventListener('canplaythrough', done);
        vid.removeEventListener('loadeddata', done);
        vid.removeEventListener('error', done);
        resolve();
      }
    };

    vid.addEventListener('canplay', done, { once: true });
    vid.addEventListener('canplaythrough', done, { once: true });
    vid.addEventListener('loadeddata', done, { once: true });
    vid.addEventListener('error', done, { once: true });

    // Safety timeout per video so slow cellular/mobile networks don't stall the pipeline
    setTimeout(done, 2200);

    vid.src = src;
    vid.load();
  });
}

function preloadFonts(): Promise<void> {
  if (typeof document !== 'undefined' && document.fonts?.ready) {
    return Promise.race([
      document.fonts.ready.then(() => {}),
      new Promise<void>((r) => setTimeout(r, 1200)),
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

    // Ordered sequence of critical assets to load one by one in the background
    const ASSET_PIPELINE: QueuedAsset[] = [
      { name: 'Fonts', load: preloadFonts },
      { name: 'Dope Icon', load: () => preloadImage(iconDopeImg) },
      { name: 'Dope Logo', load: () => preloadImage(logoDopeImg) },
      { name: 'Hero Background Video', load: () => preloadVideo(isMob ? heroBgVidMobWebm : heroBgVidMp4) },
      { name: 'Chat Screen Video', load: () => preloadVideo(isMob ? chatScreenMobileMp4 : chatScreenMp4) },
      { name: 'iMessage Podium', load: () => preloadImage(iMessagePodiumImg) },
      { name: 'Candle Stand', load: () => preloadImage(candleStandImg) },
      { name: 'Burn Div Texture', load: () => preloadImage(divBurnImg) },
      { name: 'Footer Art', load: () => preloadImage(isMob ? footerMobImg : footerImg) },
    ];

    const totalCount = ASSET_PIPELINE.length;

    // Load assets strictly one by one in sequence
    (async () => {
      for (let i = 0; i < totalCount; i++) {
        if (isCancelled) break;
        try {
          await ASSET_PIPELINE[i].load();
        } catch {
          // Continue to next asset so nothing blocks
        }
        if (isCancelled) break;
        realLoadedRef.current = i + 1;
      }
    })();

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
