import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useTransform, type MotionValue } from 'framer-motion';

import heroBgVidMp4 from '../../../assets/herosectionbgvid.mp4';
import heroBgVidMobMp4 from '../../../assets/herosection_bg_mob.mp4';
import chatScreenMp4 from '../../../assets/Chat_Screen.mp4';
import chatScreenMobileMp4 from '../../../assets/Chat_Screen_Mobile.mp4';
import iconDopeImg from '../../../assets/Icondope.webp';
import { ScrollDissolveReveal } from '@/components/ui/scroll-dissolve-reveal';
import { IntentBaseHeadline } from './IntentBaseHeadline';

const ACTION_WORDS = ['Trade', 'Swap', 'Book', 'Buy', 'Research', 'Schedule'];

const SUGGESTION_BADGES = [
  'Long SPCX',
  'Swap USDC',
  'Whale movements',
  'Plan my weekend',
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
      className="absolute inset-0 w-full h-full flex flex-col justify-center sm:justify-between items-center pt-16 sm:pt-24 md:pt-28 pb-6 sm:pb-14 md:pb-16 px-4"
    >
      {/* Ambient Overlay for Cinematic Contrast */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none -z-10" />

      {/* Subtle Bottom Ambient Vignette to ensure text readability */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none -z-10" />

      {/* CENTER INTERACTIVE SECTION: DOPE Icon + Ask Dope + Input Bar + 4 Badges */}
      <div className="relative z-20 w-full max-w-3xl mx-auto px-2 sm:px-6 flex flex-col items-center text-center my-0 sm:my-auto">
        
        {/* DOPE Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-1.5 sm:mb-2"
        >
          <img
            src={iconDopeImg}
            alt="Dopamint Icon"
            className="w-8 sm:w-10 md:w-12 h-auto object-contain brightness-0 invert opacity-95 drop-shadow-[0_2px_14px_rgba(255,255,255,0.6)] select-none pointer-events-none"
          />
        </motion.div>

        {/* Compact "Ask Dope" Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif italic font-normal text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] mb-2.5 sm:mb-4"
        >
          Ask Dope
        </motion.h2>

        {/* Sleek Frosted Glass Input Bar */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleFormSubmit}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl"
        >
          <div className="relative group w-full rounded-full backdrop-blur-md bg-white/20 sm:bg-white/25 hover:bg-white/30 focus-within:bg-white/35 border border-white/50 focus-within:border-white/80 shadow-[0_6px_25px_rgba(0,0,0,0.3)] transition-all duration-300 pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 flex items-center gap-2">
            <input
              type="text"
              value={promptValue}
              onChange={(e) => setPromptValue(e.target.value)}
              placeholder="Ask anything"
              className="w-full bg-transparent border-none outline-none text-[#fafafa] text-base sm:text-sm font-sans placeholder:text-[#fafafa]/80 placeholder:font-sans font-medium caret-[#fafafa]"
            />
            {promptValue && (
              <button
                type="button"
                onClick={() => setPromptValue('')}
                className="text-[#fafafa]/70 hover:text-[#fafafa] text-xs px-1 cursor-pointer transition-colors"
                aria-label="Clear input"
              >
                ✕
              </button>
            )}
            <button
              type="submit"
              disabled={!promptValue.trim()}
              className={`flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 min-w-[32px] min-h-[32px] rounded-full transition-all duration-200 shrink-0 cursor-pointer ${
                promptValue.trim()
                  ? 'bg-white text-[#141820] shadow-[0_2px_10px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95'
                  : 'bg-white/20 text-[#fafafa]/50 hover:bg-white/30 hover:text-[#fafafa]'
              }`}
              aria-label="Send prompt"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </button>
          </div>
        </motion.form>

        {/* 4 Sleek Suggestion Badges */}
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
                className={`px-3 sm:px-3.5 py-1.5 sm:py-1.5 min-h-[32px] sm:min-h-[34px] flex items-center justify-center rounded-full font-sans text-[11px] sm:text-xs font-normal tracking-normal transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
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

      {/* BOTTOM: Animated Hero Headline ("Your Agents can [Trade...]") moved up on mobile */}
      <div className="relative z-20 text-center w-full px-2 sm:px-4 pt-4 sm:pt-4 pb-2 sm:pb-4 flex flex-col items-center mt-3 sm:mt-0">
        <div className="flex items-center justify-center text-xl min-[360px]:text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-full">
          <span className="whitespace-nowrap font-serif font-normal text-white mr-2 sm:mr-3 md:mr-4 shrink-0">
            Your Agents can
          </span>
          <div className="w-[80px] min-[360px]:w-[90px] sm:w-[170px] md:w-[220px] lg:w-[280px] xl:w-[350px] text-left shrink-0 relative h-[1.15em] flex items-center overflow-visible">
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
        <p className="text-xs sm:text-base md:text-lg text-white/90 font-serif italic tracking-wide mt-1.5 sm:mt-3 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          Powered by <span className="font-serif italic font-bold text-white">$DOPE</span>
        </p>

        {/* Get App CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 sm:mt-5"
        >
          <Link
            to="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#141820] px-6 sm:px-8 py-2.5 sm:py-3 min-h-[42px] font-serif font-bold text-xs sm:text-sm tracking-wide shadow-[0_6px_24px_rgba(0,0,0,0.45)] hover:bg-[#f3f2e6] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            Get App
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 1024;
  });

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isDesktop;
}

{/* =========================================================================
    2. SECOND SECTION COMPONENT: House of AI Agents ("what is dopamint? House of Sovereign Agents")
    ========================================================================= */}
function HouseOfAgentsSection() {
  const isDesktop = useIsDesktop();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce muted & playsinline directly on DOM to comply with iOS/Mac Safari autoplay policy
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const resume = () => {
            video.play().catch(() => {});
          };
          window.addEventListener('touchstart', resume, { once: true, passive: true });
          window.addEventListener('pointerdown', resume, { once: true, passive: true });
          window.addEventListener('click', resume, { once: true, passive: true });
          window.addEventListener('scroll', resume, { once: true, passive: true });
          window.addEventListener('wheel', resume, { once: true, passive: true });
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              video.play().catch(() => {});
            }
          });
        });
      }
    };

    tryPlay();
  }, [isDesktop]);

  return (
    <div
      id="manifesto"
      className="w-full min-h-[100dvh] h-auto lg:h-full relative flex flex-col justify-start lg:justify-center bg-[#f3f2e6] pt-24 min-[390px]:pt-28 min-[430px]:pt-32 sm:pt-36 lg:pt-20 pb-0 lg:pb-0 overflow-x-clip overflow-y-visible lg:overflow-hidden px-4 min-[390px]:px-6 sm:px-8 md:px-10 lg:px-16 select-text"
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-6 items-center lg:items-end flex-1">

        {/* Editorial Information Wrapper:
            On mobile (<lg), 'contents' dissolves this box so Header (order-1) and Body (order-3) 
            wrap cleanly around the Video (order-2).
            On desktop (lg:), becomes a unified col-span-6 column on the left. */}
        <div className="contents lg:block lg:col-span-6 lg:space-y-5 lg:text-left lg:self-center lg:pb-12 lg:z-20">

          {/* Block 1: Header (Eyebrow + Large Title + Built on Base) */}
          <div className="order-1 w-full space-y-2 min-[390px]:space-y-2.5 sm:space-y-3 text-center lg:text-left z-20">
            {/* Small Eyebrow */}
            <div className="pt-2 min-[390px]:pt-3 lg:pt-0">
              <span className="font-mono text-xs min-[375px]:text-[13px] min-[410px]:text-[14px] sm:text-sm uppercase tracking-[0.24em] text-[#55604e] font-semibold">
                what is dopamint?
              </span>
            </div>

            {/* Editorial Title (Responsive 2-line layout: House of / Intent-Based Agents) */}
            <div>
              <h2 className="text-[30px] min-[340px]:text-[33px] min-[360px]:text-[37px] min-[390px]:text-[41px] min-[420px]:text-[45px] min-[460px]:text-[48px] sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[70px] 2xl:text-[78px] tracking-tight leading-[1.06] text-[#55604e]">
                <span className="block font-serif font-normal text-[#55604e]">
                  House of
                </span>
                <IntentBaseHeadline />
              </h2>
              <p className="font-serif italic font-bold text-[15px] min-[375px]:text-[16px] min-[410px]:text-[17.5px] sm:text-lg md:text-xl text-[#7a382e] mt-1 sm:mt-2">
                Built on Base
              </p>
            </div>
          </div>

          {/* Block 3: Editorial Body Text + Badges (On mobile: white surface with rounded top corners at bottom of video) */}
          <div className="order-3 -mx-4 min-[390px]:-mx-6 sm:-mx-8 lg:mx-0 w-[calc(100%+2rem)] min-[390px]:w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] lg:w-full bg-[#ffffff] lg:bg-transparent rounded-t-[28px] min-[390px]:rounded-t-[32px] sm:rounded-t-[36px] lg:rounded-t-none px-4 min-[390px]:px-6 sm:px-8 lg:px-0 pt-7 min-[390px]:pt-8 sm:pt-10 lg:pt-0 pb-14 min-[390px]:pb-16 sm:pb-20 lg:pb-0 space-y-3.5 min-[390px]:space-y-4 sm:space-y-4.5 text-left z-20 mt-4 min-[390px]:mt-5 sm:mt-6 lg:mt-0 relative shadow-xs lg:shadow-none">
            {/* Editorial Body Text */}
            <div className="space-y-2.5 min-[390px]:space-y-3 sm:space-y-3.5 text-[15px] min-[375px]:text-[16px] min-[410px]:text-[17px] sm:text-base lg:text-[16.5px] text-[#3d4837] font-sans font-normal leading-relaxed max-w-xl">
              <p>
                There was a time you needed a different app for everything — one to trade, one to pay, one to plan. That era is over.
              </p>
              <p className="font-serif italic text-[17px] min-[375px]:text-[18.5px] min-[410px]:text-[20px] sm:text-xl lg:text-[19px] text-[#20291c] leading-snug">
                Now, you just ask <span className="font-serif italic font-bold text-[#20291c]">Dope</span>. It handles the rest.
              </p>
              <p>
                Dopamint is a network of agents running on the <span className="font-bold text-[#20291c]">Agent Harness</span>, with a continuous <span className="font-bold text-[#20291c]">Agent Loop</span> working behind the scenes. They reason, act, and transact.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 sm:pt-2">
              {['AiFi', 'Verifiability', 'x402'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 min-[390px]:px-3.5 min-[390px]:py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#f3f2e6]/70 lg:bg-white/80 backdrop-blur-sm border border-[#55604e]/25 text-[11px] min-[390px]:text-xs font-mono uppercase tracking-widest text-[#55604e] font-semibold select-none shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7a382e]/80" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Block 2: Chat Screen Video Placed in the Middle on Mobile, Right Column on Desktop */}
        <div className="order-2 -mx-4 min-[390px]:-mx-6 sm:-mx-8 lg:mx-0 w-[calc(100%+2rem)] min-[390px]:w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] lg:w-full lg:order-none lg:col-span-6 relative flex items-center justify-center lg:items-end lg:justify-end z-10 self-center lg:self-end mt-4 min-[390px]:mt-6 sm:mt-8 lg:mt-0 mb-2 sm:mb-4 lg:mb-0 overflow-visible">
          <div className="relative w-full max-w-[390px] min-[360px]:max-w-[420px] min-[390px]:max-w-[460px] min-[430px]:max-w-[500px] sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-[112%] xl:w-[120%] 2xl:w-[126%] min-[1700px]:w-[150%] min-[1880px]:w-[165%] lg:-mr-[1.5vw] xl:-mr-[3vw] 2xl:-mr-[4vw] min-[1700px]:-mr-[9vw] min-[1880px]:-mr-[13vw] translate-x-4 min-[390px]:translate-x-6 sm:translate-x-8 lg:translate-x-3 min-[1150px]:translate-x-6 xl:translate-x-12 min-[1400px]:translate-x-13 2xl:translate-x-14 min-[1700px]:translate-x-44 min-[1880px]:translate-x-64 flex items-center justify-center lg:items-end lg:justify-end border-0 shadow-none mx-auto lg:mx-0">
            <video
              key={isDesktop ? 'desktop' : 'mobile'}
              ref={videoRef}
              src={isDesktop ? chatScreenMp4 : chatScreenMobileMp4}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              className="w-full h-auto max-w-full max-h-[78vh] min-[390px]:max-h-[82vh] min-[430px]:max-h-[86vh] sm:max-h-[88vh] md:max-h-[90vh] lg:max-h-[86vh] xl:max-h-[90vh] min-[1700px]:max-h-[98vh] min-[1880px]:max-h-[102vh] object-contain object-center lg:object-bottom scale-[1.12] min-[360px]:scale-[1.15] min-[390px]:scale-[1.18] sm:scale-[1.10] lg:scale-[0.96] xl:scale-[0.98] min-[1700px]:scale-[1.16] min-[1880px]:scale-[1.24] origin-top lg:origin-bottom-right transition-transform duration-500 block pointer-events-none border-0 outline-none shadow-none drop-shadow-none"
            />
          </div>
        </div>

      </div>

      {/* Plain solid div with 3rd section color (#ffffff) and distinct rounded top corners (Desktop only; on mobile the rounded transition is at the bottom of the video) */}
      <div className="hidden lg:block absolute inset-x-0 -bottom-[1px] h-6 sm:h-8 md:h-10 lg:h-12 bg-[#ffffff] rounded-t-[28px] sm:rounded-t-[36px] lg:rounded-t-[44px] pointer-events-none z-30" />
    </div>
  );
}

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
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
    const val = promptValue.trim();
    navigate('/waitlist', { state: { prompt: val } });
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
        key={isDesktop ? 'hero-desktop' : 'hero-mobile'}
        videoFront={isDesktop ? heroBgVidMp4 : heroBgVidMobMp4}
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
