import React from 'react';
import {
  ROW_1_LOGOS,
  ROW_2_LOGOS,
  ROW_3_LOGOS,
  ROW_4_LOGOS,
} from '@/data/ecosystemLogos';

export const CryptoLogosMarquee: React.FC = () => {
  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 overflow-hidden relative space-y-3 sm:space-y-5">
      
      {/* Category Eyebrow */}
      <div className="text-center mb-2 sm:mb-2.5">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8e4d5] border border-[#d6cfbe] text-[11px] font-mono tracking-widest text-[#3d4a3a] uppercase font-semibold">
          SUPPORTED WALLETS &amp; EXCHANGES
        </span>
      </div>

      {/* Editorial Headline: Any app. Any exchange. One Dope. */}
      <div className="text-center w-full max-w-6xl mx-auto mb-6 sm:mb-10 lg:mb-14 pb-2 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[66px] tracking-tight text-[#2d3e32] font-serif font-normal leading-[1.08]">
          Any app. Any exchange. One{' '}
          <span className="font-serif italic font-bold text-[#253b2b]">
            Dope.
          </span>
        </h2>
      </div>

      {/* Main 4-Row Marquee Track Wrapper with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden space-y-3 sm:space-y-4 lg:space-y-5">
        
        {/* Left Gradient Fade (Covers all 4 Rows) */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/90 to-transparent z-20" />

        {/* Right Gradient Fade (Covers all 4 Rows) */}
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-32 lg:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/90 to-transparent z-20" />

        {/* ── ROW 1: Consumer & Daily Apps (Moving LEFT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-left group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_1_LOGOS.map((logo) => (
              <div
                key={`r1-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 2: Productivity, Social & Market Intel (Moving RIGHT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-right group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_2_LOGOS.map((logo) => (
              <div
                key={`r2-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 3: Major Global Exchanges & Protocols (Moving LEFT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-left group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_3_LOGOS.map((logo) => (
              <div
                key={`r3-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_3_LOGOS.map((logo) => (
              <div
                key={`r3-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 4: Web3 Wallets, Hardware & Custody (Moving RIGHT) ── */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="flex w-max shrink-0 items-center animate-crypto-marquee-right group-hover:[animation-play-state:paused]">
            {/* Sequence 1 */}
            {ROW_4_LOGOS.map((logo) => (
              <div
                key={`r4-a-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
            {/* Seamless Continuation */}
            {ROW_4_LOGOS.map((logo) => (
              <div
                key={`r4-b-${logo.id}`}
                title={logo.alt}
                className="flex items-center justify-center mx-4 sm:mx-6 lg:mx-8 shrink-0 h-12 sm:h-14 lg:h-16 px-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 lg:h-10 w-auto max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] object-contain shrink-0 opacity-95 hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
