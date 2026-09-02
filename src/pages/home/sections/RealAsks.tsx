import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform, type Variants, type MotionValue } from 'framer-motion';
import { interpolate as flubberInterpolate } from 'flubber';
import candleStandImg from '../../../assets/Candle_Stand.webp';
import sideCharImg from '../../../assets/side_char.webp';
import iMessagePodiumImg from '../../../assets/iMessage_Podium.webp';
import { IMessageBubble } from './IMessageBubble';

import googleCalendarLogo from '../../../assets/integration_logos/google_calendar.svg';
import googleMapsLogo from '../../../assets/integration_logos/google_maps.svg';
import googleFlightsLogo from '../../../assets/integration_logos/google_flights.svg';
import uberLogo from '../../../assets/integration_logos/uber.svg';
import tradingviewLogo from '../../../assets/integration_logos/tradingview.svg';
import hyperliquidLogo from '../../../assets/integration_logos/hyperliquid.svg';
import xLogo from '../../../assets/integration_logos/x.svg';
import coinbaseLogo from '../../../assets/integration_logos/coinbase.svg';
import binanceLogo from '../../../assets/integration_logos/binance.svg';
import solscanLogo from '../../../assets/integration_logos/solscan.svg';

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
  domain?: string;
  iconSrc?: string;
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
          src={item.iconSrc || `https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
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
  isSm?: boolean;
  logos: IntegrationItem[];
  bubbles: { text: string; side: 'left' | 'right' }[];
  rotation: number;
}

const ASK_CARDS: AskCardData[] = [
  {
    id: 'box1_flight',
    isSm: true,
    logos: [
      { name: 'Google Maps', iconSrc: googleMapsLogo },
      { name: 'Uber', iconSrc: uberLogo },
      { name: 'Google Flights', iconSrc: googleFlightsLogo },
    ],
    bubbles: [
      { text: 'your flight is boarding in 40 mins, and your food is 2 mins away. maybe start moving.', side: 'left' },
    ],
    rotation: -2.0,
  },
  {
    id: 'box2_clarity',
    isSm: true,
    logos: [
      { name: 'X', iconSrc: xLogo, domain: 'x.com' },
      { name: 'Coinbase', iconSrc: coinbaseLogo, domain: 'coinbase.com' },
    ],
    bubbles: [
      { text: 'Trump backs the CLARITY Act. BTC just caught a bid. you know what time it is. 👀', side: 'left' },
    ],
    rotation: 2.2,
  },
  {
    id: 'box3_funding',
    isSm: true,
    logos: [
      { name: 'Hyperliquid', iconSrc: hyperliquidLogo },
      { name: 'TradingView', iconSrc: tradingviewLogo },
    ],
    bubbles: [
      { text: 'negative funding rates detected on OP perps.', side: 'left' },
    ],
    rotation: -1.8,
  },
  {
    id: 'box4_birthday',
    isSm: false,
    logos: [
      { name: 'Google Calendar', iconSrc: googleCalendarLogo },
      { name: 'Google Maps', iconSrc: googleMapsLogo },
    ],
    bubbles: [
      { text: 'shit i forget her birthday', side: 'right' },
      { text: 'already handled. flowers at 6, dinner at 8. reminder to call her at noon.', side: 'left' },
    ],
    rotation: 2.5,
  },
  {
    id: 'box5_hype',
    isSm: false,
    logos: [
      { name: 'Hyperliquid', iconSrc: hyperliquidLogo, domain: 'hyperliquid.xyz' },
      { name: 'Binance', iconSrc: binanceLogo, domain: 'binance.com' },
    ],
    bubbles: [
      { text: 'yo, your HYPE long is getting close. liq $71.30, HYPE $74.90 and sliding. you’ve got a few % of room left.', side: 'left' },
      { text: 'shit ok how much do i need to add', side: 'right' },
    ],
    rotation: -2.8,
  },
  {
    id: 'box6_cashcat',
    isSm: false,
    logos: [
      { name: 'Solscan', iconSrc: solscanLogo, domain: 'solscan.io' },
      { name: 'Hyperliquid', iconSrc: hyperliquidLogo, domain: 'hyperliquid.xyz' },
    ],
    bubbles: [
      { text: '6 wallets that called SOL’s last two pumps just bought $340K of CASHCAT, avg entry $0.0043. still $0.0044. want in?', side: 'left' },
      { text: 'yeah get me $200', side: 'right' },
    ],
    rotation: 1.8,
  },
];

const cardBase = 'imsg-card overflow-hidden rounded-2xl sm:rounded-[1.4rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-3.5 sm:p-5 cursor-pointer transition-colors duration-300';
const cardSm   = 'imsg-card overflow-hidden rounded-2xl sm:rounded-[1.3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_20px_50px_rgba(50,35,20,0.06)] hover:shadow-[0_30px_70px_rgba(50,35,20,0.14)] p-3 sm:p-4 cursor-pointer transition-colors duration-300';

// =========================================================================
// MOBILE PINNED STACKING CARDS (PINNED VIEWPORT + SCROLL PROGRESS STACK)
// =========================================================================
interface MobilePinnedCardProps {
  i: number;
  card: AskCardData;
  progress: MotionValue<number>;
  total: number;
}

const MobilePinnedCard: React.FC<MobilePinnedCardProps> = ({
  i,
  card,
  progress,
  total,
}) => {
  // Stagger thresholds across scroll progress 0.0 -> 0.88
  // Card 0 is already present
  // Card 1 enters at [0.08, 0.22]
  // Card 2 enters at [0.24, 0.38]
  // Card 3 enters at [0.40, 0.54]
  // Card 4 enters at [0.56, 0.70]
  // Card 5 enters at [0.72, 0.86]
  const startEnter = i === 0 ? 0 : (i - 1) * 0.16 + 0.08;
  const finishEnter = i === 0 ? 0 : startEnter + 0.14;

  const opacity = useTransform(
    progress,
    i === 0 ? [0, 1] : [Math.max(0, startEnter - 0.02), startEnter, finishEnter],
    i === 0 ? [1, 1] : [0, 0.2, 1]
  );

  const y = useTransform(
    progress,
    i === 0
      ? [0, 0.25, 0.50, 0.75, 1.0]
      : [startEnter, finishEnter, 0.88, 1.0],
    i === 0
      ? [0, -6, -14, -20, -26]
      : [160, 0, -(total - i - 1) * 6, -(total - i - 1) * 6]
  );

  const scale = useTransform(
    progress,
    i === 0
      ? [0, 0.25, 0.50, 0.75, 1.0]
      : [startEnter, finishEnter, 0.88, 1.0],
    i === 0
      ? [1, 0.95, 0.90, 0.86, 0.82]
      : [0.92, 1, Math.max(0.84, 1 - (total - i - 1) * 0.04), Math.max(0.84, 1 - (total - i - 1) * 0.04)]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        transformOrigin: 'top center',
        zIndex: 10 + i,
        filter: 'drop-shadow(0 14px 28px rgba(40,30,20,0.14))',
        rotate: card.rotation,
      }}
      className={`absolute inset-x-0 mx-auto w-[92vw] ${
        card.isSm ? 'max-w-[270px] ' + cardSm : 'max-w-[340px] ' + cardBase
      }`}
    >
      <LogosHeader items={card.logos} />
      <div className={`flex flex-col ${card.isSm ? 'pt-0.5' : 'gap-2 sm:gap-3 pt-0.5'}`}>
        {card.bubbles.map((bubble, bIdx) => (
          <IMessageBubble key={bIdx} text={bubble.text} side={bubble.side} />
        ))}
      </div>
    </motion.div>
  );
};

const MobileStickyStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="md:hidden relative w-full h-[280vh]">
      {/* Pinned Screen Viewport: Screen stays in place while user scrolls & cards stack */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-16 sm:pt-20 pb-0 px-4 overflow-hidden">
        
        {/* Candle Stand Top Right (Enlarged & brought down slightly for mobile) */}
        <div className="absolute top-28 sm:top-32 -right-8 sm:-right-12 w-44 sm:w-56 pointer-events-none z-10 opacity-90">
          <img
            src={candleStandImg}
            alt="Antique Candle Stand"
            className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.2)] select-none"
          />
        </div>

        {/* Renaissance Scholar Man — Full Height Background on Left Side (Far Left) */}
        <motion.div
          animate={{ y: [2, -2, 2] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 -left-72 sm:-left-80 h-[84vh] max-h-[800px] w-auto pointer-events-none z-10 opacity-100 flex items-end"
        >
          <img
            src={sideCharImg}
            alt="Renaissance Scholar"
            loading="lazy"
            decoding="async"
            className="h-full w-auto max-w-none object-contain drop-shadow-[0_24px_54px_rgba(40,30,20,0.25)] select-none"
          />
        </motion.div>

        {/* Section Header */}
        <div className="text-center w-full max-w-sm mx-auto mb-2 relative z-20">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-[#2d3e32] font-serif font-normal leading-tight">
            Just state what you{' '}
            <span className="font-serif italic font-bold text-[#253b2b]">
              want.
            </span>
          </h2>
        </div>

        {/* Card Stacking Stage (Overlapping in front of scholar's shoulder / right side) */}
        <div className="relative w-full max-w-sm mx-auto h-[340px] flex items-center justify-center my-auto z-20">
          {ASK_CARDS.map((card, i) => (
            <MobilePinnedCard
              key={`m_${card.id}`}
              i={i}
              card={card}
              progress={scrollYProgress}
              total={ASK_CARDS.length}
            />
          ))}
        </div>

        {/* Stone Carved iMessage Podium at bottom right */}
        <div className="absolute -bottom-6 sm:-bottom-8 right-6 sm:right-10 w-24 sm:w-28 z-30 flex flex-col items-center cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
            <img
              src={iMessagePodiumImg}
              alt="iMessage Stone Carved Podium"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(40,30,20,0.18)] select-none"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

// =========================================================================
// MAIN REAL ASKS SECTION (RESPONSIVE: MOBILE PINNED STACK + DESKTOP GENIE)
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

  const spring = { type: 'spring', stiffness: 320, damping: 22 } as const;

  return (
    <section
      ref={sectionRef}
      id="asks"
      className="w-full bg-[#ffffff] pt-12 sm:pt-16 pb-0 relative z-20"
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

      {/* Candle stand — top right (Desktop) */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 0.4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute top-4 sm:top-8 md:top-12 -right-6 sm:-right-8 md:-right-12 lg:-right-14 w-44 sm:w-56 md:w-68 lg:w-80 pointer-events-none z-20"
      >
        <img src={candleStandImg} alt="Antique Candle Stand" loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.18)] select-none" />
      </motion.div>

      {/* Scholar — bottom left (Desktop) */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute -bottom-48 sm:-bottom-64 md:-bottom-84 lg:-bottom-[420px] xl:-bottom-[480px] -left-40 sm:-left-56 md:-left-72 lg:-left-[360px] xl:-left-[420px] 2xl:-left-[460px] w-[520px] sm:w-[680px] md:w-[840px] lg:w-[980px] xl:w-[1100px] pointer-events-none z-20"
      >
        <img src={sideCharImg} alt="Renaissance Character" loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(40,30,20,0.25)] select-none" />
      </motion.div>

      {/* =========================================================================
          MOBILE LAYOUT: PINNED SCROLL CARD STACK
          ========================================================================= */}
      <MobileStickyStack />

      {/* =========================================================================
          DESKTOP LAYOUT: SPATIAL GENIE EXPLOSION
          ========================================================================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">

        {/* Title */}
        <div className="text-center w-full max-w-4xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#2d3e32] font-serif font-normal">
            Just state what you <span className="font-serif italic font-bold text-[#253b2b]">want.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto min-h-[600px] sm:min-h-[660px] lg:min-h-[720px]">

          {/* CARD 1 — top-left: Box 4 Birthday QA */}
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
                  { name: 'Google Calendar', iconSrc: googleCalendarLogo },
                  { name: 'Google Maps', iconSrc: googleMapsLogo },
                ]}
              />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                <IMessageBubble text="shit i forget her birthday" side="right" />
                <IMessageBubble text="already handled. flowers at 6, dinner at 8. reminder to call her at noon." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 2 — top-center: Box 1 Flight & Food alert */}
          <motion.div
            ref={card2Ref} variants={pos2} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[1%] sm:top-[1.5%] lg:top-[2%] left-[34%] sm:left-[37%] lg:left-[39%] w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[325px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-2)' }} initial={{ rotate: 6 }} animate={{ rotate: 6 }}
              whileHover={{ scale: 1.06, rotate: 2, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <LogosHeader
                items={[
                  { name: 'Google Maps', iconSrc: googleMapsLogo },
                  { name: 'Uber', iconSrc: uberLogo },
                  { name: 'Google Flights', iconSrc: googleFlightsLogo },
                ]}
              />
              <div className="flex flex-col pt-0.5">
                <IMessageBubble text="your flight is boarding in 40 mins, and your food is 2 mins away. maybe start moving." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 3 — top-right: Box 2 Trump CLARITY Act alert */}
          <motion.div
            ref={card3Ref} variants={pos3} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[12%] sm:top-[14%] lg:top-[16%] right-[2%] sm:right-[5%] lg:right-[7%] w-full max-w-[210px] sm:max-w-[255px] lg:max-w-[285px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-3)' }} initial={{ rotate: 8.5 }} animate={{ rotate: 8.5 }}
              whileHover={{ scale: 1.06, rotate: 4, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <LogosHeader
                items={[
                  { name: 'X', iconSrc: xLogo, domain: 'x.com' },
                  { name: 'Coinbase', iconSrc: coinbaseLogo, domain: 'coinbase.com' },
                ]}
              />
              <div className="flex flex-col pt-0.5">
                <IMessageBubble text="Trump backs the CLARITY Act. BTC just caught a bid. you know what time it is. 👀" side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 6 — center: Box 3 Funding rates alert */}
          <motion.div
            ref={card6Ref} variants={pos6} initial="closed" animate={sectionOpen ? 'open' : 'closed'}
            style={{ filter: 'drop-shadow(0 8px 24px rgba(30,20,10,0.25))' }}
            className="absolute top-[27%] sm:top-[29%] lg:top-[30%] left-[33%] sm:left-[36%] lg:left-[38%] w-full max-w-[210px] sm:max-w-[255px] lg:max-w-[285px] z-20"
          >
            <motion.div style={{ clipPath: 'url(#genie-clip-6)' }} initial={{ rotate: -6.5 }} animate={{ rotate: -6.5 }}
              whileHover={{ scale: 1.06, rotate: -2, y: -8, transition: spring }} whileTap={{ scale: 0.98 }}
              className={cardSm}>
              <LogosHeader
                items={[
                  { name: 'Hyperliquid', iconSrc: hyperliquidLogo },
                  { name: 'TradingView', iconSrc: tradingviewLogo },
                ]}
              />
              <div className="flex flex-col pt-0.5">
                <IMessageBubble text="negative funding rates detected on OP perps." side="left" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 4 — bottom-left: Box 5 HYPE Long Position Warning */}
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
                  { name: 'Hyperliquid', iconSrc: hyperliquidLogo, domain: 'hyperliquid.xyz' },
                  { name: 'Binance', iconSrc: binanceLogo, domain: 'binance.com' },
                ]}
              />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                <IMessageBubble text="yo, your HYPE long is getting close. liq $71.30, HYPE $74.90 and sliding. you’ve got a few % of room left." side="left" />
                <IMessageBubble text="shit ok how much do i need to add" side="right" />
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 5 — bottom-right: Box 6 CASHCAT Whales Alert */}
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
                  { name: 'Solscan', iconSrc: solscanLogo, domain: 'solscan.io' },
                  { name: 'Hyperliquid', iconSrc: hyperliquidLogo, domain: 'hyperliquid.xyz' },
                ]}
              />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                <IMessageBubble text="6 wallets that called SOL’s last two pumps just bought $340K of CASHCAT, avg entry $0.0043. still $0.0044. want in?" side="left" />
                <IMessageBubble text="yeah get me $200" side="right" />
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
