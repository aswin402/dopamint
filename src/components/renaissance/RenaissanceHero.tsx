import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import heroBgVid from '../../assets/herosectionbgvid.webm';
import handWithMobile from '../../assets/hand_with_mobile.png';

import crownImg from '../../assets/Crown.png';

const ACTION_WORDS = ['Trade', 'Book', 'Buy', 'Message', 'Schedule'];

const SUGGESTION_BADGES = [
  'Write content',
  'Brainstorm Ideas',
  'Write Code',
  'Research',
  'Surprise me',
];

export const RenaissanceHero: React.FC = () => {
  const [actionIndex, setActionIndex] = useState(0);
  const [promptValue, setPromptValue] = useState('');
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  // 2.4-second smooth action word cycling loop
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setActionIndex((prev) => (prev + 1) % ACTION_WORDS.length);
    }, 2400);

    return () => clearInterval(wordTimer);
  }, []);

  const handleBadgeClick = (badge: string) => {
    setActiveBadge(badge);
    setPromptValue(badge);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptValue.trim()) return;
    // Scroll or route to app
    const appEl = document.getElementById('manifesto') || document.getElementById('asks');
    if (appEl) {
      appEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full flex flex-col justify-start">
      
      {/* =========================================================================
          1. HERO VIDEO BACKGROUND (herosectionbgvid.webm) + CENTER GET STARTED WIDGET
          ========================================================================= */}
      <div className="relative w-full min-h-[90vh] sm:min-h-[95vh] lg:min-h-screen bg-black overflow-hidden shadow-2xl flex flex-col justify-between items-center pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14">
        
        {/* Fullscreen Ambient Hero Video */}
        <video
          src={heroBgVid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Ambient Overlay for Cinematic Contrast */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />

        {/* Subtle Bottom Ambient Vignette to ensure text readability */}
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-10" />

        {/* =========================================================================
            CENTER INTERACTIVE SECTION: Crown + Get Started + Input Bar + 5 Badges
            ========================================================================= */}
        <div className="relative z-20 my-auto w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          {/* Crown Image */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1.5 sm:mb-2"
          >
            <img
              src={crownImg}
              alt="Renaissance Crown"
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain drop-shadow-[0_6px_24px_rgba(255,215,140,0.6)] filter brightness-110 select-none pointer-events-none"
            />
          </motion.div>

          {/* "Get Started" Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic font-normal text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] mb-6 sm:mb-8 select-none"
          >
            Get Started
          </motion.h1>

          {/* Frosted Glass Input Bar */}
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleFormSubmit}
            className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl"
          >
            <div className="relative group w-full rounded-full backdrop-blur-xl bg-white/20 sm:bg-white/25 hover:bg-white/30 focus-within:bg-white/35 border border-white/50 focus-within:border-white/80 shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all duration-300 px-5 sm:px-7 py-3 sm:py-4 flex items-center gap-3">
              <input
                type="text"
                value={promptValue}
                onChange={(e) => setPromptValue(e.target.value)}
                placeholder="Ask anything"
                className="w-full bg-transparent border-none outline-none text-[#1a1a1a] sm:text-lg font-sans placeholder:text-[#2d2d2d]/80 placeholder:font-sans font-medium caret-[#1a1a1a]"
              />
              {promptValue && (
                <button
                  type="button"
                  onClick={() => setPromptValue('')}
                  className="text-[#2d2d2d]/70 hover:text-black text-sm px-2 cursor-pointer transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </motion.form>

          {/* 5 Suggestion Badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-3.5 pt-3.5 sm:pt-4 max-w-2xl"
          >
            {SUGGESTION_BADGES.map((badge) => {
              const isSelected = activeBadge === badge && promptValue === badge;
              return (
                <button
                  key={badge}
                  type="button"
                  onClick={() => handleBadgeClick(badge)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-sans text-xs sm:text-sm font-medium tracking-normal transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                    isSelected
                      ? 'bg-white/50 text-[#141820] border border-white/90 scale-105 shadow-md'
                      : 'bg-white/25 hover:bg-white/40 text-[#1a1a1a] hover:text-black border border-white/45 hover:border-white/75 backdrop-blur-md hover:scale-105'
                  }`}
                >
                  {badge}
                </button>
              );
            })}
          </motion.div>

        </div>

        {/* =========================================================================
            BOTTOM: Animated Hero Headline Overlay ("Your Agents can [Trade...]")
            ========================================================================= */}
        <div className="relative z-20 text-center w-full px-4 pt-6">
          <div className="inline-flex items-center justify-center flex-wrap text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            <span className="whitespace-nowrap font-serif font-normal text-white mr-2.5 sm:mr-4">
              Your Agents can
            </span>
            <div className="inline-flex items-center justify-start min-w-[100px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ACTION_WORDS[actionIndex]}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
          
          {/* Left Column: Shifted slightly down for balanced editorial breathing room */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left self-start pt-6 sm:pt-10 lg:pt-16 xl:pt-20 pb-10 sm:pb-12 lg:pb-16 z-20">
            
            {/* Editorial Title */}
            <h2 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.04]">
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

          {/* Right Column: Large Mobile Device Shifted Further Right */}
          <div className="lg:col-span-7 relative flex items-start justify-center lg:justify-end z-10">
            <div className="relative w-full sm:w-[115%] lg:w-[135%] xl:w-[150%] lg:-mr-[6vw] xl:-mr-[10vw] 2xl:-mr-[14vw] translate-x-8 sm:translate-x-14 lg:translate-x-20 xl:translate-x-28 2xl:translate-x-36 flex items-start justify-end pb-0">
              <img
                src={handWithMobile}
                alt="House of AI Agents - Hand with Mobile"
                className="w-full h-auto object-contain object-top-right transition-transform duration-500 hover:scale-[1.01] block"
              />
            </div>
          </div>

        </div>

        {/* Plain solid div with 3rd section color (#ffffff) and rounded top corners */}
        <div className="absolute inset-x-0 bottom-0 h-8 sm:h-10 lg:h-12 bg-[#ffffff] rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[36px] pointer-events-none z-20" />
      </div>

    </section>
  );
};
