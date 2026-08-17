import React from 'react';
import { Type1Button } from '../ui/Type1Button';
import { CheckCircle2, ShieldAlert, ShieldCheck } from 'lucide-react';
import { MetricProgressCard } from '../ui/MetricProgressCard';

export const RenaissanceHero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-start select-none">
      
      {/* 1. Neoclassical Full-Bleed Hero Canvas */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-black min-h-[580px] sm:min-h-[660px] flex flex-col justify-between p-6 sm:p-12 shadow-xl border border-black/10">
        
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/avatars/hero-trio.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/80" />

        {/* Top Tag */}
        <div className="relative z-10 flex items-center justify-between text-white text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white uppercase tracking-wider font-bold">The Age of AI</span>
          </div>
        </div>

        {/* Center Hero Copy */}
        <div className="relative z-10 max-w-2xl mx-auto my-auto text-center text-white space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display tracking-tight leading-[0.95] text-white">
            Your AI can f**k up <br />
            <span className="font-serif italic font-normal text-white">
              sometimes.
            </span>
          </h1>

          <div className="space-y-3 max-w-lg mx-auto">
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              That's why we built it a “verifiable” home.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
              DopaMint gives your agents somewhere to actually live and work — where every single thing they do leaves proof you can check yourself. No “trust us,” no vibes.
            </p>
          </div>

          {/* CTAs using Type1Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Type1Button
              href="#agents"
              variant="light"
              className="!w-52 !h-12"
            >
              Meet the agents
            </Type1Button>

            <Type1Button
              href="#authority"
              variant="light"
              className="!w-52 !h-12 !border-white/40 opacity-90 hover:opacity-100"
            >
              See how it works
            </Type1Button>
          </div>
        </div>

        {/* Bottom Specs Ribbon */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-neutral-300">
          <div className="flex items-center gap-3 text-white">
            <span>DopaMint OS</span>
            <span className="text-neutral-500">·</span>
            <span>Verifiable Runtime</span>
            <span className="text-neutral-500">·</span>
            <span>Deterministic Receipts</span>
          </div>
          <div className="text-white font-bold">
            Built in San Francisco
          </div>
        </div>

      </div>

      {/* 2. Live iMessage Mockup (Sol) & Problem / Solution Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16 items-stretch">
        
        {/* Left: Sol iMessage Phone */}
        <div className="lg:col-span-7 rounded-[2.5rem] bg-black p-4 shadow-2xl">
          <div className="rounded-[2rem] bg-white overflow-hidden border border-neutral-200 flex flex-col justify-between min-h-[440px]">
            
            {/* Header */}
            <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center text-xs">
                  S
                </div>
                <div>
                  <div className="font-bold text-black text-sm">Sol</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Today 9:41 AM</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-black font-bold border border-neutral-300">
                iMessage
              </span>
            </div>

            {/* Chat Messages */}
            <div className="p-5 space-y-3.5 text-xs font-sans">
              <div className="flex justify-end">
                <div className="bg-black text-white p-3.5 rounded-2xl rounded-tr-xs max-w-[85%] font-medium">
                  Swap 500 USDC to ETH if it dips under 3,400.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-neutral-100 text-black p-3.5 rounded-2xl rounded-tl-xs max-w-[85%]">
                  On it. I'll watch it and stay inside your $250/day cap.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-300 text-black font-mono text-[11px] space-y-1">
                <div className="font-bold">Hit 3,398.20 — done. Receipt's signed and logged ✓</div>
                <div className="text-[10px] text-neutral-500">Base L2 · Route: 0x48a…210c</div>
              </div>

              <div className="flex justify-end">
                <div className="bg-black text-white px-4 py-2 rounded-2xl rounded-tr-xs text-xs font-medium">
                  nice
                </div>
              </div>

              <div className="text-right text-[10px] font-mono text-neutral-400">
                Delivered
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-neutral-50 border-t border-neutral-200 text-center text-[10px] text-neutral-400 font-mono">
              + iMessage Native
            </div>

          </div>
        </div>

        {/* Right: The Problem vs What We Do */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* The Problem */}
          <div className="parchment-card p-6 sm:p-8 rounded-3xl space-y-3 text-left">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-500 uppercase font-bold">The problem</span>
              <ShieldAlert className="w-4 h-4 text-black" />
            </div>
            <h3 className="text-2xl font-black text-black">
              Shared Keys
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              Giving an AI blanket API keys or unrestricted wallet access means one hallucination drains your account or compromises your systems.
            </p>
          </div>

          {/* DopaMint: What We Do */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black text-white shadow-xl space-y-3 text-left">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400 uppercase font-bold">DopaMint · What we do</span>
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Scoped Access
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Every agent operates inside deterministic, per-action and per-day caps. Nothing executes without policy verification and cryptographic receipts.
            </p>
          </div>

          {/* Animated Metric Progress Card */}
          <MetricProgressCard
            title="Volume Cleared"
            value="$2,480,000"
            percentage="+20%"
            className="!max-w-full"
          />

        </div>

      </div>

    </section>
  );
};
