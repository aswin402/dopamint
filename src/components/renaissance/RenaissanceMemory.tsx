import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

export const RenaissanceMemory: React.FC = () => {
  const [isRevoked, setIsRevoked] = useState(false);

  return (
    <section id="memory" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER VII // MEMORY PROVENANCE</span>
        <span className="font-serif italic text-base text-black">VII</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Memory should be evidence, <br />
          <span className="font-serif italic font-normal text-black">
            not truth.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Long-term memory makes an agent actually useful — and yeah, it's also an attack surface. Every memory carries where it came from and how sure the agent really is.
        </p>
      </div>

      {/* Inspectable Memory Atom Card */}
      <div className="max-w-3xl mb-16">
        <div className={`p-8 rounded-3xl transition-all ${
          isRevoked
            ? 'parchment-card opacity-60'
            : 'bg-white shadow-xl ring-2 ring-black'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs font-mono">
            <span className="text-neutral-500 uppercase font-bold">INSPECT MEMORY ATOM #M-409</span>
            <span className={`px-2.5 py-0.5 rounded-full font-bold ${
              isRevoked ? 'bg-neutral-200 text-black' : 'bg-neutral-100 text-black border border-neutral-300'
            }`}>
              {isRevoked ? 'REVOKED ✕' : 'STATUS: VERIFIED ✓'}
            </span>
          </div>

          <blockquote className={`py-6 font-serif italic text-2xl ${
            isRevoked ? 'line-through text-neutral-400' : 'text-black'
          }`}>
            "John prefers vegetarian restaurants."
          </blockquote>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 font-mono text-xs mb-4">
            <div>
              <div className="text-[10px] text-neutral-400">Source</div>
              <div className="font-bold text-black mt-0.5">Conversation #182</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">Captured</div>
              <div className="font-bold text-black mt-0.5">2026-08-14</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">Confidence</div>
              <div className="font-bold text-black mt-0.5">0.94</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">Integrity</div>
              <div className="font-bold text-black mt-0.5">Verified SHA-256</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-neutral-500 font-sans">
              {isRevoked ? 'Memory purged from agent context.' : 'Click to test immediate revocation.'}
            </span>
            <button
              onClick={() => setIsRevoked(!isRevoked)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                isRevoked
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300'
              }`}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{isRevoked ? 'Restore Memory' : 'Revoke Memory'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 Dimensions of Memory Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="parchment-card p-6 rounded-3xl text-left space-y-1">
          <div className="text-xs font-mono font-bold text-black">01 SOURCE</div>
          <h3 className="text-base font-extrabold text-black">Where it came from</h3>
          <p className="text-xs text-neutral-600">A message, a document, or a confirmed action.</p>
        </div>

        <div className="parchment-card p-6 rounded-3xl text-left space-y-1">
          <div className="text-xs font-mono font-bold text-black">02 TIMESTAMP</div>
          <h3 className="text-base font-extrabold text-black">When it was captured</h3>
          <p className="text-xs text-neutral-600">So stale, outdated context can be discounted.</p>
        </div>

        <div className="parchment-card p-6 rounded-3xl text-left space-y-1">
          <div className="text-xs font-mono font-bold text-black">03 CONFIDENCE</div>
          <h3 className="text-base font-extrabold text-black">Probabilistic score</h3>
          <p className="text-xs text-neutral-600">How sure the agent is, not treated as a binary fact.</p>
        </div>

        <div className="parchment-card p-6 rounded-3xl text-left space-y-1">
          <div className="text-xs font-mono font-bold text-black">04 PROVENANCE</div>
          <h3 className="text-base font-extrabold text-black">Audit trail</h3>
          <p className="text-xs text-neutral-600">The chain that led to this memory being stored.</p>
        </div>

        <div className="parchment-card p-6 rounded-3xl text-left space-y-1">
          <div className="text-xs font-mono font-bold text-black">05 INTEGRITY</div>
          <h3 className="text-base font-extrabold text-black">Tamper proof</h3>
          <p className="text-xs text-neutral-600">Whether it has been altered since it was captured.</p>
        </div>

        <div className="parchment-card p-6 rounded-3xl text-left space-y-1">
          <div className="text-xs font-mono font-bold text-black">06 REVOCATION</div>
          <h3 className="text-base font-extrabold text-black">Instant removal</h3>
          <p className="text-xs text-neutral-600">You can remove it, and the agent stops acting immediately.</p>
        </div>
      </div>

    </section>
  );
};
