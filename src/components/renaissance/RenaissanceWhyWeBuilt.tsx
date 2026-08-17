import React from 'react';
import { INVESTORS } from '../../data/dopamint';
import { CheckCircle2 } from 'lucide-react';
import { CountUp } from '../ui/CountUp';

export const RenaissanceWhyWeBuilt: React.FC = () => {
  return (
    <section id="why" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER II // ORIGIN & FOUNDATION</span>
        <span className="font-serif italic text-base text-black">II</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Most AI just talks. <br />
          <span className="font-serif italic font-normal text-black">
            That's it. That's the product.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          The second an agent can actually act, intelligence stops being the hard part. Trust is.
        </p>
      </div>

      {/* 2-Column Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Old World Card */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-300 text-xs font-mono">
              <span className="text-neutral-500 uppercase font-bold">Old world — assistants</span>
              <span className="text-neutral-400">Zero Agency</span>
            </div>

            <div className="pt-6 space-y-3 font-mono text-xs text-neutral-700">
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-center justify-between">
                <span>01. Input</span>
                <span className="font-bold text-black">Prompt</span>
              </div>
              <div className="text-center text-neutral-400">↓</div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-center justify-between">
                <span>02. Processing</span>
                <span className="font-bold text-black">LLM Generation</span>
              </div>
              <div className="text-center text-neutral-400">↓</div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-center justify-between">
                <span>03. Consequence</span>
                <span className="font-bold text-neutral-400">Text Answer Only</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-500 italic">
            "No execution, no tools, no wallets. If you want something done, you still have to do it yourself."
          </p>
        </div>

        {/* New World Card */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-white uppercase font-bold">New world — agents</span>
              <span className="text-neutral-300 font-bold">DopaMint Native</span>
            </div>

            <div className="pt-6 space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-neutral-300">
                <span>01. User Intent</span>
                <span className="font-bold text-white">Goal & Limits</span>
              </div>
              <div className="text-center text-white font-bold">↓</div>
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-neutral-300">
                <span>02. Execution</span>
                <span className="font-bold text-white">Agent → Plan → Tools</span>
              </div>
              <div className="text-center text-white font-bold">↓</div>
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-between text-white font-bold">
                <span>03. Real World</span>
                <span className="text-white">Payments · Messages · Onchain</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span>Every action boxed in by a verifiable trust boundary.</span>
          </div>
        </div>

      </div>

      {/* DopaMint Formula Banner */}
      <div className="parchment-card p-6 sm:p-8 rounded-3xl text-center mb-16 space-y-4">
        <blockquote className="font-serif italic text-xl sm:text-2xl text-black">
          "Intelligence + Memory + Tools + Identity + Permissions + Verification = <span className="font-sans font-black not-italic text-black">DopaMint</span>"
        </blockquote>
      </div>

      {/* Track Record Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="parchment-card p-6 rounded-3xl space-y-1 text-left">
          <div className="text-3xl sm:text-4xl font-black text-black font-mono">
            <CountUp end={48200} suffix="+" />
          </div>
          <div className="text-xs font-mono font-bold text-neutral-500 uppercase">
            Hours saved
          </div>
        </div>

        <div className="parchment-card p-6 rounded-3xl space-y-1 text-left">
          <div className="text-3xl sm:text-4xl font-black text-black font-mono">
            <CountUp end={128400} suffix="+" />
          </div>
          <div className="text-xs font-mono font-bold text-neutral-500 uppercase">
            Tasks completed
          </div>
        </div>

        <div className="parchment-card p-6 rounded-3xl space-y-1 text-left">
          <div className="text-3xl sm:text-4xl font-black text-black font-mono">
            <CountUp end={2.4} prefix="$" suffix="M" decimals={1} />
          </div>
          <div className="text-xs font-mono font-bold text-neutral-500 uppercase">
            Value moved
          </div>
        </div>

        <div className="parchment-card p-6 rounded-3xl space-y-1 text-left">
          <div className="text-3xl sm:text-4xl font-black text-black font-mono">
            <CountUp end={99.8} suffix="%" decimals={1} />
          </div>
          <div className="text-xs font-mono font-bold text-neutral-500 uppercase">
            Success rate
          </div>
        </div>
      </div>

      {/* Backed By Investors List */}
      <div className="pt-6 border-t border-neutral-300 text-center">
        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-4">
          BACKED BY VENTURE INVESTORS
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-neutral-800">
          {INVESTORS.map((inv, idx) => (
            <span key={idx}>{inv.name}</span>
          ))}
        </div>
      </div>

    </section>
  );
};
