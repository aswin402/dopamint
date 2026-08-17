import React from 'react';
import { PRINCIPLES } from '../data/dopamint';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>OPERATING CREED</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Five rules for <br />
            <span className="text-emerald-600">agents we trust.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Deterministic governance rules built into the runtime before any LLM is given access to tools.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {PRINCIPLES.map((rule) => (
            <div
              key={rule.num}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-3 hover:border-emerald-400 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="text-sm font-mono font-extrabold text-emerald-600">
                {rule.num}
              </div>
              <h3 className="text-xl font-extrabold text-slate-950 font-sans tracking-tight">
                {rule.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {rule.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Production Disclaimer */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border-2 border-slate-800 text-left space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                Transparency Note
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-normal">
                Not every mechanism above is fully hardened in production today. Where it isn't, we label it — see "planned" and "prototype" markers throughout.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 font-bold">
              Production-ready SF Release
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
