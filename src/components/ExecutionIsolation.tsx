import React from 'react';
import { ShieldCheck, Lock, Server, Cpu, Key, Database, ArrowRight } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { BorderBeam } from './ui/BorderBeam';
import { NeuralCanvas } from './ui/NeuralCanvas';

export const ExecutionIsolation: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>RUNTIME ISOLATION & SCOPE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Your agent shouldn't live in <br />
            <span className="text-emerald-600">someone else's sandbox.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Everything your agent knows or can touch stays in its own lane — not some shared server it's crashing on.
          </p>
        </div>

        {/* Scope Diagram Container */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border-2 border-slate-800 shadow-2xl mb-16 max-w-5xl mx-auto space-y-8 relative overflow-hidden">
          
          <BorderBeam size={280} duration={14} colorFrom="#10B981" colorTo="#06B6D4" />

          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
            <span className="text-emerald-400 font-bold uppercase">DopaMint Agent — Internal Scope</span>
            <span className="text-slate-400">ISOLATED CONTAINER RUNTIME</span>
          </div>

          {/* Scope Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center font-mono text-xs">
            {['Model', 'System Prompt', 'Memory', 'Tool Registry', 'Credentials', 'Policies'].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 font-bold shadow-sm hover:border-emerald-500 transition-colors">
                {item}
              </div>
            ))}
          </div>

          {/* Big Trust Boundary Wall */}
          <div className="py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 border-2 border-emerald-500/80 text-center font-mono text-xs font-extrabold text-emerald-300 tracking-widest uppercase shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            🔒 TRUST BOUNDARY — STRICT POLICY INTERCEPTOR
          </div>

          {/* External Access */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="font-bold text-white">iMessage & SMS</span>
              <div className="text-[10px] text-slate-500 mt-0.5">Linq Native Rail</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="font-bold text-white">External APIs</span>
              <div className="text-[10px] text-slate-500 mt-0.5">Scoped OAuth Tokens</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="font-bold text-white">Web3 & Onchain</span>
              <div className="text-[10px] text-slate-500 mt-0.5">MPC Policy Wallets</div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid with SpotlightCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          <SpotlightCard className="p-6 text-left space-y-2">
            <div className="text-base font-black text-slate-950 font-sans">
              Scoped
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Each credential is issued for one capability, one agent, one context — never a blanket key.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 text-left space-y-2">
            <div className="text-base font-black text-slate-950 font-sans">
              Isolated
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              The agent's memory and tool access live inside its own runtime, not a shared pool across tenants.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 text-left space-y-2">
            <div className="text-base font-black text-slate-950 font-sans">
              Revocable
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Any credential can be pulled instantly. Revocation doesn't wait for a code deploy.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 text-left space-y-2">
            <div className="text-base font-black text-slate-950 font-sans">
              Never over-exposed
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              The model sees what a task requires — not the full set of keys it could theoretically use.
            </p>
          </SpotlightCard>

        </div>

        {/* Bottom Specs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-10 text-xs font-mono font-bold text-slate-600">
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Scoped credentials</span>
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Capability tokens</span>
          <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Isolated runtime</span>
          <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
            Confidential execution (TEE) — planned
          </span>
        </div>

      </div>
    </section>
  );
};
