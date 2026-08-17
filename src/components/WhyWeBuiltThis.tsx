import React from 'react';
import { ArrowRight, Sparkles, AlertCircle, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

export const WhyWeBuiltThis: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
            <span>WHY WE BUILT THIS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Most AI just talks. <br />
            <span className="text-slate-400">That's it. That's the product.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            We are moving from chat-based assistants to goal-driven autonomous agents with verifiable real-world consequences.
          </p>
        </div>

        {/* Old World vs New World Interactive Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* Old World Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Old World // Zero Agency
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-mono font-bold">
                  Passive Assistant
                </span>
              </div>

              <div className="pt-6 space-y-3 font-mono text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span>01. User input</span>
                  <span className="font-bold text-slate-900">Prompt</span>
                </div>
                <div className="text-center text-slate-300">↓</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span>02. Processing</span>
                  <span className="font-bold text-slate-900">LLM Generation</span>
                </div>
                <div className="text-center text-slate-300">↓</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span>03. Final Output</span>
                  <span className="font-bold text-slate-400">Text Answer Only</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic">
              "No execution, no tools, no wallets. If you want something done, you still have to do it yourself."
            </p>
          </div>

          {/* New World Card */}
          <div className="p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-800 shadow-2xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  New World // DopaMint Agents
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                  Autonomous Action
                </span>
              </div>

              <div className="pt-6 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                  <span>01. User intent</span>
                  <span className="font-bold text-white">Goal & Limits</span>
                </div>
                <div className="text-center text-emerald-400 font-bold">↓</div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                  <span>02. Execution Engine</span>
                  <span className="font-bold text-emerald-400">Plan → Policy → Tools</span>
                </div>
                <div className="text-center text-emerald-400 font-bold">↓</div>
                <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 flex items-center justify-between text-emerald-200 font-bold">
                  <span>03. Consequence</span>
                  <span className="text-emerald-400">Payments · Bookings · Onchain</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bounded by cryptographic trust layers & signed receipts.</span>
            </div>
          </div>

        </div>

        {/* Big Impact Callout Banner */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm space-y-6">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
            "The second an agent can actually act, intelligence stops being the hard part. <span className="text-emerald-600">Trust is.</span>"
          </blockquote>

          {/* DopaMint Formula */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold text-slate-800">
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Intelligence</span>
            <span className="text-slate-400">+</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Memory</span>
            <span className="text-slate-400">+</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Tools</span>
            <span className="text-slate-400">+</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Identity</span>
            <span className="text-slate-400">+</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Permissions</span>
            <span className="text-slate-400">+</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">Verification</span>
            <span className="text-emerald-600 font-black">=</span>
            <span className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-extrabold shadow-sm">
              DopaMint
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
