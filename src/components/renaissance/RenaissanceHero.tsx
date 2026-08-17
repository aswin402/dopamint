import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import heroImg1 from '../../assets/herosectionimg1.png';
import heroImg2 from '../../assets/herosectionimg2.png';
import heroImg3 from '../../assets/herosectionimg3.png';
import heroImg4 from '../../assets/herosectionimg4.png';
import handWithMobile from '../../assets/hand_with_mobile.png';

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4];
const ACTION_WORDS = ['Trade', 'Book', 'Buy', 'Message', 'Schedule'];

export const RenaissanceHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [actionIndex, setActionIndex] = useState(0);

  // 4-second automatic slideshow loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
          1. HERO IMAGE SLIDESHOW CANVAS (4s delay, smooth cross-fade transition)
          ========================================================================= */}
      <div className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-[92vh] xl:min-h-screen bg-black overflow-hidden shadow-2xl flex items-end justify-center">
        
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt={`DopaMint Renaissance Era ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 4, ease: "easeOut" },
            }}
            className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
          />
        </AnimatePresence>

        {/* Subtle Bottom Ambient Vignette to ensure text readability */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-10" />

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
          2. SECOND SECTION: House of AI Agents (Exact Match to Design Mockup)
          ========================================================================= */}
      <div id="manifesto" className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: House of AI Agents Copy & Action Pills */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            
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

          {/* Right Column: Hand with Mobile Artwork */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-[560px] flex items-center justify-center">
              <img
                src={handWithMobile}
                alt="House of AI Agents - Hand with Mobile"
                className="w-full h-auto object-contain select-none drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
