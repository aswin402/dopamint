import React, { useRef } from 'react';

interface CardItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CARDS_DATA: CardItem[] = [
  {
    id: 'x402',
    badge: 'x402',
    title: 'Pay for What Agents Need',
    description: 'Agents can make programmatic payments for APIs, data, tools and digital services — directly over HTTP.',
    icon: (
      <svg className="w-6 h-6 text-[#d4f933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    title: 'Agents That Work Together',
    description: 'Agents can discover capabilities, delegate tasks and collaborate across apps, frameworks and organizations.',
    icon: (
      <svg className="w-6 h-6 text-[#d4f933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    title: 'Trust, With Control',
    description: 'Give agents verifiable authority to transact on your behalf — with signed intent, mandates and guardrails.',
    icon: (
      <svg className="w-6 h-6 text-[#d4f933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    title: 'Trust for Agent Commerce',
    description: 'Discover, identify and evaluate agents through on-chain identity, reputation and validation.',
    icon: (
      <svg className="w-6 h-6 text-[#d4f933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="aifi" className="relative w-full bg-[#ffffff] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      
      {/* Top Technical HUD Lines & Accents */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-60 hidden sm:block">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <path d="M0 35 L20 35 L30 10 L120 10" stroke="#d5cfc1" strokeWidth="1.2" />
          <circle cx="28" cy="12" r="3" fill="#c8f53a" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 pointer-events-none opacity-60 hidden sm:block">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <path d="M120 35 L100 35 L90 10 L0 10" stroke="#d5cfc1" strokeWidth="1.2" />
          <circle cx="92" cy="12" r="3" fill="#c8f53a" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* =========================================================================
            1. SECTION HEADER
            ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-3">
            {/* Left Spark Rays */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#b5e625]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="12" x2="10" y2="12" />
              <line x1="6" y1="6" x2="11" y2="9" />
              <line x1="6" y1="18" x2="11" y2="15" />
            </svg>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-6xl text-[#141820] tracking-tight font-bold leading-[1.14]">
              AiFi Powered Agents That Act With{' '}
              <span className="relative inline-block italic font-bold">
                Trust.
                {/* Lime highlighter brush underline */}
                <svg className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 text-[#c8f53a] pointer-events-none" viewBox="0 0 160 18" fill="none" preserveAspectRatio="none">
                  <path d="M3 12 C 40 4, 110 5, 157 9 C 120 16, 50 15, 6 14" stroke="#c8f53a" strokeWidth="5" strokeLinecap="round" fill="#c8f53a" fillOpacity="0.2" />
                </svg>
              </span>
            </h2>

            {/* Right Spark Rays */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#b5e625]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="20" y1="12" x2="14" y2="12" />
              <line x1="18" y1="6" x2="13" y2="9" />
              <line x1="18" y1="18" x2="13" y2="15" />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base lg:text-[17px] text-[#4b5546] max-w-2xl mx-auto leading-relaxed pt-2 sm:pt-3">
            AiFi powers intelligent agents that can reason, act, pay and move value — across apps, chains and the real world.
          </p>
        </div>

        {/* =========================================================================
            2. CARDS ROW / CAROUSEL
            ========================================================================= */}
        <div className="relative group/carousel">
          
          {/* Navigation Controls (Visible on mobile/tablet when scrolling) */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous cards"
            className="lg:hidden absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#141820]/80 text-[#f3f2e6] hover:bg-[#141820] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => handleScroll('right')}
            aria-label="Next cards"
            className="lg:hidden absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#141820]/80 text-[#f3f2e6] hover:bg-[#141820] flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Cards Grid Container (Scrollable on mobile, 4-col grid on lg) */}
          <div
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CARDS_DATA.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[285px] sm:w-[320px] lg:w-auto snap-center group relative bg-[#fcfbf9] hover:bg-[#ffffff] border border-[#e2ddd3] hover:border-[#bbf438] rounded-[22px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_32px_rgba(20,24,32,0.06)] hover:-translate-y-1"
              >
                {/* Corner HUD Brackets */}
                <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#bbf438] rounded-tl-sm pointer-events-none" />
                <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#bbf438] rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#bbf438] rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#bbf438] rounded-br-sm pointer-events-none" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#141820] flex items-center justify-center shadow-md mb-6 transition-transform duration-300 group-hover:scale-105">
                    {card.icon}
                  </div>

                  {/* Big Pill Badge */}
                  <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#d4f933] text-[#141820] font-sans font-black text-2xl sm:text-[28px] tracking-tight mb-4 shadow-sm">
                    {card.badge}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#141820] leading-snug tracking-tight mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[14px] text-[#4b5546] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom HUD Line with Arrow */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#e8e4da] group-hover:border-[#bbf438]/50 transition-colors">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d4f933] to-transparent mr-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[#141820] font-mono text-base font-bold transition-transform duration-200 group-hover:translate-x-1">
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
