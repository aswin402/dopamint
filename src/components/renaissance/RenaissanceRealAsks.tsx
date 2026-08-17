import React, { useState } from 'react';
import { REAL_ASKS } from '../../data/dopamint';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export const RenaissanceRealAsks: React.FC = () => {
  const [selectedAsk, setSelectedAsk] = useState<string>(REAL_ASKS[1]);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Kicker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-6 pb-2 border-b border-neutral-300">
        <span>REAL ASKS, REAL PEOPLE</span>
        <span className="font-serif italic text-base text-black">Proof of Agency</span>
      </div>

      {/* Title */}
      <div className="max-w-3xl mb-12 text-left">
        <h2 className="text-3xl sm:text-5xl font-black text-display text-black tracking-tight leading-[0.98]">
          This is what people <br />
          <span className="font-serif italic font-normal text-black">
            actually ask for.
          </span>
        </h2>
      </div>

      {/* Interactive Asks Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {REAL_ASKS.map((ask, idx) => {
          const isSelected = selectedAsk === ask;
          return (
            <button
              key={idx}
              onClick={() => setSelectedAsk(ask)}
              className={`p-4 rounded-2xl text-left text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer flex items-center justify-between ${
                isSelected
                  ? 'bg-black text-white shadow-lg ring-2 ring-black'
                  : 'parchment-card text-neutral-800 hover:bg-white'
              }`}
            >
              <span>“{ask}”</span>
              <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
            </button>
          );
        })}
      </div>

      {/* Featured Quote Highlight Card */}
      <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 text-center shadow-xl space-y-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
          FEATURED AGENT WORKFLOW
        </div>
        <blockquote className="text-2xl sm:text-4xl font-serif italic text-white max-w-2xl mx-auto leading-relaxed">
          “{selectedAsk}”
        </blockquote>
        <div className="text-xs font-mono text-neutral-400">
          Parsed into scoped sub-tasks · Executed inside user policy bounds
        </div>
      </div>

    </section>
  );
};
