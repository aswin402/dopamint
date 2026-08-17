import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type1Button } from '../ui/Type1Button';
import { MetricProgressCard } from '../ui/MetricProgressCard';
import { ShieldCheck } from 'lucide-react';

import heroImg1 from '../../assets/herosectionimg1.png';
import heroImg2 from '../../assets/herosectionimg2.png';
import heroImg3 from '../../assets/herosectionimg3.png';
import heroImg4 from '../../assets/herosectionimg4.png';

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4];

export const RenaissanceHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 4-second automatic slideshow loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full flex flex-col justify-start select-none">
      
      {/* =========================================================================
          1. HERO IMAGE SLIDESHOW CANVAS (4s delay, smooth cross-fade transition)
          ========================================================================= */}
      <div className="relative w-full min-h-[60vh] sm:min-h-[75vh] lg:min-h-[90vh] xl:min-h-screen bg-black overflow-hidden shadow-2xl">
        
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

        {/* Slideshow Progress Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentImageIndex === idx
                  ? 'w-6 bg-white shadow-[0_0_8px_#ffffff]'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* =========================================================================
          2. SECOND SECTION: DopaMint Manifesto & Agency Core
          ========================================================================= */}
      <div id="manifesto" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 pb-16">
        
        {/* Kicker Pill & Subheader */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono mb-8 pb-4 border-b border-neutral-300">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="uppercase tracking-wider font-bold text-[11px] sm:text-xs">The Age of AiFi is upon us</span>
          </div>
          <div className="text-neutral-600 font-bold uppercase tracking-widest text-[10px] sm:text-[11px]">
            House of AI Agents
          </div>
        </div>

        {/* Center Editorial Manifesto Copy */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 my-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
              What is DopaMint?
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-display tracking-tight leading-[1.02] text-black">
              DopaMint is the home for AI agents <br />
              <span className="font-serif italic font-normal text-black">
                where agency meets control.
              </span>
            </h1>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto text-neutral-800">
            <p className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed text-black">
              DopaMint is the home for AI agents — where every agent gets a trust layer, a verifiability layer, and a control layer, so it can actually act on your behalf without you having to babysit it.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Your AI can mess up sometimes. That's why we built it a home where every single thing it does leaves proof you can check yourself. No “trust us,” no vibes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Type1Button
              href="#agents"
              className="!w-52 !h-12 shadow-lg"
            >
              Get the app
            </Type1Button>

            <Type1Button
              href="#evidence"
              className="!w-52 !h-12 shadow-lg"
            >
              Try iMessage
            </Type1Button>
          </div>

          {/* Specs Ribbon */}
          <div className="pt-8 border-t border-neutral-300 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-600">
            <div className="flex items-center gap-3 text-black font-bold">
              <span>Trust Layer</span>
              <span className="text-neutral-400">·</span>
              <span>Verifiability Layer</span>
              <span className="text-neutral-400">·</span>
              <span>Control Layer</span>
            </div>
            <div className="text-black font-bold tracking-wide">
              Built in San Francisco
            </div>
          </div>
        </div>

        {/* 3. Live iMessage Mockup (Dope) & Architecture Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-stretch w-full">
          
          {/* Left: Dope iMessage Phone */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-black p-4 shadow-2xl">
            <div className="rounded-[2rem] bg-white overflow-hidden border border-neutral-200 flex flex-col justify-between min-h-[440px]">
              
              {/* Header */}
              <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center text-xs">
                    D
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm">Dope</div>
                    <div className="text-[10px] text-neutral-400 font-mono">Today 9:41 AM</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-black font-bold border border-neutral-300">
                  iMessage
                </span>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 text-xs font-sans my-auto">
                <div className="flex justify-end">
                  <div className="bg-black text-white p-4 rounded-2xl rounded-tr-xs max-w-[85%] font-medium text-sm shadow-sm">
                    Swap 500 USDC to ETH if it dips under 3,400.
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>+ iMessage</span>
                <span className="text-[10px] text-neutral-400">9:41 AM · Delivered</span>
              </div>

            </div>
          </div>

          {/* Right: Control Layer Breakdown & Metric Progress */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="parchment-card p-6 sm:p-8 rounded-3xl space-y-3 text-left">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-600 uppercase font-bold">Control Layer</span>
                <ShieldCheck className="w-4 h-4 text-black" />
              </div>
              <h3 className="text-2xl font-black text-black">
                Zero Unchecked Agency
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                Every single agent action leaves cryptographic proof you can check yourself. Deterministic limits, zero hallucinations leaking funds.
              </p>
            </div>

            <MetricProgressCard
              title="Volume Cleared"
              value="$2,480,000"
              percentage="+20%"
              className="!max-w-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
};
