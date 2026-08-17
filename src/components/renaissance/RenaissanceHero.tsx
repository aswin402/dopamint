import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import heroBgVid from '../../assets/herosectionbgvid.webm';
import handWithMobile from '../../assets/hand_with_mobile.png';

const ACTION_WORDS = ['Trade', 'Book', 'Buy', 'Message', 'Schedule'];

export const RenaissanceHero: React.FC = () => {
  const [actionIndex, setActionIndex] = useState(0);

  // 2.4-second smooth action word cycling loop
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setActionIndex((prev) => (prev + 1) % ACTION_WORDS.length);
    }, 2400);

    return () => clearInterval(wordTimer);
  }, []);

  return (
    <section id="hero" className="relative w-full flex flex-col justify-start select-none">
      
      {/* =========================================================================
          1. HERO VIDEO BACKGROUND (herosectionbgvid.webm)
          ========================================================================= */}
      <div className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-[92vh] xl:min-h-screen bg-black overflow-hidden shadow-2xl flex items-end justify-center">
        
        {/* Fullscreen Ambient Hero Video */}
        <video
          src={heroBgVid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Subtle Bottom Ambient Vignette to ensure text readability */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none z-10" />

        {/* Animated Hero Headline Overlay (Bottom Center) */}
        <div className="relative z-20 pb-16 sm:pb-20 md:pb-24 text-center w-full px-4 pointer-events-none">
          <div className="inline-flex items-center justify-center flex-wrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            <span className="whitespace-nowrap font-serif font-normal text-white mr-3 sm:mr-4 md:mr-5">
              Your Agents can
            </span>
            <div className="inline-flex items-center justify-start min-w-[130px] sm:min-w-[180px] md:min-w-[240px] lg:min-w-[300px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ACTION_WORDS[actionIndex]}
                  initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -22, filter: 'blur(6px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-serif italic font-bold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] pl-1"
                >
                  {ACTION_WORDS[actionIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          2. SECOND SECTION: House of AI Agents (Compact Bottom & Clean Masked Cut)
          ========================================================================= */}
      <div id="manifesto" className="w-full relative pt-12 sm:pt-16 lg:pt-20 pb-0 overflow-hidden bg-[#f7f3ef]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Left Column: Top-Aligned with the Top of the Mobile Phone */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left self-start pt-2 sm:pt-4 lg:pt-6 pb-10 sm:pb-12 lg:pb-16 z-20">
            
            {/* Editorial Title */}
            <h2 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.04] select-none">
              <span className="block font-serif font-normal text-[#c5a880]">
                House of
              </span>
              <span className="block font-serif italic font-normal text-[#3f5144]">
                AI Agents
              </span>
            </h2>

            {/* Subtext Paragraph */}
            <p className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed max-w-xl">
              DopaMint is the home for AI agents where every agent gets a trust layer, a verifiability layer, and a control layer, so it can actually act on your behalf without you having to babysit it
            </p>

            {/* Exact Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#app"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#475e4e] hover:bg-[#3d5143] text-white font-serif font-medium text-base tracking-wide shadow-sm transition-all duration-200 cursor-pointer"
              >
                Get the app
              </a>

              <a
                href="#imessage"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#475e4e] text-[#475e4e] hover:bg-[#475e4e]/10 font-serif font-medium text-base tracking-wide transition-all duration-200 cursor-pointer"
              >
                Try iMessage
              </a>
            </div>

          </div>

          {/* Right Column: Large Mobile Device with Bottom Cut Hidden/Tucked Under */}
          <div className="lg:col-span-7 relative flex items-start justify-center lg:justify-end z-10">
            <div className="relative w-full sm:w-[115%] lg:w-[135%] xl:w-[150%] lg:-mr-[6vw] xl:-mr-[10vw] 2xl:-mr-[14vw] flex items-start justify-end -mb-10 sm:-mb-14 lg:-mb-16">
              <img
                src={handWithMobile}
                alt="House of AI Agents - Hand with Mobile"
                className="w-full h-auto object-contain object-top-right select-none drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01] block"
              />
            </div>
          </div>

        </div>

        {/* Bottom Seamless Gradient Fade Mask */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#f7f3ef] via-[#f7f3ef]/90 to-transparent pointer-events-none z-20" />
      </div>

    </section>
  );
};
