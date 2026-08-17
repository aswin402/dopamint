import React from 'react';
import { Type1Button } from '../ui/Type1Button';
import { MetricProgressCard } from '../ui/MetricProgressCard';
import { ShieldCheck } from 'lucide-react';
import heroBg from '../../assets/herosectionimg1.png';

export const RenaissanceHero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full flex flex-col justify-start select-none">
      
      {/* 1. True 100% Full-Width Edge-to-Edge Hero Banner Canvas */}
      <div className="relative w-full min-h-[85vh] sm:min-h-[92vh] lg:min-h-screen bg-black flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12 shadow-2xl overflow-hidden">
        
        {/* Full-Width Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-100 transition-transform duration-1000"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
        
        {/* Contrast Overlay Gradients for Perfect Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Top Kicker (Inside Responsive Max-Width Container) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-3 text-white text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white uppercase tracking-wider font-bold text-[11px] sm:text-xs">The Age of AiFi is upon us</span>
          </div>
          <div className="text-neutral-300 font-bold uppercase tracking-widest text-[10px] sm:text-[11px]">
            House of AI Agents
          </div>
        </div>

        {/* Center Hero Copy (Inside Responsive Max-Width Container) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto my-auto px-4 sm:px-8 text-center text-white space-y-6 sm:space-y-8 py-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-bold">
              What is DopaMint?
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-display tracking-tight leading-[1.02] text-white drop-shadow-lg">
              DopaMint is the home for AI agents <br />
              <span className="font-serif italic font-normal text-white">
                where agency meets control.
              </span>
            </h1>
          </div>

          <div className="space-y-3.5 max-w-2xl mx-auto text-neutral-200">
            <p className="text-sm sm:text-base lg:text-lg font-bold leading-relaxed text-white drop-shadow-sm">
              DopaMint is the home for AI agents — where every agent gets a trust layer, a verifiability layer, and a control layer, so it can actually act on your behalf without you having to babysit it.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
              Your AI can mess up sometimes. That's why we built it a home where every single thing it does leaves proof you can check yourself. No “trust us,” no vibes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Type1Button
              href="#agents"
              variant="light"
              className="!w-52 !h-12 shadow-xl"
            >
              Get the app
            </Type1Button>

            <Type1Button
              href="#evidence"
              variant="light"
              className="!w-52 !h-12 !border-white/50 opacity-90 hover:opacity-100 shadow-xl"
            >
              Try iMessage
            </Type1Button>
          </div>
        </div>

        {/* Bottom Specs Ribbon (Inside Responsive Max-Width Container) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-neutral-300">
          <div className="flex items-center gap-3 text-white font-medium">
            <span>Trust Layer</span>
            <span className="text-neutral-500">·</span>
            <span>Verifiability Layer</span>
            <span className="text-neutral-500">·</span>
            <span>Control Layer</span>
          </div>
          <div className="text-white font-bold tracking-wide">
            Built in San Francisco
          </div>
        </div>

      </div>

      {/* 2. Live iMessage Mockup (Dope) & Architecture Highlights */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
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
