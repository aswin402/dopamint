import React from 'react';
import { INVESTORS } from '../data/dopamint';
import { Sparkles, ShieldCheck, CheckCircle2, TrendingUp, Zap, Clock, DollarSign } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { CountUp } from './ui/CountUp';

export const StatsBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>WHAT THE AGENTS HAVE DONE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-display text-slate-950 tracking-tight">
            Real work, not a demo.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Continuous execution across trading, payments, travel booking, and deep research under cryptographic policy bounds.
          </p>
        </div>

        {/* 4 Big Metrics Grid with Spotlight & CountUp */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          
          <SpotlightCard className="p-6 sm:p-8 space-y-2 hover:border-emerald-400">
            <div className="text-3xl sm:text-5xl font-black text-slate-950 font-mono tracking-tight">
              <CountUp end={48200} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase font-mono tracking-wider">
              Hours saved
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 sm:p-8 space-y-2 hover:border-emerald-400">
            <div className="text-3xl sm:text-5xl font-black text-slate-950 font-mono tracking-tight">
              <CountUp end={128400} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase font-mono tracking-wider">
              Tasks completed
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 sm:p-8 space-y-2 hover:border-emerald-400">
            <div className="text-3xl sm:text-5xl font-black text-emerald-600 font-mono tracking-tight">
              <CountUp end={2.4} prefix="$" suffix="M" decimals={1} />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase font-mono tracking-wider">
              Value moved
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 sm:p-8 space-y-2 hover:border-emerald-400">
            <div className="text-3xl sm:text-5xl font-black text-slate-950 font-mono tracking-tight">
              <CountUp end={99.8} suffix="%" decimals={1} />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase font-mono tracking-wider">
              Success rate
            </div>
          </SpotlightCard>

        </div>

        {/* Backed By Investors Ribbon */}
        <div className="pt-8 border-t border-slate-200/80 text-center">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">
            BACKED BY LEADING VENTURE INVESTORS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base font-extrabold text-slate-800">
            {INVESTORS.map((inv, idx) => (
              <span key={idx} className="hover:text-emerald-600 transition-colors cursor-default">
                {inv.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
