import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap, Lock, RefreshCw, Play, Volume2 } from 'lucide-react';
import { VideoHeroFrame } from './ui/VideoHeroFrame';
import { MagneticButton } from './ui/MagneticButton';
import { BorderBeam } from './ui/BorderBeam';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-hidden tech-dot-bg bg-white">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] hero-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Text & Value Prop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Big Display Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DopaMint — built in SF, agents that actually go</span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-display text-slate-950 tracking-tighter leading-[0.94]">
              Give your AI <br />
              some agency. <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Not a blank check.
              </span>
            </h1>

            {/* Concise Sub-line */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
              A whole squad of autonomous agents — trading, payments, travel, research, you name it — ready to actually get stuff done. Every one of them boxed in by a trust layer they can't sneak past.
            </p>

            {/* Magnetic CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a href="#agents">
                <MagneticButton className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm sm:text-base font-black text-white bg-slate-950 hover:bg-emerald-600 active:bg-emerald-700 shadow-xl hover:shadow-2xl transition-all transform flex items-center justify-center gap-2 group cursor-pointer">
                  <span>Meet the Agents</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </a>

              <a href="#trust">
                <MagneticButton className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>See how it works</span>
                </MagneticButton>
              </a>
            </div>

            {/* 4 Trust Badges */}
            <div className="pt-6 border-t border-slate-200 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Policy-scoped</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Signed receipts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Revocable keys</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Built in SF</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Mobile Agent Interaction Mockup (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Smartphone Frame Container */}
            <div className="w-full max-w-sm rounded-[2.5rem] bg-slate-950 p-3.5 shadow-2xl border-4 border-slate-800 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              
              <BorderBeam size={200} duration={10} colorFrom="#10B981" colorTo="#06B6D4" />

              {/* Phone Speaker Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Canvas */}
              <div className="rounded-[2rem] bg-white overflow-hidden border border-slate-100 flex flex-col justify-between min-h-[480px]">
                
                {/* Phone Status Bar */}
                <div className="pt-3 px-5 pb-2 flex items-center justify-between text-[11px] font-mono font-bold text-slate-800 bg-slate-50/80 border-b border-slate-100">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <span className="text-emerald-600">●●●●</span>
                  </div>
                </div>

                {/* Agent Header */}
                <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                      S
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <span>DopaMint Sol</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">Trading agent · online</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Policy Active
                  </span>
                </div>

                {/* Chat Feed */}
                <div className="p-4 flex-1 space-y-3 font-sans text-xs">
                  {/* User Bubble */}
                  <div className="flex justify-end">
                    <div className="bg-slate-950 text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] leading-relaxed shadow-xs">
                      Swap 500 USDC to ETH when it drops under 3,400.
                    </div>
                  </div>

                  {/* Agent Bubble */}
                  <div className="flex justify-start">
                    <div className="bg-slate-100 text-slate-900 p-3 rounded-2xl rounded-tl-xs max-w-[85%] leading-relaxed border border-slate-200/70">
                      On it. Watching the market — won't blow past your limits though.
                    </div>
                  </div>

                  {/* Trigger Notification */}
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-center justify-between font-mono text-[11px]">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Zap className="w-3.5 h-3.5 text-amber-600" />
                      <span>Threshold hit</span>
                    </div>
                    <span className="font-extrabold text-amber-700">3,398.20</span>
                  </div>

                  {/* Verified Onchain Execution Receipt */}
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-1">
                    <div className="flex items-center justify-between font-bold text-xs">
                      <span className="text-emerald-800">Executed · verified onchain</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="text-[10px] font-mono text-emerald-700">
                      Swap 500 USDC → 0.1471 ETH · Base L2 · Receipt #8F72A
                    </div>
                  </div>
                </div>

                {/* Bottom Wallet Scope Card */}
                <div className="p-3.5 bg-slate-50 border-t border-slate-100 font-mono text-[11px] space-y-2">
                  <div className="flex items-center justify-between text-slate-500 font-semibold">
                    <span>Available</span>
                    <span className="text-slate-900 font-black text-xs font-mono">$1,240.00</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] text-slate-500 border-t border-slate-200/60">
                    <div>Daily limit: <span className="font-bold text-slate-900">$250</span></div>
                    <div>Per txn: <span className="font-bold text-slate-900">$100</span></div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Integrated Video Console Display */}
        <div className="max-w-5xl mx-auto pt-6">
          <div className="text-center mb-4">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              MULTI-AGENT VIDEO & EXECUTION THEATER
            </span>
          </div>
          <VideoHeroFrame />
        </div>

      </div>
    </section>
  );
};
