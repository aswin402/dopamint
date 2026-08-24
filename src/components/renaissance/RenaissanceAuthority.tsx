import React from 'react';
import planetImg from '../../assets/Planet.png';
import companionVideo from '../../assets/Companion_Video_1.webm';

export const RenaissanceAuthority: React.FC = () => {
  return (
    <section id="control" className="relative w-full bg-[#ffffff] pt-8 sm:pt-12 lg:pt-14 pb-2 sm:pb-4 lg:pb-6 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      
      {/* =========================================================================
          1. PLANET — POSITIONED SLIGHTLY UP ALONG THE RIGHT EDGE
          ========================================================================= */}
      <img
        src={planetImg}
        alt=""
        aria-hidden="true"
        className="absolute -right-12 sm:-right-16 lg:-right-20 top-10 sm:top-16 lg:top-24 w-48 sm:w-64 lg:w-80 h-auto pointer-events-none select-none z-0 opacity-80"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* =========================================================================
            2. LEFT — PURE VIDEO POSITIONED SLIGHTLY FURTHER LEFT
            ========================================================================= */}
        <div className="flex items-center justify-center lg:justify-start w-full lg:col-span-7 -ml-2 sm:-ml-6 lg:-ml-16 xl:-ml-24">
          <video
            src={companionVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain max-h-[580px] sm:max-h-[700px] lg:max-h-[820px]"
          />
        </div>

        {/* =========================================================================
            3. RIGHT — EDITORIAL HEADLINE + CTA (SHIFTED VERY SLIGHTLY MORE LEFT)
            ========================================================================= */}
        <div className="flex flex-col items-start gap-7 lg:col-span-5 -ml-0 lg:-ml-16 xl:-ml-26">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f3f0e8] border border-[#e2ddd3] text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-[#3d4a3a]">
            <span className="w-2 h-2 rounded-full bg-[#3d4a3a]" />
            Virtual Companions
          </div>

          {/* Editorial Headline */}
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[84px] text-[#3d4a3a] tracking-tight leading-[1.02]">
            The <span className="italic font-bold">Future</span>
            <br />
            of <span className="italic font-bold">Agents</span>
          </h2>

          {/* Subtitle & Key Points */}
          <div className="space-y-3.5 max-w-lg">
            <p className="font-serif italic text-xl sm:text-2xl lg:text-[26px] text-[#4b5546] leading-snug">
              From agents that execute tasks
              <br />
              to agents that become companions.
            </p>

            {/* Feature Points */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
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
          <div className="flex flex-wrap items-center gap-5 pt-3 sm:pt-6 w-full">
            <span className="text-xs sm:text-[13px] font-sans font-semibold uppercase tracking-[0.2em] text-[#4b5546]">
              Virtual Agents · In the Frame
            </span>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#3d4a3a] px-7 py-3 text-xs sm:text-[13px] font-sans font-bold uppercase tracking-widest text-[#f7f5f0] transition-colors duration-200 hover:bg-[#2e3a2c] shadow-sm hover:shadow-md ml-auto sm:ml-0"
            >
              Get API
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
