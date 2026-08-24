import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { interpolate as flubberInterpolate } from 'flubber';
import candleStandImg from '../../assets/Candle_Stand.png';
import sideCharImg from '../../assets/side_char.png';
import iMessagePodiumImg from '../../assets/iMessage_Podium.png';
import { IMessageBubble } from './IMessageBubble';

const STEP3 = 'M 0.35 0.85 L 0.65 0.85 L 0.65 1.00 L 0.35 1.00 Z';
const STEP2 =
  'M 0.00 0.00 L 1.00 0.00 C 0.96 0.18 0.88 0.36 0.80 0.52 C 0.74 0.64 0.68 0.78 0.62 1.00 L 0.38 1.00 C 0.32 0.78 0.26 0.64 0.20 0.52 C 0.12 0.36 0.04 0.18 0.00 0.00 Z';
const STEP0 = 'M 0.00 0.00 L 1.00 0.00 L 1.00 1.00 L 0.00 1.00 Z';

const morph3to2 = flubberInterpolate(STEP3, STEP2, { maxSegmentLength: 0.05 });
const morph2to0 = flubberInterpolate(STEP2, STEP0, { maxSegmentLength: 0.05 });

function useGenieMorph(isOpen: boolean, delayMs: number) {
  const pathRef = useRef<SVGPathElement>(null);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getPath = useCallback((progress: number): string => {
    if (progress <= 0.42) return morph3to2(progress / 0.42);
    return morph2to0((progress - 0.42) / 0.58);
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (isOpen) {
      timeoutRef.current = setTimeout(() => {
        let start: number | null = null;
        const duration = 1250;
        const animate = (ts: number) => {
          if (!start) start = ts;
          const rawT = Math.min((ts - start) / duration, 1);
          if (pathRef.current) pathRef.current.setAttribute('d', getPath(rawT));
          if (rawT < 1) rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
      }, delayMs);
    } else {
      let start: number | null = null;
      const duration = 850;
      const animate = (ts: number) => {
        if (!start) start = ts;
        const rawT = Math.min((ts - start) / duration, 1);
        if (pathRef.current) pathRef.current.setAttribute('d', getPath(1 - rawT));
        if (rawT < 1) rafRef.current = requestAnimationFrame(animate);
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

export const RenaissanceRealAsks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  const [isOpen, setIsOpen] = useState(false);

  // 5 card refs
  const card1Ref = useRef<HTMLDivElement>(null); // top-left    QA: BTC
  const card2Ref = useRef<HTMLDivElement>(null); // top-center  A: birthday
  const card3Ref = useRef<HTMLDivElement>(null); // top-right   A: electricity
  const card4Ref = useRef<HTMLDivElement>(null); // bot-left    QA: yield
  const card5Ref = useRef<HTMLDivElement>(null); // bot-right   QA: schedule
  const pedestalRef = useRef<HTMLDivElement>(null);

  const [off1, setOff1] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off2, setOff2] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off3, setOff3] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off4, setOff4] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off5, setOff5] = useState({ x: 0, y: 0, sinkY: 0 });

  useEffect(() => {
    const measure = () => {
      const ped = pedestalRef.current;
      if (!ped || !ped.offsetParent) return;
      const parentRect = (ped.offsetParent as HTMLElement).getBoundingClientRect();
      const pedRect = ped.getBoundingClientRect();
      const pedCx = pedRect.left + pedRect.width / 2 - parentRect.left;
      const pedTy = pedRect.top - parentRect.top;
      const pedSinkCenterY = pedTy + pedRect.height * 0.42;
      [
        { ref: card1Ref, set: setOff1 },
        { ref: card2Ref, set: setOff2 },
        { ref: card3Ref, set: setOff3 },
        { ref: card4Ref, set: setOff4 },
        { ref: card5Ref, set: setOff5 },
      ].forEach(({ ref, set }) => {
        const el = ref.current;
        if (!el) return;
        const cardCx = el.offsetLeft + el.offsetWidth / 2;
        const cardCy = el.offsetTop + el.offsetHeight / 2;
        set({ x: pedCx - cardCx, y: pedTy - cardCy, sinkY: pedSinkCenterY - cardCy });
      });
    };
    const raf = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', measure); };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, [isInView]);

  const sectionOpen = isInView && isOpen;
  const handleToggle = () => setIsOpen((p) => !p);

  const path1Ref = useGenieMorph(sectionOpen, 0);
  const path2Ref = useGenieMorph(sectionOpen, 100);
  const path3Ref = useGenieMorph(sectionOpen, 200);
  const path4Ref = useGenieMorph(sectionOpen, 50);
  const path5Ref = useGenieMorph(sectionOpen, 150);

  const makePos = (off: { x: number; y: number; sinkY: number }, delay: number): Variants => ({
    closed: {
      x: [0, off.x, off.x], y: [0, off.y - 30, off.sinkY],
      scale: [1, 0.85, 0.08], opacity: [1, 1, 0],
      transition: { duration: 0.85, times: [0, 0.45, 1], ease: ['easeInOut', 'easeIn'] },
    },
    open: {
      x: [off.x, off.x, 0], y: [off.sinkY, off.y - 30, 0],
      scale: [0.08, 0.85, 1], opacity: [0, 1, 1],
      transition: { duration: 1.25, times: [0, 0.42, 1], ease: ['easeOut', 'easeInOut'], delay },
    },
  });

  const pos1 = makePos(off1, 0.10);
  const pos2 = makePos(off2, 0.22);
  const pos3 = makePos(off3, 0.30);
  const pos4 = makePos(off4, 0.14);
  const pos5 = makePos(off5, 0.20);

  const cardBase = 'imsg-card rounded-[2.5rem] sm:rounded-[3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-6 sm:p-9 cursor-pointer transition-colors duration-300';
  const cardSm   = 'imsg-card rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-5 sm:p-6 cursor-pointer transition-colors duration-300';
  const spring   = { type: 'spring', stiffness: 320, damping: 22 } as const;

  return (
    <section
      ref={sectionRef}
      id="asks"
      className="w-full bg-[#ffffff] pt-12 sm:pt-16 pb-0 relative z-20 overflow-hidden select-none"
    >
      {/* SVG clip defs — 5 genie morph paths */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="genie-clip-1" clipPathUnits="objectBoundingBox"><path ref={path1Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-2" clipPathUnits="objectBoundingBox"><path ref={path2Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-3" clipPathUnits="objectBoundingBox"><path ref={path3Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-4" clipPathUnits="objectBoundingBox"><path ref={path4Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-5" clipPathUnits="objectBoundingBox"><path ref={path5Ref} d={STEP3} /></clipPath>
        </defs>
      </svg>

      {/* Candle stand — top right */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 0.4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 sm:top-8 md:top-12 -right-6 sm:-right-8 md:-right-12 lg:-right-14 w-44 sm:w-56 md:w-68 lg:w-80 pointer-events-none z-20"
      >
        <img src={candleStandImg} alt="Antique Candle Stand" className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.18)] select-none" />
      </motion.div>

      {/* Scholar — bottom left */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-48 sm:-bottom-64 md:-bottom-84 lg:-bottom-[420px] xl:-bottom-[480px] -left-40 sm:-left-56 md:-left-72 lg:-left-[360px] xl:-left-[420px] 2xl:-left-[460px] w-[520px] sm:w-[680px] md:w-[840px] lg:w-[980px] xl:w-[1100px] pointer-events-none z-20"
      >
        <img src={sideCharImg} alt="Renaissance Character" className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(40,30,20,0.25)] select-none" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">

        {/* Title */}
        <div className="text-center w-full max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#2d3e32] font-serif font-normal">
            What would you{' '}
            <span className="font-serif italic font-bold text-[#253b2b]">ask</span>{' '}
            your agent?
          </h2>
          <p className="mt-4 sm:mt-5 font-serif italic text-xl sm:text-2xl text-[#4a5c4e] leading-snug">
            Just state what you want.
          </p>
        </div>

        {/* Cards + pedestal */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[640px] sm:min-h-[700px] lg:min-h-[760px]">

          {/* CARD 1 — top-left | QA: why is BTC sending / spot buying */}
          <motion.div
            ref={card1Ref} variants={pos1} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[2%] sm:top-[4%] left-0 sm:left-[1%] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-1)' }} initial={{ rotate: -3 }} animate={{ rotate: -3 }}
              whileHover={{ scale: 1.05, rotate: -0.5, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardBase}>
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <IMessageBubble text="why is BTC sending?" side="right" />
                <IMessageBubble text="spot buying picked up." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 2 — top-center | A: girlfriend's birthday */}
          <motion.div
            ref={card2Ref} variants={pos2} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[0%] left-[40%] sm:left-[42%] lg:left-[44%] w-full max-w-[210px] sm:max-w-[260px] lg:max-w-[290px] z-20 hidden sm:block"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-2)' }} initial={{ rotate: 2.5 }} animate={{ rotate: 2.5 }}
              whileHover={{ scale: 1.06, rotate: 0.5, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <div className="flex flex-col">
                <IMessageBubble text="yo, today is your girlfriend's birthday." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 3 — top-right | A: electricity bills */}
          <motion.div
            ref={card3Ref} variants={pos3} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[5%] sm:top-[7%] right-0 sm:right-[1%] w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[270px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-3)' }} initial={{ rotate: -1.5 }} animate={{ rotate: -1.5 }}
              whileHover={{ scale: 1.06, rotate: 0.5, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <div className="flex flex-col">
                <IMessageBubble text="i paid the electricity bills no worries." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 4 — bottom-left | QA: find me a good yield / found 3 */}
          <motion.div
            ref={card4Ref} variants={pos4} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[50%] sm:top-[52%] left-0 sm:left-[1%] w-full max-w-[300px] sm:max-w-[370px] lg:max-w-[410px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-4)' }} initial={{ rotate: -2.5 }} animate={{ rotate: -2.5 }}
              whileHover={{ scale: 1.05, rotate: -0.5, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardBase}>
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <IMessageBubble text="find me a good yield?" side="right" />
                <IMessageBubble text="found 3. want me to rank them?" side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 5 — bottom-right | QA: schedule / 2 meetings */}
          <motion.div
            ref={card5Ref} variants={pos5} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[46%] sm:top-[48%] right-0 sm:right-[1%] w-full max-w-[300px] sm:max-w-[370px] lg:max-w-[410px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-5)' }} initial={{ rotate: 3.5 }} animate={{ rotate: 3.5 }}
              whileHover={{ scale: 1.05, rotate: 1, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardBase}>
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <IMessageBubble text="what's on my schedule tomorrow?" side="right" />
                <IMessageBubble text="2 meetings, gym at 7. dinner reservation at 8." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* Stone carved pedestal — bottom center */}
          <div
            ref={pedestalRef} onClick={handleToggle}
            className="absolute -bottom-14 sm:-bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 w-32 sm:w-36 md:w-40 lg:w-44 z-30 flex flex-col items-center cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              animate={sectionOpen ? { scale: [1, 1.05, 0.98, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }} className="w-full"
            >
              <img src={iMessagePodiumImg} alt="iMessage Stone Carved Podium" className="w-full h-auto object-contain drop-shadow-[0_18px_32px_rgba(40,30,20,0.18)] select-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
