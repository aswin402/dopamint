import React, { useState } from 'react';
import { Database, ShieldCheck, Trash2, CheckCircle2, Clock, Eye, AlertCircle } from 'lucide-react';

export const MemoryProvenance: React.FC = () => {
  const [isRevoked, setIsRevoked] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            <span>MEMORY PROVENANCE & REVOCATION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Memory should be evidence, <br />
            <span className="text-emerald-600">not truth.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Long-term memory makes an agent actually useful — and yeah, it's also an attack surface. Every memory carries where it came from and how sure the agent really is.
          </p>
        </div>

        {/* Interactive Memory Card Demonstration */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className={`p-6 sm:p-8 rounded-3xl border-2 transition-all shadow-lg ${
            isRevoked
              ? 'bg-slate-100 border-slate-300 opacity-60'
              : 'bg-white border-emerald-500 ring-2 ring-emerald-400/20'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                INSPECT MEMORY ATOM #M-409
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                isRevoked
                  ? 'bg-red-100 text-red-700'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                {isRevoked ? 'REVOKED ✕' : 'STATUS: VERIFIED ✓'}
              </span>
            </div>

            {/* Memory Quote */}
            <div className="py-6">
              <blockquote className={`text-xl sm:text-2xl font-bold tracking-tight ${
                isRevoked ? 'line-through text-slate-400' : 'text-slate-950'
              }`}>
                "John prefers vegetarian restaurants."
              </blockquote>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 font-mono text-xs mb-4">
              <div>
                <div className="text-[10px] text-slate-400">Source</div>
                <div className="font-bold text-slate-900 mt-0.5">Conversation #182</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Captured</div>
                <div className="font-bold text-slate-900 mt-0.5">2026-08-14</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Confidence</div>
                <div className="font-bold text-emerald-600 mt-0.5">0.94</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Integrity</div>
                <div className="font-bold text-slate-900 mt-0.5">SHA-256 Valid</div>
              </div>
            </div>

            {/* Revoke Button */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-sans">
                {isRevoked ? 'Memory purged from agent context.' : 'Click to instantly delete and test revocation.'}
              </span>
              <button
                onClick={() => setIsRevoked(!isRevoked)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${
                  isRevoked
                    ? 'bg-slate-900 text-white'
                    : 'bg-red-50 hover:bg-red-100 text-red-700 border border-red-200'
                }`}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isRevoked ? 'Restore Memory' : 'Revoke Memory'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* 6 Dimensions of Memory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600">01 SOURCE</div>
            <h3 className="text-base font-extrabold text-slate-950 font-sans">Where it came from</h3>
            <p className="text-xs text-slate-600 font-normal">A message, a document, or a confirmed action.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600">02 TIMESTAMP</div>
            <h3 className="text-base font-extrabold text-slate-950 font-sans">When it was captured</h3>
            <p className="text-xs text-slate-600 font-normal">So stale, outdated context can be discounted.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600">03 CONFIDENCE</div>
            <h3 className="text-base font-extrabold text-slate-950 font-sans">Probabilistic score</h3>
            <p className="text-xs text-slate-600 font-normal">How sure the agent is, not treated as a binary fact.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600">04 PROVENANCE</div>
            <h3 className="text-base font-extrabold text-slate-950 font-sans">Audit trail</h3>
            <p className="text-xs text-slate-600 font-normal">The chain of events that led to this memory being stored.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600">05 INTEGRITY</div>
            <h3 className="text-base font-extrabold text-slate-950 font-sans">Tamper proof</h3>
            <p className="text-xs text-slate-600 font-normal">Whether it has been altered since it was captured.</p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-600">06 REVOCATION</div>
            <h3 className="text-base font-extrabold text-slate-950 font-sans">Instant removal</h3>
            <p className="text-xs text-slate-600 font-normal">You can remove it, and the agent stops acting on it immediately.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
