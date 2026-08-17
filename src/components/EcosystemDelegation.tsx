import React from 'react';
import { ECOSYSTEM_INTEGRATIONS } from '../data/dopamint';
import { Globe, ArrowRight, ShieldCheck, CheckCircle2, Zap, Share2 } from 'lucide-react';

export const EcosystemDelegation: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>GLOBAL CONNECTIVITY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Any app. Any exchange. <br />
            <span className="text-emerald-600">One agent.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Your agents plug into the places you already live — including wherever your money already lives.
          </p>
        </div>

        {/* 4 Category Pill Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          
          {/* 1. Communication */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Communication</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {ECOSYSTEM_INTEGRATIONS.communication.map((item, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Exchanges & Wallets */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Exchanges & Wallets</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {ECOSYSTEM_INTEGRATIONS.exchanges.map((item, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Payments */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Payments</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {ECOSYSTEM_INTEGRATIONS.payments.map((item, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Work & Life */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Work & Life</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {ECOSYSTEM_INTEGRATIONS.work.map((item, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Delegation Engine Deep Dive Card */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border-2 border-slate-800 shadow-2xl max-w-5xl mx-auto space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold uppercase">
              <Share2 className="w-3.5 h-3.5" />
              <span>Multi-Agent Delegation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Not every task belongs to one agent.
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              DopaMint can hand off a task to another agent — but that handoff goes through the exact same trust layer as anything else it does.
            </p>
          </div>

          {/* Delegation Flow Diagram */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
              <span className="font-bold text-white">DopaMint Main Router</span>
              <span className="text-slate-500">→</span>
              <span className="text-amber-400 font-bold">Ada (Travel)</span>
              <span className="text-slate-500">·</span>
              <span className="text-indigo-400 font-bold">Sol (Trading)</span>
              <span className="text-slate-500">·</span>
              <span className="text-cyan-400 font-bold">Iris (Onchain)</span>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/40 text-emerald-300 space-y-1">
              <div className="font-bold">↓ TRUST LAYER INTERCEPTOR ↓</div>
              <div className="text-[11px] text-slate-400">Agent A: "Can Agent B perform this action on behalf of user?"</div>
              <div className="text-[11px] text-slate-300 font-bold pt-1">
                ✓ Identity verification · ✓ Capability verification · ✓ Policy verification → Execute → Receipt
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
