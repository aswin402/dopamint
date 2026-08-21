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

  // Refs for dynamic offset calculation (6 cards)
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);
  const pedestalRef = useRef<HTMLDivElement>(null);

  // Dynamic offsets: each card's CSS position → pedestal center
  const [off1, setOff1] = useState({ x: 0, y: 0 });
  const [off2, setOff2] = useState({ x: 0, y: 0 });
  const [off3, setOff3] = useState({ x: 0, y: 0 });
  const [off4, setOff4] = useState({ x: 0, y: 0 });
  const [off5, setOff5] = useState({ x: 0, y: 0 });
  const [off6, setOff6] = useState({ x: 0, y: 0 });

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
        { ref: card4Ref, set: setOff4 },
        { ref: card5Ref, set: setOff5 },
        { ref: card6Ref, set: setOff6 },
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

  // Genie morph refs with staggered delays for 6 cards
  const path1Ref = useGenieMorph(isOpen, 0);
  const path2Ref = useGenieMorph(isOpen, 80);
  const path3Ref = useGenieMorph(isOpen, 160);
  const path4Ref = useGenieMorph(isOpen, 220);
  const path5Ref = useGenieMorph(isOpen, 280);
  const path6Ref = useGenieMorph(isOpen, 340);

  const makePos = (off: { x: number; y: number }, delay: number): Variants => ({
    closed: {
      x: [0, off.x, off.x],
      y: [0, off.y - 70, off.y],
      opacity: [1, 1, 0],
      transition: { duration: 0.75, times: [0, 0.58, 1], ease: 'easeInOut' },
    },
    open: {
      x: [off.x, off.x, 0],
      y: [off.y, off.y - 70, 0],
      opacity: [0, 1, 1, 1],
      transition: { duration: 1.25, times: [0, 0.42, 1], ease: ['easeOut', 'easeInOut'], delay },
    },
  });

  const pos1 = makePos(off1, 0.0);
  const pos2 = makePos(off2, 0.1);
  const pos3 = makePos(off3, 0.2);
  const pos4 = makePos(off4, 0.26);
  const pos5 = makePos(off5, 0.32);
  const pos6 = makePos(off6, 0.38);

  return (
    <section
      ref={sectionRef}
      id="asks"
      className="w-full bg-[#ffffff] pt-8 sm:pt-12 pb-0 relative z-20 overflow-hidden select-none"
    >
      {/* ── Hidden SVG defs: 6 morphing clipPaths ── */}
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
          <clipPath id="genie-clip-4" clipPathUnits="objectBoundingBox">
            <path ref={path4Ref} d={STEP3} />
          </clipPath>
          <clipPath id="genie-clip-5" clipPathUnits="objectBoundingBox">
            <path ref={path5Ref} d={STEP3} />
          </clipPath>
          <clipPath id="genie-clip-6" clipPathUnits="objectBoundingBox">
            <path ref={path6Ref} d={STEP3} />
          </clipPath>
        </defs>
      </svg>

      {/* =========================================================================
          ILLUSTRATIONS: CANDLE STAND (RIGHT) & CROPPED LARGE SCHOLAR (LEFT)
          ========================================================================= */}
      {/* Top Right Candle Stand */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 0.4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 sm:top-8 md:top-12 -right-6 sm:-right-8 md:-right-12 lg:-right-14 w-44 sm:w-56 md:w-68 lg:w-80 pointer-events-none z-20"
      >
        <img
          src={candleStandImg}
          alt="Antique Candle Stand Right"
          className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.18)] select-none"
        />
      </motion.div>

      {/* Bottom Left Renaissance Scholar Character (Cropped at waist, large scale) */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 sm:-bottom-36 md:-bottom-48 lg:-bottom-60 -left-10 sm:-left-14 md:-left-16 lg:-left-20 w-[360px] sm:w-[480px] md:w-[600px] lg:w-[700px] xl:w-[760px] pointer-events-none z-20"
      >
        <img
          src={footerImg}
          alt="Renaissance Character"
          className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(40,30,20,0.25)] select-none"
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20">

        {/* =========================================================================
            TITLE: "Talk Markets. It Trades" (Matching Reference Image 1)
            ========================================================================= */}
        <div className="text-center w-full max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#2d3e32] font-serif font-normal">
            Talk{' '}
            <span className="font-serif italic font-bold text-[#253b2b]">Markets.</span>{' '}
            It{' '}
            <span className="font-serif italic font-bold text-[#253b2b]">Trades</span>
          </h2>
        </div>

        {/* =========================================================================
            MAIN INTERACTIVE STAGE: 6 FLOATING iMESSAGE CARDS + BOTTOM PODIUM
            ========================================================================= */}
        <div className="relative w-full h-[620px] sm:h-[680px] md:h-[740px] lg:h-[780px] flex items-center justify-center">

          {/* ─── CARD 1: TOP LEFT (why is BTC bid...) ─── */}
          <motion.div
            ref={card1Ref}
            variants={pos1}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.22))' }}
            className="absolute top-[2%] sm:top-[4%] left-[6%] sm:left-[9%] lg:left-[11%] w-full max-w-[310px] sm:max-w-[360px] lg:max-w-[390px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-1)' }}
              initial={{ rotate: -3 }}
              animate={{ rotate: -3 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -6,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2.2rem] sm:rounded-[2.8rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4]/90 hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.06)] hover:shadow-[0_24px_60px_rgba(50,35,20,0.12)] p-5 sm:p-6 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col gap-3 sm:gap-3.5">
                <IMessageBubble text="why is BTC bid this morning, funding or spot?" side="left" />
                <IMessageBubble text="my ETH is up 34% scale." side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── CARD 2: BOTTOM LEFT (I found three options...) ─── */}
          <motion.div
            ref={card2Ref}
            variants={pos2}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.22))' }}
            className="absolute top-[54%] sm:top-[56%] left-[13%] sm:left-[16%] lg:left-[18%] w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[370px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-2)' }}
              initial={{ rotate: 2 }}
              animate={{ rotate: 2 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -6,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2.2rem] sm:rounded-[2.8rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4]/90 hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.06)] hover:shadow-[0_24px_60px_rgba(50,35,20,0.12)] p-5 sm:p-6 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col gap-3 sm:gap-3.5">
                <IMessageBubble text="I found three options. Want me to execute?" side="left" />
                <IMessageBubble text="find the best yield now." side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── CARD 3: TOP CENTER (laddered...) ─── */}
          <motion.div
            ref={card3Ref}
            variants={pos3}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.22))' }}
            className="absolute top-[0%] sm:top-[1%] left-[42%] sm:left-[43%] lg:left-[44%] w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[310px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-3)' }}
              initial={{ rotate: -2 }}
              animate={{ rotate: -2 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -6,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2rem] sm:rounded-[2.4rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4]/90 hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.06)] hover:shadow-[0_24px_60px_rgba(50,35,20,0.12)] p-4 sm:p-5 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col">
                <IMessageBubble text="laddered. Stop trailing behind it." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── CARD 4: CENTER SINGLE (any new Upbit listings?) ─── */}
          <motion.div
            ref={card4Ref}
            variants={pos4}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.22))' }}
            className="absolute top-[42%] sm:top-[44%] left-[38%] sm:left-[40%] lg:left-[41%] w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[260px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-4)' }}
              initial={{ rotate: -3 }}
              animate={{ rotate: -3 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -6,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2rem] sm:rounded-[2.4rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4]/90 hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.06)] hover:shadow-[0_24px_60px_rgba(50,35,20,0.12)] p-4 sm:p-5 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col">
                <IMessageBubble text="any new Upbit listings?" side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── CARD 5: TOP RIGHT (trim 20% into strength.) ─── */}
          <motion.div
            ref={card5Ref}
            variants={pos5}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.22))' }}
            className="absolute top-[18%] sm:top-[20%] right-[14%] sm:right-[16%] lg:right-[18%] w-full max-w-[210px] sm:max-w-[250px] lg:max-w-[270px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-5)' }}
              initial={{ rotate: 3 }}
              animate={{ rotate: 3 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -6,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2rem] sm:rounded-[2.4rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4]/90 hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.06)] hover:shadow-[0_24px_60px_rgba(50,35,20,0.12)] p-4 sm:p-5 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col">
                <IMessageBubble text="trim 20% into strength." side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── CARD 6: BOTTOM RIGHT (what am I paying in gas...) ─── */}
          <motion.div
            ref={card6Ref}
            variants={pos6}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.22))' }}
            className="absolute top-[48%] sm:top-[50%] right-[2%] sm:right-[4%] lg:right-[6%] w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[420px] z-20"
          >
            <motion.div
              style={{ clipPath: 'url(#genie-clip-6)' }}
              initial={{ rotate: -4 }}
              animate={{ rotate: -4 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -6,
                transition: { type: 'spring', stiffness: 320, damping: 22 },
              }}
              whileTap={{ scale: 0.98 }}
              className="imsg-card rounded-[2.2rem] sm:rounded-[2.8rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4]/90 hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.06)] hover:shadow-[0_24px_60px_rgba(50,35,20,0.12)] p-5 sm:p-6 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col gap-3 sm:gap-3.5">
                <IMessageBubble text="what am I paying in gas this week?" side="left" />
                <IMessageBubble text="pay this invoice in USDC." side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── BOTTOM CENTER: STONE CARVED iMESSAGE PODIUM (Cropped at bottom edge) ─── */}
          <div
            ref={pedestalRef}
            onClick={handleToggle}
            className="absolute -bottom-14 sm:-bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 w-32 sm:w-36 md:w-40 lg:w-44 z-30 flex flex-col items-center cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={isOpen ? { scale: [1, 1.05, 0.98, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full"
            >
              <img
                src={iMessagePodiumImg}
                alt="iMessage Stone Carved Podium"
                className="w-full h-auto object-contain drop-shadow-[0_18px_32px_rgba(40,30,20,0.18)] select-none"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

