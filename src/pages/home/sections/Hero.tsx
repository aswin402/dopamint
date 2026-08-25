import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useTransform, type MotionValue } from 'framer-motion';

import heroBgVid from '../../../assets/herosectionbgvid.webm';
import chatScreenVid from '../../../assets/Chat_Screen.webm';
import crownImg from '../../../assets/Crown.webp';
import { ScrollDissolveReveal } from '@/components/ui/scroll-dissolve-reveal';

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
              className="w-full bg-transparent border-none outline-none text-[#fafafa] text-xs sm:text-sm font-sans placeholder:text-[#fafafa]/80 placeholder:font-sans font-medium caret-[#fafafa]"
            />
            {promptValue && (
              <button
                type="button"
                onClick={() => setPromptValue('')}
                className="text-[#fafafa]/70 hover:text-[#fafafa] text-xs px-1.5 cursor-pointer transition-colors"
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
                    ? 'bg-white/50 text-[#fafafa] border border-white/90 scale-105 shadow-sm font-medium'
                    : 'bg-white/20 hover:bg-white/35 text-[#fafafa] hover:text-white border border-white/40 hover:border-white/70 backdrop-blur-md hover:scale-105'
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

        {/* Get App CTA */}
        <motion.a
          href="#manifesto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-5 inline-flex items-center justify-center rounded-full bg-white text-[#141820] px-6 sm:px-7 py-2 sm:py-2.5 font-serif font-bold text-xs sm:text-sm tracking-wide shadow-[0_6px_24px_rgba(0,0,0,0.45)] hover:bg-[#f3f2e6] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
        >
          Get App
        </motion.a>
      </div>
    </motion.div>
  );
}

{/* =========================================================================
    2. SECOND SECTION COMPONENT: House of AI Agents ("what is dopamint? House of Sovereign Agents")
    ========================================================================= */}
function HouseOfAgentsSection() {
  const chatVideoRef = useRef<HTMLVideoElement>(null);

  // The dissolve engine flips `data-hero-revealed` (and dispatches
  // `hero-reveal-change`) once the hero overlay is gone. This 1080×1080 video
  // is fully covered then — pause its decode loop instead of burning CPU.
  useEffect(() => {
    const video = chatVideoRef.current;
    if (!video) return;
    const sync = () => {
      if (document.documentElement.dataset.heroRevealed === 'true') {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    sync();
    window.addEventListener('hero-reveal-change', sync);
    return () => window.removeEventListener('hero-reveal-change', sync);
  }, []);

  return (
    <div id="manifesto" className="w-full h-full relative flex flex-col justify-between lg:justify-center bg-[#f3f2e6] pt-14 sm:pt-18 lg:pt-22 pb-0 overflow-y-auto lg:overflow-hidden select-none px-4 sm:px-8 md:px-10 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-center lg:items-end">

        {/* Left Column: Editorial Information (Exact styling matching reference image) */}
        <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 md:space-y-5 text-left self-center pb-4 sm:pb-6 lg:pb-12 z-20">

          {/* Small Eyebrow */}
          <div>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#55604e] font-semibold">
              what is dopamint?
            </span>
          </div>

          {/* Editorial Title (Responsive 2-line layout: House of / Intent-Based Agents) */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[70px] 2xl:text-[78px] tracking-tight leading-[1.02] text-[#55604e]">
              <span className="block font-serif font-normal text-[#55604e]">
                House of
              </span>
              <span className="block font-serif italic font-bold text-[#55604e]">
                Intent-Based Agents
              </span>
            </h2>
            <p className="font-serif italic font-bold text-sm sm:text-base md:text-lg text-[#7a382e] mt-1 sm:mt-1.5">
              powered by Base
            </p>
          </div>

          {/* Editorial Body Text */}
          <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 text-xs sm:text-sm md:text-base lg:text-[16.5px] text-[#4e4e4e] font-sans font-normal leading-relaxed max-w-xl">
            <p>
              There was a time you needed a different app for everything — one to trade, one to pay, one to plan. That era is kinda over.
            </p>
            <p className="font-serif italic text-sm sm:text-base md:text-lg lg:text-[19px] text-[#3d4837] leading-snug">
              Now, you just ask <span className="font-serif italic font-bold text-[#20291c]">Dope</span>. It handles the rest.
            </p>
            <p>
              Dopamint is a network of agents running on the <span className="font-bold text-[#20291c]">Agent Harness</span>, with a continuous <span className="font-bold text-[#20291c]">Agent Loop</span> working behind the scenes. They reason, act, transact, and pay on their own
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 sm:pt-2">
            {['Privacy', 'Verifiability', 'AiFi', 'x402'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#55604e]/30 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#55604e] font-semibold select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7a382e]/80" />
                {badge}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Chat Screen Video Fully Responsive & Bottom Aligned */}
        <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-end z-10 self-end w-full">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none lg:w-[120%] xl:w-[132%] 2xl:w-[140%] lg:-mr-[2vw] xl:-mr-[4vw] 2xl:-mr-[6vw] translate-x-0 lg:translate-x-6 xl:translate-x-10 flex items-end justify-center lg:justify-end">
            <video
              ref={chatVideoRef}
              src={chatScreenVid}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[68vh] lg:max-h-[85vh] xl:max-h-[92vh] object-contain object-bottom transition-transform duration-500 hover:scale-[1.01] block"
            />
          </div>
        </div>

      </div>

      {/* Plain solid div with 3rd section color (#ffffff) and rounded top corners */}
      <div className="absolute inset-x-0 bottom-0 h-4 sm:h-6 md:h-8 lg:h-10 bg-[#ffffff] rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[36px] pointer-events-none z-20" />
    </div>
  );
}

export const Hero: React.FC = () => {
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
