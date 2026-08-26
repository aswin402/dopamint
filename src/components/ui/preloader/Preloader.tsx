import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import crownImg from '../../../assets/Crown.webp';
import { useAssetPreloader } from './useAssetPreloader';
import { lockPageScroll, unlockPageScroll } from '../scroll-dissolve-reveal/scrollLock';

export interface PreloaderProps {
  onComplete?: () => void;
  minDurationMs?: number;
}

export function Preloader({ onComplete, minDurationMs = 1800 }: PreloaderProps) {
  const { progress, statusMessage, isComplete } = useAssetPreloader({ minDurationMs });
  const [shouldRender, setShouldRender] = useState(true);

  // Lock scroll while preloader is active
  useEffect(() => {
    lockPageScroll();
    return () => {
      unlockPageScroll();
    };
  }, []);

  // When loading finishes, wait for exit animation before unmounting
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Allow exit transition to trigger

      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  const handleExitComplete = () => {
    unlockPageScroll();
    onComplete?.();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {shouldRender && (
        <motion.div
          key="dopamint-preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curtain wipe
            },
          }}
          className="fixed inset-0 z-[99999] w-screen h-screen bg-[#f3f2e6] text-[#141820] flex flex-col justify-between p-4 sm:p-7 md:p-10 select-none overflow-hidden"
          style={{ willChange: 'clip-path, transform' }}
        >
          {/* Subtle Ambient Vignette & Radial Parchment Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,56,46,0.06)_0%,rgba(85,96,78,0.05)_50%,transparent_75%)] pointer-events-none" />
          
          {/* Renaissance Interior Frame Border */}
          <div className="absolute inset-2 sm:inset-4 md:inset-6 border border-[#55604e]/20 rounded-2xl sm:rounded-3xl pointer-events-none" />

          {/* =========================================================================
              TOP TELEMETRY BAR
              ========================================================================= */}
          <header className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#7a382e] font-serif text-base select-none">⌜</span>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#55604e] font-semibold">
                  DOPAMINT PROTOCOL
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#55604e]/70">
                  v2.4 · SOVEREIGN AI
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-2 text-right"
            >
              <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#55604e] font-semibold">
                  BASE NETWORK
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#55604e]/70">
                  ONCHAIN VERIFIABILITY
                </span>
              </div>
              <span className="text-[#7a382e] font-serif text-base select-none">⌝</span>
            </motion.div>
          </header>

          {/* =========================================================================
              CENTER REGAL EMBLEM & LOGO
              ========================================================================= */}
          <main className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
            {/* Crown + Celestial Orbit Rings */}
            <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 mb-4 sm:mb-6">
              {/* Outer Rotating Dotted Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#55604e]/35"
              />

              {/* Middle Thin Solid Ring with Cardinal Dots */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border border-[#7a382e]/25"
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7a382e]" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7a382e]" />
              </motion.div>

              {/* Pulsing Warm Glow Aura */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-16 h-16 rounded-full bg-[#7a382e]/15 blur-xl pointer-events-none"
              />

              {/* Levitating Crown Image */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src={crownImg}
                  alt="Dopamint Crown"
                  className="w-12 sm:w-16 h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(122,56,46,0.25)] select-none pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Brand Headline: D O P A M I N T */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif tracking-[0.32em] font-normal text-[#141820] uppercase ml-[0.32em] mb-1.5 select-none"
            >
              DOPAMINT
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif italic text-xs sm:text-sm md:text-base text-[#55604e] tracking-wider mb-6 sm:mb-8 select-none"
            >
              House of Sovereign Agents
            </motion.p>

            {/* Progress Gauge + Status Log */}
            <div className="flex flex-col items-center gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-sm">
              {/* Numeric Percentage Ticker */}
              <div className="flex items-baseline justify-center">
                <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-[#141820]">
                  {String(progress).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs text-[#7a382e] font-semibold ml-0.5">%</span>
              </div>

              {/* Precision Hairline Progress Bar */}
              <div className="relative w-48 sm:w-60 h-[2px] bg-[#55604e]/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#55604e] via-[#7a382e] to-[#141820] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>

              {/* Dynamic Status Message */}
              <div className="h-5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statusMessage}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#55604e] font-medium text-center"
                  >
                    {statusMessage}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </main>

          {/* =========================================================================
              BOTTOM TELEMETRY BAR
              ========================================================================= */}
          <footer className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#7a382e] font-serif text-base select-none">⌞</span>
              <span className="font-mono text-[10px] sm:text-[11.5px] uppercase tracking-[0.2em] text-[#55604e]">
                HARNESS · MEMORY · PAYMENTS
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  progress === 100 ? 'bg-[#55604e] shadow-[0_0_8px_rgba(85,96,78,0.8)]' : 'bg-[#7a382e] animate-pulse'
                }`}
              />
              <span className="font-mono text-[10px] sm:text-[11.5px] uppercase tracking-[0.2em] text-[#55604e] font-semibold">
                {progress === 100 ? 'READY' : 'MINTING...'}
              </span>
              <span className="text-[#7a382e] font-serif text-base select-none">⌟</span>
            </motion.div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Preloader;
