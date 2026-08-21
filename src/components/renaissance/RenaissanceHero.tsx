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
      <div className="relative w-full min-h-[92vh] xl:min-h-screen bg-black overflow-hidden shadow-2xl flex flex-col justify-between items-center pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-16">
        
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
        <div className="relative z-20 my-auto w-full max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          {/* Small Regal Crown */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 sm:mb-1.5"
          >
            <img
              src={crownImg}
              alt="Renaissance Crown"
              className="w-10 sm:w-12 md:w-14 h-auto object-contain drop-shadow-[0_2px_14px_rgba(255,255,255,0.7)] filter brightness-0 invert opacity-95 select-none pointer-events-none"
            />
          </motion.div>

          {/* Compact "Get Started" Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif italic font-normal text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] mb-3.5 sm:mb-4 select-none"
          >
            Get Started
          </motion.h2>

          {/* Sleek Frosted Glass Input Bar */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleFormSubmit}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl"
          >
            <div className="relative group w-full rounded-full backdrop-blur-md bg-white/20 sm:bg-white/25 hover:bg-white/30 focus-within:bg-white/35 border border-white/50 focus-within:border-white/80 shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-300 px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2.5">
              <input
                type="text"
                value={promptValue}
                onChange={(e) => setPromptValue(e.target.value)}
                placeholder="Ask anything"
                className="w-full bg-transparent border-none outline-none text-[#1a1a1a] text-xs sm:text-sm font-sans placeholder:text-[#2d2d2d]/80 placeholder:font-sans font-medium caret-[#1a1a1a]"
              />
              {promptValue && (
                <button
                  type="button"
                  onClick={() => setPromptValue('')}
                  className="text-[#2d2d2d]/70 hover:text-black text-xs px-1.5 cursor-pointer transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </motion.form>

          {/* 5 Sleek Suggestion Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 pt-2.5 sm:pt-3 max-w-xl"
          >
            {SUGGESTION_BADGES.map((badge) => {
              const isSelected = activeBadge === badge && promptValue === badge;
              return (
                <button
                  key={badge}
                  type="button"
                  onClick={() => handleBadgeClick(badge)}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-sans text-[11px] sm:text-xs font-normal tracking-normal transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                    isSelected
                      ? 'bg-white/50 text-[#141820] border border-white/90 scale-105 shadow-sm font-medium'
                      : 'bg-white/25 hover:bg-white/40 text-[#1a1a1a] hover:text-black border border-white/40 hover:border-white/70 backdrop-blur-md hover:scale-105'
                  }`}
                >
                  {badge}
                </button>
              );
            })}
          </motion.div>

        </div>

        {/* =========================================================================
            BOTTOM: Giant Animated Hero Headline ("Your Agents can [Trade...]")
            ========================================================================= */}
        <div className="relative z-20 text-center w-full px-4 pt-4 pb-2 sm:pb-4">
          <div className="inline-flex items-center justify-center flex-wrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            <span className="whitespace-nowrap font-serif font-normal text-white mr-3 sm:mr-4 md:mr-5">
              Your Agents can
            </span>
            <div className="inline-flex items-center justify-start min-w-[130px] sm:min-w-[180px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[360px] text-left">
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
          
          {/* Left Column: Shifted slightly down for balanced editorial breathing room */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left self-start pt-6 sm:pt-10 lg:pt-16 xl:pt-20 pb-10 sm:pb-12 lg:pb-16 z-20">
            
            {/* Editorial Title */}
            <h2 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.02]">
              <span className="block font-serif font-normal text-[#4a5b4e]">
                House of
              </span>
              <span className="block font-serif italic font-bold text-[#4a5b4e]">
                Sovereign
              </span>
              <span className="block font-serif italic font-bold text-[#4a5b4e]">
                Agents
              </span>
            </h2>

            {/* Subtext Paragraph */}
            <p className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed max-w-xl">
              Dopamint is the home for AI agents that can actually act. Every agent arrives with an AiFi layer the ability to research, reason and execute across markets, wallets, exchanges and onchain systems.
            </p>

            {/* Exact Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#app"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#4a5b4e] hover:bg-[#3d4c40] text-white font-serif italic font-medium text-base sm:text-lg tracking-wide shadow-sm transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                Get the app
              </a>

              <a
                href="#imessage"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#4a5b4e] text-[#4a5b4e] hover:bg-[#4a5b4e]/10 font-serif font-normal text-base sm:text-lg tracking-wide transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
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
