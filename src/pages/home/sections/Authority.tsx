import React from 'react';
import companionVideo from '../../../assets/Companion_Video_1.webm';

export const Authority: React.FC = () => {
  return (
    <section id="control" className="relative w-full bg-[#ffffff] pt-8 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        
        {/* =========================================================================
            1. LEFT — COMPANION VIDEO (BIGGER & SHIFTED LEFT ON MOBILE)
            ========================================================================= */}
        <div className="flex items-center justify-center lg:justify-start w-full lg:col-span-7 -ml-0 lg:-ml-16 xl:-ml-24 overflow-visible py-4 sm:py-0 mb-2 sm:mb-0">
          <video
            src={companionVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full max-w-none sm:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain max-h-[560px] sm:max-h-[700px] lg:max-h-[820px] scale-[1.36] -translate-x-20 sm:scale-100 sm:translate-x-0 origin-center lg:origin-left"
          />
        </div>

        {/* =========================================================================
            2. RIGHT — EDITORIAL HEADLINE + CTA (CENTER ALIGNED ON MOBILE)
            ========================================================================= */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5 sm:gap-7 lg:col-span-5 -ml-0 lg:-ml-16 xl:-ml-26 pt-6 sm:pt-0">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-[#3d4a3a]">
            <span className="w-2 h-2 rounded-full bg-[#3d4a3a]" />
            Virtual Agents
          </div>

          {/* Editorial Headline */}
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[84px] text-[#3d4a3a] tracking-tight leading-[1.02] text-center sm:text-left">
            The <span className="italic font-bold">Future</span>
            <br />
            of <span className="italic font-bold">Agents</span>
          </h2>

          {/* Subtitle & Key Points */}
          <div className="space-y-3.5 max-w-lg flex flex-col items-center sm:items-start">
            <p className="font-serif italic text-lg sm:text-xl lg:text-[22px] text-[#4b5546] leading-snug">
              Dopamint powers a privacy-enabled infra layer for agents and AI companions built for live voice, persistent identity, long-term memory, and creator-driven experiences.
            </p>

            {/* Feature Points */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#3d4a3a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55604e]" />
                Privacy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#3d4a3a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55604e]" />
                Memory Portability
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-wider text-[#3d4a3a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#55604e]" />
                Creator Economy
              </span>
            </div>
          </div>

          {/* Bottom Bar: Metadata + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5 pt-3 sm:pt-6 w-full">
            <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] font-semibold text-[#55604e] text-center sm:text-left">
              Virtual Agents · In the Frame
            </span>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#55604e] px-8 py-3.5 text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.2em] text-[#f7f5f0] transition-all duration-200 hover:bg-[#434d3e] hover:scale-105 shadow-sm hover:shadow-md mx-auto sm:mx-0 cursor-pointer"
            >
              Get API
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
