import React, { useState } from 'react';
import { INITIAL_HASH_CHAIN } from '../data/dopamint';
import type { HashBlock } from '../data/dopamint';
import { CheckCircle2, ShieldCheck, AlertTriangle, RefreshCw, FileText, Hash, Link as LinkIcon } from 'lucide-react';

export const EvidenceReceipts: React.FC = () => {
  const [chain, setChain] = useState<HashBlock[]>(INITIAL_HASH_CHAIN);
  const [tamperedIndex, setTamperedIndex] = useState<number | null>(null);

  const simulateTamper = (index: number) => {
    if (tamperedIndex === index) {
      // Reset
      setChain(INITIAL_HASH_CHAIN);
      setTamperedIndex(null);
    } else {
      const newChain = [...INITIAL_HASH_CHAIN];
      newChain[index] = {
        ...newChain[index],
        hash: '0xBAD0…9999',
        isTampered: true,
      };
      setChain(newChain);
      setTamperedIndex(index);
    }
  };

  return (
    <section id="proof" className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Hash className="w-3.5 h-3.5 text-emerald-600" />
            <span>CRYPTOGRAPHIC EVIDENCE & RECEIPT LOGS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Autonomy without evidence <br />
            <span className="text-emerald-600">is just a black box.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Every consequential action produces a receipt — and every receipt links to the one before it, so nobody's quietly rewriting history.
          </p>
        </div>

        {/* 2-Column Proof Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch mb-12">
          
          {/* Action Receipt Card */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Action Receipt #8F72A
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                  Verified ✓
                </span>
              </div>

              <div className="pt-4 space-y-2.5 font-mono text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Agent:</span>
                  <span className="font-bold text-slate-900">dopamint / personal-agent-v0.4</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Task:</span>
                  <span className="font-bold text-slate-900">Book dinner for Friday</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Capability:</span>
                  <span className="font-bold text-slate-900">booking.create</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Policy:</span>
                  <span className="font-bold text-slate-900">travel-policy-v3</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Authorization:</span>
                  <span className="font-bold text-emerald-600">Approved</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Execution:</span>
                  <span className="font-bold text-slate-900">Successful</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">External ref:</span>
                  <span className="font-bold text-slate-900">reservation_8F72A</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Receipt hash:</span>
                  <span className="font-bold text-emerald-700">0x8a91…72bd</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-500">
              Deterministic signature backed by RSA-4096 ephemeral key.
            </div>
          </div>

          {/* Tamper-Evident Hash Chain Simulation */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-2 border-slate-800 space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-emerald-400 font-bold uppercase">Tamper-evident action log</span>
                <span className="text-slate-400">Click a block to simulate edit</span>
              </div>

              {/* Chain Blocks */}
              <div className="pt-6 space-y-3 font-mono text-xs">
                {chain.map((block, idx) => {
                  const isBroken = tamperedIndex !== null && idx >= tamperedIndex;
                  return (
                    <div
                      key={block.id}
                      onClick={() => simulateTamper(idx)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isBroken
                          ? 'bg-red-950/70 border-red-500 text-red-200 shadow-md'
                          : 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isBroken ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-200'
                        }`}>
                          {block.id}
                        </span>
                        <div>
                          <div className="font-bold text-white text-xs">{block.task}</div>
                          <div className="text-[10px] text-slate-400">{block.timestamp}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className={`font-mono text-xs font-bold ${
                          isBroken ? 'text-red-400' : 'text-emerald-400'
                        }`}>
                          {isBroken ? 'INVALID ✕' : block.hash}
                        </div>
                        <div className="text-[9px] text-slate-500">
                          {isBroken ? 'CHAIN BROKEN' : 'VALIDATED'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono">
              {tamperedIndex !== null ? (
                <span className="text-red-400 font-bold">
                  ⚠️ Tamper detected at Block {chain[tamperedIndex].id}! Downstream hashes invalidated.
                </span>
              ) : (
                'Every receipt is cryptographically tied to the previous action in a forward-secure Merkle chain.'
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
