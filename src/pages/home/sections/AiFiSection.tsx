import React, { useRef } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="aifi" className="relative w-full bg-[#f3f2e6] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      
      {/* Seamless Soft Top Gradient from White (Authority) into Parchment */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#ffffff] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* =========================================================================
            1. SECTION HEADER (RENAISSANCE THEME & TYPOGRAPHY)
            ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#e0e8dc]/70 border border-[#445648]/35 text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-[#25362a] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#25362a]" />
            Autonomous Infrastructure
          </div>

          {/* Editorial Headline with Gold Rays & Highlighter Underline */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a978]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="12" x2="10" y2="12" />
              <line x1="6" y1="6" x2="11" y2="9" />
              <line x1="6" y1="18" x2="11" y2="15" />
            </svg>

            <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-[54px] xl:text-6xl text-[#25362a] tracking-tight leading-[1.12]">
              AiFi Powered Agents That Act With{' '}
              <span className="italic font-bold relative inline-block text-[#25362a]">
                Trust.
                <svg className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 text-[#c4a978] pointer-events-none" viewBox="0 0 160 18" fill="none" preserveAspectRatio="none">
                  <path d="M3 12 C 40 4, 110 5, 157 9 C 120 16, 50 15, 6 14" stroke="#c4a978" strokeWidth="4.5" strokeLinecap="round" fill="#c4a978" fillOpacity="0.25" />
                </svg>
              </span>
            </h2>

            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4a978]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="20" y1="12" x2="14" y2="12" />
              <line x1="18" y1="6" x2="13" y2="9" />
              <line x1="18" y1="18" x2="13" y2="15" />
            </svg>
          </div>

          {/* Editorial Subtitle */}
          <p className="font-serif italic text-lg sm:text-xl lg:text-[22px] text-[#4b5546] max-w-3xl mx-auto leading-relaxed pt-2 sm:pt-3">
            AiFi powers intelligent agents that can reason, act, pay and move value — across apps, chains and the real world.
          </p>
        </div>

        {/* =========================================================================
            2. CARDS ROW / CAROUSEL (DOPAMINT SAGE/PARCHMENT PALETTE)
            ========================================================================= */}
        <div className="relative group/carousel">
          
          {/* Navigation Controls (Visible on mobile/tablet) */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous cards"
            className="lg:hidden absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#25362a] text-[#f7f5f0] border border-[#3e4f42]/40 hover:bg-[#1e2e22] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => handleScroll('right')}
            aria-label="Next cards"
            className="lg:hidden absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#25362a] text-[#f7f5f0] border border-[#3e4f42]/40 hover:bg-[#1e2e22] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Cards Grid Container */}
          <div
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {CARDS_DATA.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[270px] min-[360px]:w-[285px] sm:w-[320px] lg:w-auto snap-center group relative bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/40 hover:border-[#3e4f42]/90 rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_18px_rgba(40,48,40,0.04)] hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#25362a] flex items-center justify-center shadow-md mb-5 border border-[#3e4f42]/40 transition-transform duration-300 group-hover:scale-105">
                    {card.icon}
                  </div>

                  {/* Big Pill Badge */}
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#dbe5d7] border border-[#3e4f42]/35 text-[#1e2e22] font-mono font-bold text-2xl tracking-tight mb-3.5 shadow-sm">
                    {card.badge}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[23px] sm:text-[25px] font-bold text-[#25362a] leading-tight tracking-tight mb-2.5">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14.5px] sm:text-[15.5px] text-[#3e5042] font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom rule with arrow */}
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

      </div>

    </section>
  );
};
