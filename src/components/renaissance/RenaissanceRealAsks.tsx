import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { interpolate as flubberInterpolate } from 'flubber';
import candleStandImg from '../../assets/Candle_Stand.png';
import footerImg from '../../assets/footer.png';
import iMessagePodiumImg from '../../assets/iMessage_Podium.png';
import { IMessageBubble } from './IMessageBubble';

// =========================================================================
// EXACT CODEPEN GENIE MORPH — step3 → step2 → step0
// Applied as clip-path on top of the ORIGINAL card styling
// =========================================================================

// SVG morph paths in objectBoundingBox 0-1 coordinates
const STEP3 = 'M 0.35 0.85 L 0.65 0.85 L 0.65 1.00 L 0.35 1.00 Z';
const STEP2 =
  'M 0.00 0.00 L 1.00 0.00 C 0.96 0.18 0.88 0.36 0.80 0.52 C 0.74 0.64 0.68 0.78 0.62 1.00 L 0.38 1.00 C 0.32 0.78 0.26 0.64 0.20 0.52 C 0.12 0.36 0.04 0.18 0.00 0.00 Z';
const STEP0 = 'M 0.00 0.00 L 1.00 0.00 L 1.00 1.00 L 0.00 1.00 Z';

// Pre-compute flubber interpolators
const morph3to2 = flubberInterpolate(STEP3, STEP2, { maxSegmentLength: 0.05 });
const morph2to0 = flubberInterpolate(STEP2, STEP0, { maxSegmentLength: 0.05 });

// =========================================================================
// useGenieMorph — hook that drives the SVG path morph animation
// Returns a ref to attach to the <path> inside a <clipPath>
// =========================================================================
function useGenieMorph(isOpen: boolean, delayMs: number) {
  const pathRef = useRef<SVGPathElement>(null);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getPath = useCallback((progress: number): string => {
    // Phase 1 (0 to 0.42): Emergence straight out of pedestal (STEP3 -> STEP2 funnel)
    // Phase 2 (0.42 to 1.0): Fan-out to destination and expand (STEP2 -> STEP0 full card)
    if (progress <= 0.42) {
      return morph3to2(progress / 0.42);
    }
    return morph2to0((progress - 0.42) / 0.58);
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    if (isOpen) {
      // OPEN: step3 → step2 → step0
      timeoutRef.current = setTimeout(() => {
        let start: number | null = null;
        const duration = 1250;

        const animate = (ts: number) => {
          if (!start) start = ts;
          const rawT = Math.min((ts - start) / duration, 1);

          if (pathRef.current) {
            pathRef.current.setAttribute('d', getPath(rawT));
          }
          if (rawT < 1) {
            rafRef.current = requestAnimationFrame(animate);
          }
        };

        rafRef.current = requestAnimationFrame(animate);
      }, delayMs);
    } else {
      // CLOSE: step0 → step2 → step3
      let start: number | null = null;
      const duration = 750;

      const animate = (ts: number) => {
        if (!start) start = ts;
        const rawT = Math.min((ts - start) / duration, 1);
        const progress = 1 - rawT;

        if (pathRef.current) {
          pathRef.current.setAttribute('d', getPath(progress));
        }
        if (rawT < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isOpen, delayMs, getPath]);

  return pathRef;
}

// =========================================================================
// MAIN SECTION
// =========================================================================
export const RenaissanceRealAsks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });
  const [isOpen, setIsOpen] = useState(false);

  // Refs for dynamic offset calculation
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const pedestalRef = useRef<HTMLDivElement>(null);

  // Dynamic offsets: each card's CSS position → pedestal center
  const [off1, setOff1] = useState({ x: 0, y: 0 });
  const [off2, setOff2] = useState({ x: 0, y: 0 });
  const [off3, setOff3] = useState({ x: 0, y: 0 });

  // Measure offsets: getBoundingClientRect for pedestal (includes CSS transforms),
  // offsetLeft/offsetTop for cards (layout position, no transforms)
  useEffect(() => {
    const measure = () => {
      const ped = pedestalRef.current;
      if (!ped || !ped.offsetParent) return;

      // Get the shared offsetParent's viewport position to convert coordinate spaces
      const parentRect = (ped.offsetParent as HTMLElement).getBoundingClientRect();
      const pedRect = ped.getBoundingClientRect();

      // Pedestal VISUAL center relative to offsetParent (includes translateX(-50%))
      const pedCx = pedRect.left + pedRect.width / 2 - parentRect.left;
      const pedTy = pedRect.top - parentRect.top;

      [
        { ref: card1Ref, set: setOff1 },
        { ref: card2Ref, set: setOff2 },
        { ref: card3Ref, set: setOff3 },
      ].forEach(({ ref, set }) => {
        const el = ref.current;
        if (!el) return;
        // Card CSS layout center (unaffected by framer-motion transforms)
        const cardCx = el.offsetLeft + el.offsetWidth / 2;
        const cardCy = el.offsetTop + el.offsetHeight / 2;
        set({ x: pedCx - cardCx, y: pedTy - cardCy });
      });
    };

    const raf = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Wait 0.8s after section enters view, then trigger card emergence
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isInView) {
      timer = setTimeout(() => setIsOpen(true), 800);
    } else {
      setIsOpen(false);
    }
    return () => clearTimeout(timer);
  }, [isInView]);

  const handleToggle = () => setIsOpen((p) => !p);

  // Genie morph refs with staggered delays
  const path1Ref = useGenieMorph(isOpen, 0);
  const path2Ref = useGenieMorph(isOpen, 140);
  const path3Ref = useGenieMorph(isOpen, 280);

  // Position variants:
  // OPEN:
  //   1) 0 -> 0.42: Emerges straight up at pedestal center (x: off.x, y: off.y -> off.y - 70)
  //   2) 0.42 -> 1.0: Fans out to final position (x: off.x -> 0, y: off.y - 70 -> 0)
  // CLOSE:
  //   1) 0 -> 0.58: Flies back from destination to pedestal center
  //   2) 0.58 -> 1.0: Sinks straight down into pedestal
  const pos1: Variants = {
    closed: {
      x: [0, off1.x, off1.x],
      y: [0, off1.y - 70, off1.y],
      opacity: [1, 1, 0],
      transition: { duration: 0.75, times: [0, 0.58, 1], ease: 'easeInOut' },
    },
    open: {
      x: [off1.x, off1.x, 0],
      y: [off1.y, off1.y - 70, 0],
      opacity: [0, 1, 1, 1],
      transition: { duration: 1.25, times: [0, 0.42, 1], ease: ['easeOut', 'easeInOut'], delay: 0.0 },
    },
  };

  const pos2: Variants = {
    closed: {
      x: [0, off2.x, off2.x],
      y: [0, off2.y - 70, off2.y],
      opacity: [1, 1, 0],
      transition: { duration: 0.75, times: [0, 0.58, 1], ease: 'easeInOut' },
    },
    open: {
      x: [off2.x, off2.x, 0],
      y: [off2.y, off2.y - 70, 0],
      opacity: [0, 1, 1, 1],
      transition: { duration: 1.25, times: [0, 0.42, 1], ease: ['easeOut', 'easeInOut'], delay: 0.14 },
    },
  };

  const pos3: Variants = {
    closed: {
      x: [0, off3.x, off3.x],
      y: [0, off3.y - 70, off3.y],
      opacity: [1, 1, 0],
      transition: { duration: 0.75, times: [0, 0.58, 1], ease: 'easeInOut' },
    },
    open: {
      x: [off3.x, off3.x, 0],
      y: [off3.y, off3.y - 70, 0],
      opacity: [0, 1, 1, 1],
      transition: { duration: 1.25, times: [0, 0.42, 1], ease: ['easeOut', 'easeInOut'], delay: 0.28 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="asks"
      className="w-full bg-[#ffffff] pt-16 sm:pt-24 pb-20 sm:pb-32 relative z-20 overflow-x-clip select-none"
    >
      {/* ── Hidden SVG defs: 3 morphing clipPaths ── */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="genie-clip-1" clipPathUnits="objectBoundingBox">
            <path ref={path1Ref} d={STEP3} />
          </clipPath>
          <clipPath id="genie-clip-2" clipPathUnits="objectBoundingBox">
            <path ref={path2Ref} d={STEP3} />
          </clipPath>
          <clipPath id="genie-clip-3" clipPathUnits="objectBoundingBox">
            <path ref={path3Ref} d={STEP3} />
          </clipPath>
        </defs>
      </svg>
      {/* =========================================================================
          ILLUSTRATIONS: CANDLE STAND (RIGHT) & FOOTER SCHOLAR (LEFT)
          ========================================================================= */}
      {/* Top Right Candle Stand */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 0.4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 sm:-top-2 md:top-2 -right-10 sm:-right-16 md:-right-20 lg:-right-24 xl:-right-28 w-48 sm:w-64 md:w-80 lg:w-[360px] xl:w-[420px] pointer-events-none z-20"
      >
        <img
          src={candleStandImg}
          alt="Antique Candle Stand Right"
          className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.18)] select-none"
        />
      </motion.div>

      {/* Bottom Left Renaissance Scholar Character (src/assets/footer.png) */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 sm:bottom-0 md:bottom-2 left-0 sm:left-4 md:left-8 lg:left-12 w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 pointer-events-none z-20"
      >
        <img
          src={footerImg}
          alt="Renaissance Character"
          className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.22)] select-none"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">

        {/* =========================================================================
            TITLE: "Talk Markets. It Trades"
            ========================================================================= */}
        <div className="text-center space-y-3 mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#1e2a22] tracking-tight">
            Talk Markets.{' '}
            <span className="font-serif italic font-bold text-[#141d17]">It Trades</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-sans tracking-wide">
            DOPE orchestrates the trade in real time.
          </p>
        </div>

        {/* =========================================================================
            MAIN INTERACTIVE STAGE: 3 FLOATING iMESSAGE CARDS + STONE PEDESTAL
            ========================================================================= */}
        <div className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[740px] flex items-center justify-center">

          {/* ─── CARD 1: TOP LEFT ─── */}
          <motion.div
            ref={card1Ref}
            variants={pos1}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-0 sm:top-2 left-0 sm:left-[2%] lg:left-[6%] w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-1)' }}
              initial={{ rotate: -3 }}
              animate={{ rotate: -3 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -8,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-6 sm:p-9 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <IMessageBubble text="I think it goes to $4.2k this week." side="left" />
                <IMessageBubble text="long ETH 5x, take profit at $4,150." side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── CARD 2: MIDDLE LEFT ─── */}
          <motion.div
            ref={card2Ref}
            variants={pos2}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[52%] sm:top-[56%] left-0 sm:left-[5%] lg:left-[10%] w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[380px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-2)' }}
              initial={{ rotate: 2.5 }}
              animate={{ rotate: 2.5 }}
              whileHover={{
                scale: 1.06,
                rotate: 0.5,
                y: -8,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-5 sm:p-6 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col">
                <IMessageBubble text="laddered. Stop trailing behind it." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── CARD 3: RIGHT ─── */}
          <motion.div
            ref={card3Ref}
            variants={pos3}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[38%] sm:top-[42%] right-0 sm:right-[4%] lg:right-[8%] w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[480px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-3)' }}
              initial={{ rotate: 4 }}
              animate={{ rotate: 4 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                y: -8,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-6 sm:p-9 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <IMessageBubble text="what am I paying in gas this week?" side="left" />
                <IMessageBubble text="pay this invoice in USDC." side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── BOTTOM CENTER: STONE CARVED iMESSAGE PODIUM (src/assets/iMessage_Podium.png) ─── */}
          <div
            ref={pedestalRef}
            onClick={handleToggle}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 sm:w-48 md:w-56 lg:w-64 z-30 flex flex-col items-center cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={isOpen ? { scale: [1, 1.04, 0.98, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full"
            >
              <img
                src={iMessagePodiumImg}
                alt="iMessage Stone Carved Podium"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(40,30,20,0.18)] select-none"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
