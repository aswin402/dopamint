import React from 'react';
import { Wallet, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Award, FileCode2, Zap } from 'lucide-react';

export const AgentEconomy: React.FC = () => {
  const pillars = [
    {
      title: 'Identity',
      desc: 'Portable across surfaces — the agent\'s identity doesn\'t belong to one app.'
    },
    {
      title: 'Wallet',
      desc: 'Holds and moves value under policy, not on the model\'s word alone.'
    },
    {
      title: 'Reputation',
      desc: 'A track record of verified actions, not just claimed ones.'
    },
    {
      title: 'Capabilities',
      desc: 'An explicit, inspectable list of what this agent is allowed to do.'
    },
    {
      title: 'Payments',
      desc: 'Scoped, policy-bound, and independently verifiable.'
    },
    {
      title: 'Verifiable actions',
      desc: 'Anyone can check what happened without trusting DopaMint\'s word for it.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Wallet className="w-3.5 h-3.5 text-emerald-600" />
            <span>INTER-AGENT COMMERCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            The agent economy needs <br />
            <span className="text-emerald-600">agents with wallets.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Agents that can hold value, transact, and operate autonomously — with every step attributable and checkable.
          </p>
        </div>

        {/* Inter-Agent Coordination Diagram */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border-2 border-slate-800 shadow-2xl max-w-5xl mx-auto mb-16 space-y-8">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
            <span className="text-emerald-400 font-bold uppercase">AGENT-TO-AGENT SETTLEMENT PROTOCOL</span>
            <span className="text-slate-400">CRYPTOGRAPHIC INTENT GRAPH</span>
          </div>

          {/* 3 Agents Handoff Node */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center font-mono text-xs">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white mx-auto flex items-center justify-center font-bold text-sm">
                A
              </div>
              <div className="font-bold text-white">Agent A (Client)</div>
              <div className="text-[11px] text-slate-400">Initiates travel booking</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-emerald-400 font-bold text-xs">payment (x402) →</div>
              <div className="text-[10px] text-slate-400">← service output</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white mx-auto flex items-center justify-center font-bold text-sm">
                B
              </div>
              <div className="font-bold text-white">Agent B (Specialist)</div>
              <div className="text-[11px] text-slate-400">Verifies inventory & settles</div>
            </div>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-slate-800 font-mono text-[11px]">
            {['Identity', 'Authorization', 'Capability', 'Payment', 'Proof', 'Reputation'].map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-emerald-300 font-semibold">
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* 6 Economy Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 text-left space-y-2 shadow-xs">
              <h3 className="text-base font-extrabold text-slate-950 font-sans">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
