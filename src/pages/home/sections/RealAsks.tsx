import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform, type Variants, type MotionValue } from 'framer-motion';
import { interpolate as flubberInterpolate } from 'flubber';
import candleStandImg from '../../../assets/Candle_Stand.webp';
import sideCharImg from '../../../assets/side_char.webp';
import iMessagePodiumImg from '../../../assets/iMessage_Podium.webp';
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

interface IntegrationItem {
  name: string;
  domain: string;
}

const LogosHeader: React.FC<{ items: IntegrationItem[] }> = ({ items }) => (
  <div className="flex items-center justify-end gap-1.5 pb-1 sm:pb-1.5 mb-1.5 w-full">
    {items.map((item) => (
      <div
        key={item.name}
        title={item.name}
        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f4ede4] border border-[#e3d0bb] shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex items-center justify-center p-0.5 sm:p-1 select-none transition-transform hover:scale-110"
      >
        <img
          src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
          alt={item.name}
          className="w-full h-full rounded-full object-contain"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
      </div>
    ))}
  </div>
);

interface AskCardData {
  id: string;
  logos: IntegrationItem[];
  bubbles: { text: string; side: 'left' | 'right' }[];
  rotation: number;
}

const ASK_CARDS: AskCardData[] = [
  {
    id: 'birthday',
    logos: [
      { name: 'Google Calendar', domain: 'calendar.google.com' },
      { name: 'OpenTable', domain: 'opentable.com' },
      { name: 'DoorDash', domain: 'doordash.com' },
    ],
    bubbles: [
      { text: 'shit i forgot her birthday', side: 'right' },
      { text: 'already handled. flowers at 6, dinner at 8. reminder to call her at noon.', side: 'left' },
    ],
    rotation: -2.5,
  },
  {
    id: 'flight',
    logos: [
      { name: 'American Airlines', domain: 'aa.com' },
    ],
    bubbles: [
      { text: 'your flight’s boarding in 40 mins. maybe start moving.', side: 'left' },
    ],
    rotation: 2.2,
  },
  {
    id: 'food',
    logos: [
      { name: 'DoorDash', domain: 'doordash.com' },
    ],
    bubbles: [
      { text: 'your food is 2 mins away. behave.', side: 'left' },
    ],
    rotation: -1.8,
  },
  {
    id: 'bills',
    logos: [
      { name: 'Chase', domain: 'chase.com' },
      { name: 'Venmo', domain: 'venmo.com' },
    ],
    bubbles: [
      { text: 'handle my bills pls', side: 'right' },
      { text: 'on it. your money is leaving faster than your motivation, but we’re good.', side: 'left' },
    ],
    rotation: 2.8,
  },
  {
    id: 'portfolio',
    logos: [
      { name: 'Coinbase', domain: 'coinbase.com' },
      { name: 'Robinhood', domain: 'robinhood.com' },
      { name: 'Zerion', domain: 'zerion.io' },
    ],
    bubbles: [
      { text: 'yo how’s my portfolio doing', side: 'right' },
      { text: 'ngl, she’s going through it. down 2.4%. BTC is mostly to blame.', side: 'left' },
    ],
    rotation: -2.2,
  },
  {
    id: 'btc',
    logos: [
      { name: 'Coinbase', domain: 'coinbase.com' },
      { name: 'TradingView', domain: 'tradingview.com' },
    ],
    bubbles: [
      { text: 'BTC’s up 10%. shit’s moving.', side: 'left' },
    ],
    rotation: 1.8,
  },
];

// =========================================================================
// MOBILE STICKY PARALLAX STACKING CARD COMPONENT
// =========================================================================
interface MobileStickyCardProps {
  i: number;
  card: AskCardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const MobileStickyCard: React.FC<MobileStickyCardProps> = ({
  i,
  card,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 h-screen flex items-center justify-center pointer-events-none"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-10vh + ${i * 24 + 140}px)`,
          transformOrigin: 'top center',
          filter: 'drop-shadow(0 16px 36px rgba(40,30,20,0.18))',
        }}
        className="relative pointer-events-auto w-[92vw] max-w-[360px] rounded-2xl bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] p-4 sm:p-5 shadow-[0_20px_50px_rgba(50,35,20,0.1)] backdrop-blur-sm"
      >
        <LogosHeader items={card.logos} />
        <div className="flex flex-col gap-2 pt-0.5">
          {card.bubbles.map((bubble, bIdx) => (
            <IMessageBubble key={bIdx} text={bubble.text} side={bubble.side} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const MobileStickyStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className="md:hidden relative w-full flex flex-col items-center pb-[50vh] pt-4"
    >
      {ASK_CARDS.map((card, i) => {
        const targetScale = Math.max(
          0.65,
          1 - (ASK_CARDS.length - i - 1) * 0.06
        );
        return (
          <MobileStickyCard
            key={`m_${card.id}`}
            i={i}
            card={card}
            progress={scrollYProgress}
            range={[i * 0.16, 1]}
            targetScale={targetScale}
          />
        );
      })}

      {/* Stone carved pedestal below card stack on mobile */}
      <div className="pt-8 pb-4 flex flex-col items-center justify-center relative z-30">
        <div className="w-28 sm:w-32">
          <img
            src={iMessagePodiumImg}
            alt="iMessage Stone Carved Podium"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-[0_18px_32px_rgba(40,30,20,0.18)] select-none"
          />
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// MAIN REAL ASKS SECTION (RESPONSIVE: MOBILE STICKY STACK + DESKTOP GENIE)
// =========================================================================
export const RealAsks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  const [isOpen, setIsOpen] = useState(false);

  // 6 card refs (Desktop)
  const card1Ref = useRef<HTMLDivElement>(null); // top-left    QA: Birthday
  const card2Ref = useRef<HTMLDivElement>(null); // top-center  A: Flight
  const card3Ref = useRef<HTMLDivElement>(null); // top-right   A: Food
  const card4Ref = useRef<HTMLDivElement>(null); // bot-left    QA: Bills
  const card5Ref = useRef<HTMLDivElement>(null); // bot-right   QA: Portfolio
  const card6Ref = useRef<HTMLDivElement>(null); // center      A: BTC
  const pedestalRef = useRef<HTMLDivElement>(null);

  const [off1, setOff1] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off2, setOff2] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off3, setOff3] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off4, setOff4] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off5, setOff5] = useState({ x: 0, y: 0, sinkY: 0 });
  const [off6, setOff6] = useState({ x: 0, y: 0, sinkY: 0 });

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
        { ref: card6Ref, set: setOff6 },
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
  const path6Ref = useGenieMorph(sectionOpen, 120);

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
  const pos6 = makePos(off6, 0.25);

  const cardBase = 'imsg-card overflow-hidden rounded-2xl sm:rounded-[1.4rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-3.5 sm:p-5 cursor-pointer transition-colors duration-300';
  const cardSm   = 'imsg-card overflow-hidden rounded-2xl sm:rounded-[1.3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-3 sm:p-4 cursor-pointer transition-colors duration-300';
  const spring   = { type: 'spring', stiffness: 320, damping: 22 } as const;

  return (
    <section
      ref={sectionRef}
      id="asks"
      className="w-full bg-[#ffffff] pt-12 sm:pt-16 pb-12 sm:pb-0 relative z-20 select-none"
    >
      {/* SVG clip defs — 6 genie morph paths */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="genie-clip-1" clipPathUnits="objectBoundingBox"><path ref={path1Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-2" clipPathUnits="objectBoundingBox"><path ref={path2Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-3" clipPathUnits="objectBoundingBox"><path ref={path3Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-4" clipPathUnits="objectBoundingBox"><path ref={path4Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-5" clipPathUnits="objectBoundingBox"><path ref={path5Ref} d={STEP3} /></clipPath>
          <clipPath id="genie-clip-6" clipPathUnits="objectBoundingBox"><path ref={path6Ref} d={STEP3} /></clipPath>
        </defs>
      </svg>

      {/* Candle stand — top right */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 0.4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 sm:top-8 md:top-12 -right-6 sm:-right-8 md:-right-12 lg:-right-14 w-44 sm:w-56 md:w-68 lg:w-80 pointer-events-none z-20"
      >
        <img src={candleStandImg} alt="Antique Candle Stand" loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.18)] select-none" />
      </motion.div>

      {/* Scholar — bottom left */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-48 sm:-bottom-64 md:-bottom-84 lg:-bottom-[420px] xl:-bottom-[480px] -left-40 sm:-left-56 md:-left-72 lg:-left-[360px] xl:-left-[420px] 2xl:-left-[460px] w-[520px] sm:w-[680px] md:w-[840px] lg:w-[980px] xl:w-[1100px] pointer-events-none z-20"
      >
        <img src={sideCharImg} alt="Renaissance Character" loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(40,30,20,0.25)] select-none" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">

        {/* Title */}
        <div className="text-center w-full max-w-4xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#2d3e32] font-serif font-normal">
            Just state what you <span className="font-serif italic font-bold text-[#253b2b]">want.</span>
          </h2>
        </div>

        {/* =========================================================================
            MOBILE LAYOUT: STICKY PARALLAX STACKING CARDS (SKIPER 16 STYLE)
            ========================================================================= */}
        <MobileStickyStack />

        {/* =========================================================================
            DESKTOP LAYOUT: SPATIAL GENIE EXPLOSION
            ========================================================================= */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto min-h-[600px] sm:min-h-[660px] lg:min-h-[720px]">

          {/* CARD 1 — top-left: Birthday QA */}
          <motion.div
            ref={card1Ref} variants={pos1} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[8%] sm:top-[9%] lg:top-[10%] left-0 sm:left-[1%] lg:left-[2%] w-full max-w-[310px] sm:max-w-[390px] lg:max-w-[430px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-1)' }} initial={{ rotate: -3.5 }} animate={{ rotate: -3.5 }}
              whileHover={{ scale: 1.05, rotate: -0.5, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardBase}>
              <LogosHeader
                items={[
                  { name: 'Google Calendar', domain: 'calendar.google.com' },
                  { name: 'OpenTable', domain: 'opentable.com' },
                  { name: 'DoorDash', domain: 'doordash.com' },
                ]}
              />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                <IMessageBubble text="shit i forgot her birthday" side="right" />
                <IMessageBubble text="already handled. flowers at 6, dinner at 8. reminder to call her at noon." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 2 — top-center: Flight boarding alert */}
          <motion.div
            ref={card2Ref} variants={pos2} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[1%] sm:top-[1.5%] lg:top-[2%] left-[36%] sm:left-[39%] lg:left-[41%] w-full max-w-[210px] sm:max-w-[260px] lg:max-w-[290px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-2)' }} initial={{ rotate: 6 }} animate={{ rotate: 6 }}
              whileHover={{ scale: 1.06, rotate: 2, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <LogosHeader
                items={[
                  { name: 'American Airlines', domain: 'aa.com' },
                ]}
              />
              <div className="flex flex-col pt-0.5">
                <IMessageBubble text="your flight’s boarding in 40 mins. maybe start moving." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 3 — top-right: Food delivery alert */}
          <motion.div
            ref={card3Ref} variants={pos3} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[12%] sm:top-[14%] lg:top-[16%] right-[3%] sm:right-[6%] lg:right-[9%] w-full max-w-[190px] sm:max-w-[230px] lg:max-w-[260px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-3)' }} initial={{ rotate: 8.5 }} animate={{ rotate: 8.5 }}
              whileHover={{ scale: 1.06, rotate: 4, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <LogosHeader
                items={[
                  { name: 'DoorDash', domain: 'doordash.com' },
                ]}
              />
              <div className="flex flex-col pt-0.5">
                <IMessageBubble text="your food is 2 mins away. behave." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 6 — center: BTC market alert */}
          <motion.div
            ref={card6Ref} variants={pos6} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[27%] sm:top-[29%] lg:top-[30%] left-[33%] sm:left-[36%] lg:left-[38%] w-full max-w-[200px] sm:max-w-[245px] lg:max-w-[275px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-6)' }} initial={{ rotate: -6.5 }} animate={{ rotate: -6.5 }}
              whileHover={{ scale: 1.06, rotate: -2, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <LogosHeader
                items={[
                  { name: 'Coinbase', domain: 'coinbase.com' },
                  { name: 'TradingView', domain: 'tradingview.com' },
                ]}
              />
              <div className="flex flex-col pt-0.5">
                <IMessageBubble text="BTC’s up 10%. shit’s moving." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 4 — bottom-left: Bills QA */}
          <motion.div
            ref={card4Ref} variants={pos4} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[53%] sm:top-[55%] lg:top-[57%] left-[5%] sm:left-[8%] lg:left-[10%] w-full max-w-[310px] sm:max-w-[380px] lg:max-w-[420px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-4)' }} initial={{ rotate: -4 }} animate={{ rotate: -4 }}
              whileHover={{ scale: 1.05, rotate: -1, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardBase}>
              <LogosHeader
                items={[
                  { name: 'Chase', domain: 'chase.com' },
                  { name: 'Venmo', domain: 'venmo.com' },
                ]}
              />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                <IMessageBubble text="handle my bills pls" side="right" />
                <IMessageBubble text="on it. your money is leaving faster than your motivation, but we’re good." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 5 — bottom-right: Portfolio QA */}
          <motion.div
            ref={card5Ref} variants={pos5} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[48%] sm:top-[50%] lg:top-[52%] right-0 sm:right-[1%] lg:right-[2%] w-full max-w-[330px] sm:max-w-[410px] lg:max-w-[450px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-5)' }} initial={{ rotate: -6.5 }} animate={{ rotate: -6.5 }}
              whileHover={{ scale: 1.05, rotate: -2, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardBase}>
              <LogosHeader
                items={[
                  { name: 'Coinbase', domain: 'coinbase.com' },
                  { name: 'Robinhood', domain: 'robinhood.com' },
                  { name: 'Zerion', domain: 'zerion.io' },
                ]}
              />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                <IMessageBubble text="yo how’s my portfolio doing" side="right" />
                <IMessageBubble text="ngl, she’s going through it. down 2.4%. BTC is mostly to blame." side="left" />
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
              <img src={iMessagePodiumImg} alt="iMessage Stone Carved Podium" loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-[0_18px_32px_rgba(40,30,20,0.18)] select-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
