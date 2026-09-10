import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface CardItem {
  id: string;
  badge: string;
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
}

const CARDS_DATA: CardItem[] = [
  {
    id: 'x402',
    badge: 'x402',
    title: (
      <>
        Pay for <span className="italic font-bold">What Agents Need</span>
      </>
    ),
    description: 'Agents can make programmatic payments for APIs, data, tools and digital services — directly over HTTP.',
    icon: (
      <svg className="w-6 h-6 text-[#dfc28d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="3.5" width="19" height="14" rx="2.5" />
        <path d="M6.5 9l-1.8 1.8a1 1 0 0 0 0 1.4l1.8 1.8" />
        <path d="M11 8.5l-1.5 6" />
        <path d="M13.5 9l1.8 1.8a1 1 0 0 1 0 1.4l-1.8 1.8" />
        <path d="M15 13.5l4 4-2 0.5 1.5 2.5-1.5 0.9-1.5-2.5-1.5 1.6z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'A2A',
    badge: 'A2A',
    title: (
      <>
        Agents That <span className="italic font-bold">Work Together</span>
      </>
    ),
    description: 'Agents can discover capabilities, delegate tasks and collaborate across apps, frameworks and organizations.',
    icon: (
      <svg className="w-6 h-6 text-[#dfc28d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <line x1="10.5" y1="7" x2="7.5" y2="15.5" />
        <line x1="13.5" y1="7" x2="16.5" y2="15.5" />
        <line x1="8.5" y1="18" x2="15.5" y2="18" />
      </svg>
    ),
  },
  {
    id: 'AP2',
    badge: 'AP2',
    title: (
      <>
        Trust, <span className="italic font-bold">With Control</span>
      </>
    ),
    description: 'Give agents verifiable authority to transact on your behalf — with signed intent, mandates and guardrails.',
    icon: (
      <svg className="w-6 h-6 text-[#dfc28d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 20v-1a3.5 3.5 0 0 0-3.5-3.5H6.5A3.5 3.5 0 0 0 3 19v1" />
        <circle cx="8.5" cy="8" r="3.5" />
        <path d="M19 10.5v3.5l-3 1.5-3-1.5v-3.5a5 5 0 0 1 6 0z" />
        <path d="M15.5 13l1 1 2-2" />
      </svg>
    ),
  },
  {
    id: 'ERC-8004',
    badge: 'ERC-8004',
    title: (
      <>
        Trust for <span className="italic font-bold">Agent Commerce</span>
      </>
    ),
    description: 'Discover, identify and evaluate agents through on-chain identity, reputation and validation.',
    icon: (
      <svg className="w-6 h-6 text-[#dfc28d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

export const AiFiSection: React.FC = () => {
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const activeIdxRef = useRef(0);
  const [cardStep, setCardStep] = useState(336);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const measure = () => {
      if (typeof window === 'undefined') return;
      const vw = window.innerWidth;
      // Mobile card width is 84vw capped at 340px, plus 16px gap
      const cardW = Math.min(vw * 0.84, 340);
      setCardStep(cardW + 16);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Update current card index with hysteresis to completely eliminate boundary flickering/jitter
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) return;
    const cur = activeIdxRef.current;
    let next = cur;

    if (cur === 0 && p > 0.20) next = 1;
    else if (cur === 1) {
      if (p < 0.14) next = 0;
      else if (p > 0.52) next = 2;
    } else if (cur === 2) {
      if (p < 0.46) next = 1;
      else if (p > 0.84) next = 3;
    } else if (cur === 3 && p < 0.78) next = 2;

    if (next !== cur) {
      activeIdxRef.current = next;
      setActiveCardIndex(next);
    }
  });

  // Direct 1:1 scroll transform without useSpring to eliminate spring oscillation and vibration on iPhone
  const mobileTrackX = useTransform(scrollYProgress, (p: number) => {
    const clamped = Math.min(1, Math.max(0, p));
    return -clamped * (cardStep * 3);
  });

  return (
    <section id="aifi" className="relative w-full bg-[#f3f2e6] overflow-x-clip lg:overflow-hidden">
      
      {/* Seamless Soft Top Gradient from White (Authority) into Parchment */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#ffffff] to-transparent pointer-events-none z-10" />

      {/* =========================================================================
          1. MOBILE VIEW: PINNED SCROLL-DRIVEN HORIZONTAL CARD ANIMATION (< 1024px)
          - Scrolling down smoothly slides the cards with rock-solid 1:1 touch response.
          ========================================================================= */}
      <div ref={mobileContainerRef} className="lg:hidden relative w-full h-[260vh]">
        <div className="sticky top-0 z-20 h-[100dvh] max-h-[100dvh] w-full flex flex-col justify-between pt-[calc(env(safe-area-inset-top,0px)+4.5rem)] min-[390px]:pt-[calc(env(safe-area-inset-top,0px)+5rem)] pb-4 min-[390px]:pb-6 px-3 min-[390px]:px-4 overflow-hidden bg-[#f3f2e6] will-change-transform [transform:translate3d(0,0,0)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [contain:paint_layout] touch-pan-y">
          
          {/* Header */}
          <div className="text-center max-w-sm mx-auto shrink-0 space-y-1.5 pt-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0e8dc]/70 border border-[#445648]/35 text-[10.5px] min-[390px]:text-[11px] font-mono uppercase tracking-[0.20em] text-[#25362a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25362a]" />
              Autonomous Infrastructure
            </div>

            <div className="inline-flex items-center justify-center gap-2 pt-0.5">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c4a978]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="12" x2="10" y2="12" />
                <line x1="6" y1="6" x2="11" y2="9" />
                <line x1="6" y1="18" x2="11" y2="15" />
              </svg>

              <h2 className="font-serif text-2xl min-[360px]:text-[26px] min-[390px]:text-[28px] text-[#25362a] tracking-tight leading-tight">
                AiFi Powered Agents That Act With{' '}
                <span className="italic font-bold text-[#25362a]">
                  Trust.
                </span>
              </h2>

              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c4a978]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="20" y1="12" x2="14" y2="12" />
                <line x1="18" y1="6" x2="13" y2="9" />
                <line x1="18" y1="18" x2="13" y2="15" />
              </svg>
            </div>

            <p className="font-serif italic text-xs min-[390px]:text-[13px] text-[#4b5546] max-w-xs mx-auto leading-snug">
              Intelligent agents that reason, act, pay and move value across chains and apps.
            </p>
          </div>

          {/* Cards Track: Horizontally scrubbed by vertical scroll with 1:1 direct tracking */}
          <div className="relative w-full flex-1 min-h-0 my-auto flex items-center overflow-hidden">
            <motion.div
              className="flex gap-4 items-center"
              style={{
                x: mobileTrackX,
                paddingLeft: `calc((100% - min(84vw, 340px)) / 2)`,
                paddingRight: `calc((100% - min(84vw, 340px)) / 2)`,
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                willChange: 'transform',
                transform: 'translateZ(0)',
              }}
            >
              {CARDS_DATA.map((card, idx) => {
                const isCentered = activeCardIndex === idx;
                return (
                  <div
                    key={`mob-${card.id}`}
                    className={`shrink-0 w-[84vw] max-w-[325px] min-[390px]:max-w-[340px] h-[335px] min-[390px]:h-[355px] bg-[#eef2ea] rounded-[26px] min-[390px]:rounded-[30px] p-5 min-[390px]:p-6 flex flex-col justify-between border-[1.5px] transition-[opacity,border-color] duration-200 ease-out select-none shadow-[0_8px_24px_rgba(40,48,40,0.08)] will-change-transform [transform:translateZ(0)] [backface-visibility:hidden] ${
                      isCentered
                        ? 'opacity-100 border-[#3e4f42]/80'
                        : 'opacity-40 border-[#3e4f42]/20'
                    }`}
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-11 h-11 min-[390px]:w-12 min-[390px]:h-12 rounded-2xl bg-[#25362a] flex items-center justify-center shadow-md mb-4 border border-[#3e4f42]/40">
                        {card.icon}
                      </div>

                      {/* Big Pill Badge */}
                      <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#dbe5d7] border border-[#3e4f42]/35 text-[#1e2e22] font-mono font-bold text-xl min-[390px]:text-2xl tracking-tight mb-3 shadow-xs">
                        {card.badge}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-[20px] min-[390px]:text-[22px] font-bold text-[#25362a] leading-tight tracking-tight mb-2">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13.5px] min-[390px]:text-[14.5px] text-[#3e5042] font-sans leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom rule with arrow */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#3e4f42]/15">
                      <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#3e4f42]/40 to-transparent mr-4" />
                      <span className="text-[#25362a] font-mono text-base font-bold">
                        →
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Footer: Progress Indicators */}
          <div className="flex items-center justify-center gap-2 pt-1 pb-1 shrink-0">
            <span className="font-mono text-xs font-bold text-[#25362a]/70 mr-1.5">
              0{activeCardIndex + 1} / 04
            </span>
            {CARDS_DATA.map((card, idx) => {
              const isActive = activeCardIndex === idx;
              return (
                <div
                  key={`dot-${card.id}`}
                  className={`h-2 rounded-full transition-[width,background-color] duration-200 ease-out ${
                    isActive
                      ? 'w-7 bg-[#25362a] shadow-xs'
                      : 'w-2 bg-[#25362a]/25'
                  }`}
                />
              );
            })}
          </div>

        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP VIEW: CLEAN 4-COLUMN GRID (>= 1024px)
          ========================================================================= */}
      <div className="hidden lg:block relative z-10 max-w-[1400px] mx-auto pt-16 lg:pt-20 pb-20 lg:pb-24 px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#e0e8dc]/70 border border-[#445648]/35 text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-[#25362a] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#25362a]" />
            Autonomous Infrastructure
          </div>

          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a978]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="12" x2="10" y2="12" />
              <line x1="6" y1="6" x2="11" y2="9" />
              <line x1="6" y1="18" x2="11" y2="15" />
            </svg>

            <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-[54px] xl:text-6xl text-[#25362a] tracking-tight leading-[1.12]">
              AiFi Powered Agents That Act With{' '}
              <span className="italic font-bold text-[#25362a]">
                Trust.
              </span>
            </h2>

            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a978]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="20" y1="12" x2="14" y2="12" />
              <line x1="18" y1="6" x2="13" y2="9" />
              <line x1="18" y1="18" x2="13" y2="15" />
            </svg>
          </div>

          <p className="font-serif italic text-lg sm:text-xl lg:text-[22px] text-[#4b5546] max-w-3xl mx-auto leading-relaxed pt-2 sm:pt-3">
            AiFi powers intelligent agents that can reason, act, pay and move value — across apps, chains and the real world.
          </p>
        </div>

        {/* Desktop 4-Column Grid */}
        <div className="grid grid-cols-4 gap-6">
          {CARDS_DATA.map((card) => (
            <div
              key={card.id}
              className="group relative bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/40 hover:border-[#3e4f42]/90 rounded-[30px] p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_18px_rgba(40,48,40,0.04)] hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#25362a] flex items-center justify-center shadow-md mb-5 border border-[#3e4f42]/40 transition-transform duration-300 group-hover:scale-105">
                  {card.icon}
                </div>

                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#dbe5d7] border border-[#3e4f42]/35 text-[#1e2e22] font-mono font-bold text-2xl tracking-tight mb-3.5 shadow-sm">
                  {card.badge}
                </div>

                <h3 className="font-serif text-[25px] font-bold text-[#25362a] leading-tight tracking-tight mb-2.5">
                  {card.title}
                </h3>

                <p className="text-[15.5px] text-[#3e5042] font-sans leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 mt-6 border-t border-[#3e4f42]/15 group-hover:border-[#3e4f42]/40 transition-colors">
                <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#3e4f42]/40 to-transparent mr-4" />
                <span className="text-[#25362a] font-mono text-base font-bold transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
