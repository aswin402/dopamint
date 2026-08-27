import { useState, useEffect, useRef } from 'react';
import crownImg from '../../../assets/Crown.webp';
import heroBgVid from '../../../assets/herosectionbgvid.webm';
import { PRELOADER_COMPLETE_HOLD_MS, PRELOADER_MIN_DURATION_MS, PRELOADER_TIMEOUT_MS } from './config';

const CRITICAL_IMAGES = [crownImg];
const CRITICAL_VIDEOS = [heroBgVid];

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

export function useAssetPreloader({
  minDurationMs = PRELOADER_MIN_DURATION_MS,
  timeoutMs = PRELOADER_TIMEOUT_MS,
}: UseAssetPreloaderOptions = {}) {
  const [progress, setProgress] = useState(() => (typeof window === 'undefined' ? 100 : 0));
  const [isComplete, setIsComplete] = useState(() => typeof window === 'undefined');
  const [stageIndex, setStageIndex] = useState(() => (typeof window === 'undefined' ? 3 : 0));

  const realLoadedRef = useRef(0);
  const totalItemsRef = useRef(CRITICAL_IMAGES.length + CRITICAL_VIDEOS.length + 1); // +1 for fonts
  const startTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    // If SSR or test environment without window
    if (typeof window === 'undefined') {
      return;
    }

    startTimeRef.current = performance.now();
    let loadedCount = 0;
    const totalCount = totalItemsRef.current;

    const notifyItemLoaded = () => {
      loadedCount += 1;
      realLoadedRef.current = loadedCount;
    };

    // 1. Preload Images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = notifyItemLoaded;
      img.onerror = notifyItemLoaded;
      img.src = src;
    });

    // 2. Preload Videos (metadata / early buffer)
    CRITICAL_VIDEOS.forEach((src) => {
      const vid = document.createElement('video');
      vid.preload = 'metadata';
      vid.muted = true;
      vid.onloadedmetadata = notifyItemLoaded;
      vid.onerror = notifyItemLoaded;
      vid.src = src;
    });

    // 3. Preload document fonts
    if (document.fonts?.ready) {
      document.fonts.ready
        .then(notifyItemLoaded)
        .catch(notifyItemLoaded);
    } else {
      notifyItemLoaded();
    }

    // Animation Loop for fluid, organic progress
    const updateProgress = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const timeRatio = Math.min(elapsed / minDurationMs, 1);
      
      // Calculate weighted progress (blend of asset loading & time progression)
      const assetRatio = Math.min(realLoadedRef.current / totalCount, 1);
      const targetPercent = Math.min(
        Math.floor((assetRatio * 0.4 + timeRatio * 0.6) * 100),
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
            setIsComplete(true);
          }, PRELOADER_COMPLETE_HOLD_MS);
        }
        return;
      }

      rafIdRef.current = requestAnimationFrame(updateProgress);
    };

    rafIdRef.current = requestAnimationFrame(updateProgress);

    return () => {
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
