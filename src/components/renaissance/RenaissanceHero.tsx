import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, type MotionValue } from 'framer-motion';

import heroBgVid from '../../assets/herosectionbgvid.webm';
import chatScreenVid from '../../assets/Chat_Screen.webm';
import crownImg from '../../assets/Crown.png';
import { ScrollDissolveReveal } from '../ui/scroll-dissolve-reveal';

const ACTION_WORDS = ['Trade', 'Book', 'Buy', 'Message', 'Schedule'];

const SUGGESTION_BADGES = [
  'Write content',
  'Brainstorm Ideas',
  'Write Code',
  'Research',
  'Surprise me',
];

interface HeroOverlayProps {
  actionIndex: number;
  promptValue: string;
  setPromptValue: (val: string) => void;
  activeBadge: string | null;
  handleBadgeClick: (badge: string) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  scrollYProgress: MotionValue<number>;
}

function HeroOverlay({
  actionIndex,
  promptValue,
  setPromptValue,
  activeBadge,
  handleBadgeClick,
  handleFormSubmit,
  scrollYProgress,
}: HeroOverlayProps) {
  // Fade out hero UI cleanly within the first 12% of animation progress
  const opacity = useTransform(scrollYProgress || 0, [0, 0.12], [1, 0]);
  const y = useTransform(scrollYProgress || 0, [0, 0.12], [0, -25]);
  const pointerEvents = useTransform(scrollYProgress || 0, (p: number) => (p < 0.05 ? 'auto' : 'none'));

  return (
    <motion.div 
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-0 w-full h-full flex flex-col justify-between items-center pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-16"
    >
      {/* Ambient Overlay for Cinematic Contrast */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none -z-10" />

      {/* Subtle Bottom Ambient Vignette to ensure text readability */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none -z-10" />

      {/* CENTER INTERACTIVE SECTION: Crown + Get Started + Input Bar + 5 Badges */}
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

        {/* Compact "ASK DOPE" Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif italic font-normal text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] mb-3.5 sm:mb-4 select-none"
        >
          ASK DOPE
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

      {/* BOTTOM: Animated Hero Headline ("Your Agents can [Trade...]") */}
      <div className="relative z-20 text-center w-full px-4 pt-4 pb-2 sm:pb-4 flex flex-col items-center">
        <div className="flex items-center justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-full">
          <span className="whitespace-nowrap font-serif font-normal text-white mr-2 sm:mr-3 md:mr-4 shrink-0">
            Your Agents can
          </span>
          <div className="w-[110px] sm:w-[170px] md:w-[220px] lg:w-[280px] xl:w-[350px] text-left shrink-0 relative h-[1.15em] flex items-center overflow-visible">
            <AnimatePresence mode="wait">
              <motion.span
                key={ACTION_WORDS[actionIndex]}
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 bottom-0 flex items-center font-serif italic font-bold text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] whitespace-nowrap"
              >
                {ACTION_WORDS[actionIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtitle Under Headline */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 font-serif italic tracking-wide mt-2 sm:mt-3 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          Powered by <span className="font-serif italic font-bold text-white">$DOPE</span>
        </p>
      </div>
    </motion.div>
  );
}

{/* =========================================================================
    2. SECOND SECTION COMPONENT: House of AI Agents ("what is dopamint? House of Sovereign Agents")
    ========================================================================= */}
function HouseOfAgentsSection() {
  return (
    <div id="manifesto" className="w-full h-full relative flex flex-col justify-center bg-[#f3f2e6] pt-16 sm:pt-20 lg:pt-22 pb-4 overflow-y-auto lg:overflow-hidden select-none px-6 sm:px-10 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Column: Editorial Information (Exact styling matching reference image) */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left self-center z-20">
          
          {/* Small Eyebrow */}
          <div>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#55604e] font-semibold">
              what is dopamint?
            </span>
          </div>

          {/* Editorial Title (2-line layout: House of / Intent-Based Agents) */}
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] tracking-tight leading-[1.02] text-[#55604e]">
              <span className="block font-serif font-normal text-[#55604e]">
                House of
              </span>
              <span className="block font-serif italic font-bold text-[#55604e]">
                Intent-Based Agents
              </span>
            </h2>
            <p className="font-serif italic font-bold text-base sm:text-lg text-[#7a382e] mt-1.5">
              powered by AiFi
            </p>
          </div>

          {/* Editorial Body Text */}
          <div className="space-y-3 sm:space-y-3.5 text-sm sm:text-base md:text-[16.5px] text-[#4e4e4e] font-sans font-normal leading-relaxed max-w-xl">
            <p>
              There was a time you needed a different app for everything — one to trade, one to pay, one to plan. That era is kinda over.
            </p>
            <p className="font-serif italic text-base sm:text-lg md:text-[19px] text-[#3d4837] leading-snug">
              Now, you just ask <span className="font-serif italic font-bold text-[#20291c]">Dope</span>. <br className="hidden sm:inline" />
              It handles the rest.
            </p>
            <p>
              Dopamint is a network of agents running on the <span className="font-bold text-[#20291c]">Agent Harness</span>, with a continuous <span className="font-bold text-[#20291c]">Agent Loop</span> working behind the scenes. They reason, act, transact, and pay on their own — with <span className="font-bold text-[#20291c]">AiFi</span> and <span className="font-bold text-[#20291c]">x402</span> doing the heavy lifting.
            </p>
          </div>

          {/* 2 CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3 sm:pt-4">
            <a
              href="#agents"
              className="inline-flex items-center justify-center rounded-full bg-[#55604e] text-white px-8 sm:px-9 py-3 sm:py-3.5 font-serif font-bold text-sm sm:text-base hover:bg-[#465040] hover:scale-105 transition-all duration-200 shadow-sm cursor-pointer"
            >
              Get the app
            </a>
            <a
              href="#asks"
              className="inline-flex items-center justify-center rounded-full bg-transparent border border-[#55604e] text-[#55604e] px-8 sm:px-9 py-3 sm:py-3.5 font-serif font-bold text-sm sm:text-base hover:bg-[#55604e]/10 hover:scale-105 transition-all duration-200 shadow-xs cursor-pointer"
            >
              Try iMessage
            </a>
          </div>

        </div>

        {/* Right Column: Chat Screen Video Shifted Right */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end z-10">
          <div className="relative w-full sm:w-[110%] lg:w-[125%] xl:w-[135%] lg:-mr-[3vw] xl:-mr-[6vw] translate-x-4 sm:translate-x-8 lg:translate-x-12 flex items-center justify-end">
            <video
              src={chatScreenVid}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full max-h-[75vh] object-contain object-right transition-transform duration-500 hover:scale-[1.01] block"
            />
          </div>
        </div>

      </div>

      {/* Plain solid div with 3rd section color (#ffffff) and rounded top corners */}
      <div className="absolute inset-x-0 bottom-0 h-6 sm:h-8 lg:h-10 bg-[#ffffff] rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[36px] pointer-events-none z-20" />
    </div>
  );
}

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
    const appEl = document.getElementById('manifesto') || document.getElementById('asks');
    if (appEl) {
      appEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full flex flex-col justify-start bg-[#f3f2e6]">
      
      {/* =========================================================================
          FIXED HERO SCROLL DISSOLVE REVEAL (Hero Video -> Reveals Second Section Inside)
          - Scrolling down at top plays the dissolve animation in place.
          - Once fully revealed, normal scrolling takes over seamlessly.
          - Scrolling back UP to the top cleanly reverses the animation.
          ========================================================================= */}
      <ScrollDissolveReveal
        videoFront={heroBgVid}
        backgroundContent={<HouseOfAgentsSection />}
      >
        {(scrollYProgress) => (
          <HeroOverlay
            actionIndex={actionIndex}
            promptValue={promptValue}
            setPromptValue={setPromptValue}
            activeBadge={activeBadge}
            handleBadgeClick={handleBadgeClick}
            handleFormSubmit={handleFormSubmit}
            scrollYProgress={scrollYProgress}
          />
        )}
      </ScrollDissolveReveal>

    </section>
  );
};
