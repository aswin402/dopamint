import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, type Variants, type MotionValue } from 'framer-motion';
import { interpolate as flubberInterpolate } from 'flubber';
import candleStandImg from '../../../assets/Candle_Stand.webp';
import sideCharImg from '../../../assets/side_char.webp';
import iMessagePodiumImg from '../../../assets/iMessage_Podium.webp';
import { IMessageBubble } from './IMessageBubble';

import { ASK_CARDS, type AskCardData, type IntegrationItem } from '@/data/realAsks';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };
    update();
    mql.addEventListener('change', update);
    window.addEventListener('resize', update);
    return () => {
      mql.removeEventListener('change', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return isMobile;
}

const STEP3 = 'M 0.35 0.85 L 0.65 0.85 L 0.65 1.00 L 0.35 1.00 Z';
const STEP2 =
  'M 0.00 0.00 L 1.00 0.00 C 0.96 0.18 0.88 0.36 0.80 0.52 C 0.74 0.64 0.68 0.78 0.62 1.00 L 0.38 1.00 C 0.32 0.78 0.26 0.64 0.20 0.52 C 0.12 0.36 0.04 0.18 0.00 0.00 Z';
const STEP0 = 'M 0.00 0.00 L 1.00 0.00 L 1.00 1.00 L 0.00 1.00 Z';

// Optimizing segment length from 0.05 to 0.18 reduces vertex calculations by ~75%
// while maintaining silky-smooth bezier curve fidelity without CPU stutter.
const morph3to2 = flubberInterpolate(STEP3, STEP2, { maxSegmentLength: 0.18 });
const morph2to0 = flubberInterpolate(STEP2, STEP0, { maxSegmentLength: 0.18 });

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
          if (pathRef.current) {
            pathRef.current.setAttribute('d', rawT >= 1 ? STEP0 : getPath(rawT));
          }
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
        if (pathRef.current) {
          pathRef.current.setAttribute('d', rawT >= 1 ? STEP3 : getPath(1 - rawT));
        }
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

const LogosHeader: React.FC<{ items: IntegrationItem[] }> = ({ items }) => (
  <div className="flex items-center justify-end gap-1.5 pb-1 sm:pb-1.5 mb-1.5 w-full">
    {items.map((item) => (
      <div
        key={item.name}
        title={item.name}
        className="w-5.5 h-5.5 min-[390px]:w-6.5 min-[390px]:h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#f4ede4] border border-[#e3d0bb] shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex items-center justify-center p-0.5 sm:p-1 select-none transition-transform hover:scale-110"
      >
        <img
          src={item.iconSrc || `https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
          alt={item.name}
          className="w-full h-full rounded-full object-contain"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
      </div>
    ))}
  </div>
);

const cardBase =
  'imsg-card overflow-hidden rounded-2xl sm:rounded-[1.4rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.08)] hover:shadow-[0_24px_50px_rgba(50,35,20,0.16)] p-4 min-[390px]:p-5 sm:p-6 cursor-pointer transition-colors duration-300';
const cardSm =
  'imsg-card overflow-hidden rounded-2xl sm:rounded-[1.3rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] hover:border-[#dfc2a2] shadow-[0_16px_40px_rgba(50,35,20,0.08)] hover:shadow-[0_24px_50px_rgba(50,35,20,0.16)] p-3.5 min-[390px]:p-4.5 sm:p-5 cursor-pointer transition-colors duration-300';

const mobileCardBase =
  'imsg-card overflow-hidden rounded-[1.35rem] min-[390px]:rounded-[1.5rem] bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] p-4 min-[390px]:p-5 select-none shadow-[0_10px_28px_rgba(40,30,20,0.09),0_2px_6px_rgba(40,30,20,0.04)]';

const SINK_POLY =
  'polygon(38% 85%, 50% 85%, 62% 85%, 62% 88%, 62% 91%, 62% 94%, 62% 97%, 62% 100%, 50% 100%, 38% 100%, 38% 97%, 38% 94%, 38% 91%, 38% 88%)';
const GENIE_POLY =
  'polygon(0% 0%, 50% 0%, 100% 0%, 98% 18%, 88% 36%, 74% 56%, 64% 78%, 60% 100%, 50% 100%, 40% 100%, 36% 78%, 26% 56%, 12% 36%, 2% 18%)';
const FULL_POLY =
  'polygon(0% 0%, 50% 0%, 100% 0%, 100% 18%, 100% 36%, 100% 56%, 100% 78%, 100% 100%, 50% 100%, 0% 100%, 0% 78%, 0% 56%, 0% 36%, 0% 18%)';

// =========================================================================
// MOBILE PINNED STACKING CARDS (STICKY VIEWPORT + SCROLL PROGRESS PARALLAX + GENIE)
// =========================================================================
interface MobilePinnedCardProps {
  i: number;
  card: AskCardData;
  progress: MotionValue<number>;
  total: number;
  activeTopIndex: number | null;
  onCardTap: (idx: number) => void;
}

function getCardTransforms(i: number, cardRot: number, total: number = 6) {
  const pList: number[] = [];
  const yList: number[] = [];
  const sList: number[] = [];
  const oList: number[] = [];
  const rList: number[] = [];
  const cList: string[] = [];
  const stepSize = 1 / (total - 1); // 0.20 per card transition

  if (i === 0) {
    pList.push(0);
    yList.push(0);
    sList.push(1.0);
    oList.push(1.0);
    rList.push(cardRot);
    cList.push(FULL_POLY);

    for (let k = 1; k < total; k++) {
      const prevEnd = (k - 1) * stepSize;
      const settleP = parseFloat((prevEnd + stepSize * 0.72).toFixed(3));
      const dwellEndP = parseFloat((k * stepSize).toFixed(3));
      const depth = k;
      const targetY = -Math.min(42, depth * 8);
      const targetS = parseFloat(Math.max(0.84, 1.0 - depth * 0.032).toFixed(3));
      const targetO = parseFloat(Math.max(0.72, 1.0 - depth * 0.055).toFixed(3));

      pList.push(settleP);
      yList.push(targetY);
      sList.push(targetS);
      oList.push(targetO);
      rList.push(cardRot);
      cList.push(FULL_POLY);

      if (dwellEndP > settleP + 0.001) {
        pList.push(dwellEndP);
        yList.push(targetY);
        sList.push(targetS);
        oList.push(targetO);
        rList.push(cardRot);
        cList.push(FULL_POLY);
      }
    }
  } else {
    const entryStart = parseFloat(((i - 1) * stepSize).toFixed(3));
    const entryLift = parseFloat((entryStart + stepSize * 0.15).toFixed(3));
    const entryMid = parseFloat((entryStart + stepSize * 0.38).toFixed(3));
    const entryCrest = parseFloat((entryStart + stepSize * 0.56).toFixed(3));
    const entrySettle = parseFloat((entryStart + stepSize * 0.72).toFixed(3));
    const entryEnd = parseFloat((i * stepSize).toFixed(3));

    pList.push(0);
    yList.push(200);
    sList.push(0.10);
    oList.push(0);
    rList.push(0);
    cList.push(SINK_POLY);

    if (entryStart > 0.001) {
      pList.push(entryStart);
      yList.push(200);
      sList.push(0.10);
      oList.push(0);
      rList.push(0);
      cList.push(SINK_POLY);
    }

    pList.push(entryLift);
    yList.push(140);
    sList.push(0.46);
    oList.push(1.0);
    rList.push(parseFloat((cardRot * 0.15).toFixed(2)));
    cList.push(GENIE_POLY);

    pList.push(entryMid);
    yList.push(50);
    sList.push(0.86);
    oList.push(1.0);
    rList.push(parseFloat((cardRot * 0.45).toFixed(2)));
    cList.push(GENIE_POLY);

    pList.push(entryCrest);
    yList.push(-8);
    sList.push(0.98);
    oList.push(1.0);
    rList.push(parseFloat((cardRot * 0.85).toFixed(2)));
    cList.push(FULL_POLY);

    pList.push(entrySettle);
    yList.push(0);
    sList.push(1.0);
    oList.push(1.0);
    rList.push(cardRot);
    cList.push(FULL_POLY);

    // Dwell window at full resting position before next card starts
    if (entryEnd > entrySettle + 0.001) {
      pList.push(entryEnd);
      yList.push(0);
      sList.push(1.0);
      oList.push(1.0);
      rList.push(cardRot);
      cList.push(FULL_POLY);
    }

    for (let k = i + 1; k < total; k++) {
      const prevEnd = (k - 1) * stepSize;
      const settleP = parseFloat((prevEnd + stepSize * 0.72).toFixed(3));
      const dwellEndP = parseFloat((k * stepSize).toFixed(3));
      const depth = k - i;
      const targetY = -Math.min(42, depth * 8);
      const targetS = parseFloat(Math.max(0.84, 1.0 - depth * 0.032).toFixed(3));
      const targetO = parseFloat(Math.max(0.72, 1.0 - depth * 0.055).toFixed(3));

      pList.push(settleP);
      yList.push(targetY);
      sList.push(targetS);
      oList.push(targetO);
      rList.push(cardRot);
      cList.push(FULL_POLY);

      if (dwellEndP > settleP + 0.001) {
        pList.push(dwellEndP);
        yList.push(targetY);
        sList.push(targetS);
        oList.push(targetO);
        rList.push(cardRot);
        cList.push(FULL_POLY);
      }
    }
  }

  return { pList, yList, sList, oList, rList, cList };
}

const MobilePinnedCard: React.FC<MobilePinnedCardProps> = ({
  i,
  card,
  progress,
  total,
  activeTopIndex,
  onCardTap,
}) => {
  const { pList, yList, sList, oList, rList, cList } = useMemo(() => {
    return getCardTransforms(i, card.rotation, total);
  }, [i, card.rotation, total]);

  const y = useTransform(progress, pList, yList);
  const scale = useTransform(progress, pList, sList);
  const opacity = useTransform(progress, pList, oList);
  const rotate = useTransform(progress, pList, rList);
  const clipPath = useTransform(progress, pList, cList);

  const isActive = activeTopIndex === i;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        rotate,
        transformOrigin: 'bottom center',
        zIndex: isActive ? 40 : 10 + i,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onCardTap(i)}
      className="absolute inset-x-0 mx-auto w-[90vw] max-w-[340px] min-[390px]:max-w-[370px] min-[430px]:max-w-[400px] h-[255px] min-[360px]:h-[265px] min-[390px]:h-[280px] min-[430px]:h-[295px] transform-gpu cursor-pointer select-none drop-shadow-[0_12px_28px_rgba(40,30,20,0.11)]"
    >
      <motion.div
        style={{
          clipPath: i === 0 ? 'none' : clipPath,
          willChange: 'clip-path',
        }}
        className={`w-full h-full transform-gpu flex flex-col justify-between ${mobileCardBase} ${
          isActive ? 'border-[#c2a688] shadow-[0_16px_36px_rgba(40,30,20,0.18)]' : ''
        }`}
      >
        <LogosHeader items={card.logos} />
        <div className="flex-1 flex flex-col justify-center gap-2 min-[390px]:gap-2.5 pt-0.5 pb-0.5">
          {card.bubbles.map((bubble, bIdx) => (
            <IMessageBubble key={bIdx} text={bubble.text} side={bubble.side} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileStickyStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 80,
    mass: 0.45,
    restDelta: 0.0001,
  });

  const [activeTopIndex, setActiveTopIndex] = useState<number | null>(null);

  const handleCardTap = (idx: number) => {
    setActiveTopIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div ref={containerRef} className="relative w-full h-[450vh]">
      {/* Pinned Screen Viewport: Safely padded below floating navbar, consistent 100dvh */}
      <div className="sticky top-0 h-[100dvh] max-h-[100dvh] w-full flex flex-col justify-between items-center pt-[calc(env(safe-area-inset-top,0px)+4.75rem)] min-[390px]:pt-[calc(env(safe-area-inset-top,0px)+5.5rem)] min-[430px]:pt-[calc(env(safe-area-inset-top,0px)+6rem)] pb-3 min-[390px]:pb-5 px-4 overflow-hidden">
        
        {/* Section Header: Clear of navbar, bold enlarged editorial typography */}
        <div className="text-center w-full max-w-md mx-auto relative z-20 shrink-0">
          <h2 className="text-[34px] min-[360px]:text-[38px] min-[390px]:text-[42px] min-[430px]:text-[46px] tracking-tight text-[#2d3e32] font-serif font-normal leading-[1.06]">
            Just state what you{' '}
            <span className="font-serif italic font-bold text-[#253b2b]">
              want.
            </span>
          </h2>
          <p className="text-xs min-[390px]:text-sm text-[#55604e]/75 font-sans mt-2 tracking-normal">
            Real asks, handled autonomously in seconds.
          </p>
        </div>

        {/* Card Stacking Stage: Centered with 3D perspective and GPU acceleration */}
        <div
          style={{ perspective: 1000, WebkitPerspective: 1000 }}
          className="relative w-full max-w-[360px] min-[390px]:max-w-[385px] min-[430px]:max-w-[420px] mx-auto h-[290px] min-[390px]:h-[320px] min-[430px]:h-[350px] flex items-center justify-center my-auto z-20"
        >
          {ASK_CARDS.map((card, i) => (
            <MobilePinnedCard
              key={`m_${card.id}`}
              i={i}
              card={card}
              progress={smoothProgress}
              total={ASK_CARDS.length}
              activeTopIndex={activeTopIndex}
              onCardTap={handleCardTap}
            />
          ))}
        </div>

        {/* Stone carved pedestal — bottom center */}
        <div className="relative shrink-0 -mb-5 min-[390px]:-mb-7 min-[430px]:-mb-9 w-28 min-[360px]:w-30 min-[390px]:w-34 min-[430px]:w-38 z-30 flex flex-col items-center select-none pointer-events-none transform-gpu">
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full transform-gpu"
          >
            <img
              src={iMessagePodiumImg}
              alt="iMessage Stone Carved Podium"
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-[0_14px_30px_rgba(40,30,20,0.22)] select-none"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// DESKTOP GENIE SECTION (AUTONOMOUS DESKTOP MOUNT WITH ZERO MOBILE OVERHEAD)
// =========================================================================
const DesktopGenieSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  const [isOpen, setIsOpen] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);

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
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, [isInView]);

  const sectionOpen = isInView && isOpen;

  // Once genie entrance is complete (~1.6s), remove clip-path to unlock GPU acceleration and crisp antialiasing
  useEffect(() => {
    if (sectionOpen) {
      const timer = setTimeout(() => setIsFullyOpen(true), 1600);
      return () => clearTimeout(timer);
    } else {
      setIsFullyOpen(false);
    }
  }, [sectionOpen]);

  const handleToggle = () => setIsOpen((p) => !p);

  const path1Ref = useGenieMorph(sectionOpen, 0);
  const path2Ref = useGenieMorph(sectionOpen, 100);
  const path3Ref = useGenieMorph(sectionOpen, 200);
  const path4Ref = useGenieMorph(sectionOpen, 50);
  const path5Ref = useGenieMorph(sectionOpen, 150);
  const path6Ref = useGenieMorph(sectionOpen, 120);

  const makePos = (off: { x: number; y: number; sinkY: number }, delay: number): Variants => ({
    closed: {
      x: [0, off.x, off.x],
      y: [0, off.y - 30, off.sinkY],
      scale: [1, 0.85, 0.08],
      opacity: [1, 1, 0],
      transition: { duration: 0.85, times: [0, 0.45, 1], ease: ['easeInOut', 'easeIn'] },
    },
    open: {
      x: [off.x, off.x, 0],
      y: [off.sinkY, off.y - 30, 0],
      scale: [0.08, 0.85, 1],
      opacity: [0, 1, 1],
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
    <div ref={sectionRef} className="w-full pt-12 sm:pt-16 pb-16 md:pb-24 relative z-20 overflow-hidden">
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
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute top-4 sm:top-8 md:top-12 -right-6 sm:-right-8 md:-right-12 lg:-right-14 w-44 sm:w-56 md:w-68 lg:w-80 pointer-events-none z-20 transform-gpu will-change-transform"
      >
        <img
          src={candleStandImg}
          alt="Antique Candle Stand"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(40,30,20,0.18)] select-none"
        />
      </motion.div>

      {/* Scholar — bottom left (Desktop) */}
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute -bottom-48 sm:-bottom-64 md:-bottom-84 lg:-bottom-[420px] xl:-bottom-[480px] -left-40 sm:-left-56 md:-left-72 lg:-left-[360px] xl:-left-[420px] 2xl:-left-[460px] w-[520px] sm:w-[680px] md:w-[840px] lg:w-[980px] xl:w-[1100px] pointer-events-none z-20 transform-gpu will-change-transform"
      >
        <img
          src={sideCharImg}
          alt="Renaissance Character"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(40,30,20,0.25)] select-none"
        />
      </motion.div>

      {/* DESKTOP CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        {/* Title */}
        <div className="text-center w-full max-w-4xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#2d3e32] font-serif font-normal">
            Just state what you <span className="font-serif italic font-bold text-[#253b2b]">want.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto min-h-[600px] sm:min-h-[660px] lg:min-h-[720px]">
          {/* CARD 1 — top-left: Box 4 Birthday QA */}
          <motion.div
            ref={card1Ref}
            variants={pos1}
            initial="closed"
            animate={sectionOpen ? 'open' : 'closed'}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-[8%] sm:top-[9%] lg:top-[10%] left-0 sm:left-[1%] lg:left-[2%] w-full max-w-[310px] sm:max-w-[390px] lg:max-w-[430px] z-20 transform-gpu will-change-transform"
          >
            <motion.div
              style={{
                clipPath: isFullyOpen ? 'none' : 'url(#genie-clip-1)',
                willChange: 'transform',
              }}
              initial={{ rotate: -3.5 }}
              animate={{ rotate: -3.5 }}
              whileHover={{ scale: 1.05, rotate: -0.5, y: -8, transition: spring }}
              whileTap={{ scale: 0.98 }}
              className={`${cardBase} transform-gpu`}
            >
              <LogosHeader items={ASK_CARDS[3].logos} />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                {ASK_CARDS[3].bubbles.map((bubble, idx) => (
                  <IMessageBubble key={idx} text={bubble.text} side={bubble.side} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 2 — top-center: Box 1 Flight & Food alert */}
          <motion.div
            ref={card2Ref}
            variants={pos2}
            initial="closed"
            animate={sectionOpen ? 'open' : 'closed'}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-[1%] sm:top-[1.5%] lg:top-[2%] left-[34%] sm:left-[37%] lg:left-[39%] w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[325px] z-20 transform-gpu will-change-transform"
          >
            <motion.div
              style={{
                clipPath: isFullyOpen ? 'none' : 'url(#genie-clip-2)',
                willChange: 'transform',
              }}
              initial={{ rotate: 6 }}
              animate={{ rotate: 6 }}
              whileHover={{ scale: 1.06, rotate: 2, y: -8, transition: spring }}
              whileTap={{ scale: 0.98 }}
              className={`${cardSm} transform-gpu`}
            >
              <LogosHeader items={ASK_CARDS[0].logos} />
              <div className="flex flex-col pt-0.5">
                {ASK_CARDS[0].bubbles.map((bubble, idx) => (
                  <IMessageBubble key={idx} text={bubble.text} side={bubble.side} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 3 — top-right: Box 2 Trump CLARITY Act alert */}
          <motion.div
            ref={card3Ref}
            variants={pos3}
            initial="closed"
            animate={sectionOpen ? 'open' : 'closed'}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-[12%] sm:top-[14%] lg:top-[16%] right-[2%] sm:right-[5%] lg:right-[7%] w-full max-w-[230px] sm:max-w-[275px] lg:max-w-[310px] z-20 transform-gpu will-change-transform"
          >
            <motion.div
              style={{
                clipPath: isFullyOpen ? 'none' : 'url(#genie-clip-3)',
                willChange: 'transform',
              }}
              initial={{ rotate: 8.5 }}
              animate={{ rotate: 8.5 }}
              whileHover={{ scale: 1.06, rotate: 4, y: -8, transition: spring }}
              whileTap={{ scale: 0.98 }}
              className={`${cardSm} transform-gpu`}
            >
              <LogosHeader items={ASK_CARDS[1].logos} />
              <div className="flex flex-col pt-0.5">
                {ASK_CARDS[1].bubbles.map((bubble, idx) => (
                  <IMessageBubble key={idx} text={bubble.text} side={bubble.side} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 6 — center: Box 3 Fed Rate Cut / Gold alert */}
          <motion.div
            ref={card6Ref}
            variants={pos6}
            initial="closed"
            animate={sectionOpen ? 'open' : 'closed'}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-[27%] sm:top-[29%] lg:top-[30%] left-[33%] sm:left-[36%] lg:left-[38%] w-full max-w-[220px] sm:max-w-[265px] lg:max-w-[295px] z-20 transform-gpu will-change-transform"
          >
            <motion.div
              style={{
                clipPath: isFullyOpen ? 'none' : 'url(#genie-clip-6)',
                willChange: 'transform',
              }}
              initial={{ rotate: -6.5 }}
              animate={{ rotate: -6.5 }}
              whileHover={{ scale: 1.06, rotate: -2, y: -8, transition: spring }}
              whileTap={{ scale: 0.98 }}
              className={`${cardSm} transform-gpu`}
            >
              <LogosHeader items={ASK_CARDS[2].logos} />
              <div className="flex flex-col pt-0.5">
                {ASK_CARDS[2].bubbles.map((bubble, idx) => (
                  <IMessageBubble key={idx} text={bubble.text} side={bubble.side} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 4 — bottom-left: Box 5 HYPE Long Position Warning */}
          <motion.div
            ref={card4Ref}
            variants={pos4}
            initial="closed"
            animate={sectionOpen ? 'open' : 'closed'}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-[53%] sm:top-[55%] lg:top-[57%] left-[5%] sm:left-[8%] lg:left-[10%] w-full max-w-[310px] sm:max-w-[380px] lg:max-w-[420px] z-20 transform-gpu will-change-transform"
          >
            <motion.div
              style={{
                clipPath: isFullyOpen ? 'none' : 'url(#genie-clip-4)',
                willChange: 'transform',
              }}
              initial={{ rotate: -4 }}
              animate={{ rotate: -4 }}
              whileHover={{ scale: 1.05, rotate: -1, y: -8, transition: spring }}
              whileTap={{ scale: 0.98 }}
              className={`${cardBase} transform-gpu`}
            >
              <LogosHeader items={ASK_CARDS[4].logos} />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                {ASK_CARDS[4].bubbles.map((bubble, idx) => (
                  <IMessageBubble key={idx} text={bubble.text} side={bubble.side} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 5 — bottom-right: Box 6 CASHCAT Whales Alert */}
          <motion.div
            ref={card5Ref}
            variants={pos5}
            initial="closed"
            animate={sectionOpen ? 'open' : 'closed'}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-[48%] sm:top-[50%] lg:top-[52%] right-0 sm:right-[1%] lg:right-[2%] w-full max-w-[330px] sm:max-w-[410px] lg:max-w-[450px] z-20 transform-gpu will-change-transform"
          >
            <motion.div
              style={{
                clipPath: isFullyOpen ? 'none' : 'url(#genie-clip-5)',
                willChange: 'transform',
              }}
              initial={{ rotate: -6.5 }}
              animate={{ rotate: -6.5 }}
              whileHover={{ scale: 1.05, rotate: -2, y: -8, transition: spring }}
              whileTap={{ scale: 0.98 }}
              className={`${cardBase} transform-gpu`}
            >
              <LogosHeader items={ASK_CARDS[5].logos} />
              <div className="flex flex-col gap-2 sm:gap-3 pt-0.5">
                {ASK_CARDS[5].bubbles.map((bubble, idx) => (
                  <IMessageBubble key={idx} text={bubble.text} side={bubble.side} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stone carved pedestal — bottom center */}
          <div
            ref={pedestalRef}
            onClick={handleToggle}
            className="absolute -bottom-14 sm:-bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 w-32 sm:w-36 md:w-40 lg:w-44 z-30 flex flex-col items-center cursor-pointer transform-gpu"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={sectionOpen ? { scale: [1, 1.05, 0.98, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full transform-gpu"
            >
              <img
                src={iMessagePodiumImg}
                alt="iMessage Stone Carved Podium"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain drop-shadow-[0_18px_32px_rgba(40,30,20,0.18)] select-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// MAIN REAL ASKS SECTION (RESPONSIVE: MOBILE PINNED STACK + DESKTOP GENIE)
// =========================================================================
export const RealAsks: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="asks" className="w-full bg-[#ffffff] relative z-20">
      {isMobile ? <MobileStickyStack /> : <DesktopGenieSection />}
    </section>
  );
};
