import React, { useState } from 'react';
import { INITIAL_HASH_CHAIN } from '../../data/dopamint';
import type { HashBlock } from '../../data/dopamint';

export const RenaissanceEvidence: React.FC = () => {
  const [chain, setChain] = useState<HashBlock[]>(INITIAL_HASH_CHAIN);
  const [tamperedIndex, setTamperedIndex] = useState<number | null>(null);

  const simulateTamper = (index: number) => {
    if (tamperedIndex === index) {
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
    <section id="evidence" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER VI // EVIDENCE & RECEIPT LOGS</span>
        <span className="font-serif italic text-base text-black">VI</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Autonomy without evidence <br />
          <span className="font-serif italic font-normal text-black">
            is just a black box.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Every consequential action produces a receipt — and every receipt links to the one before it, so nobody's quietly rewriting history.
        </p>
      </div>

      {/* 2-Column Evidence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
        
        {/* Action Receipt Card */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-300 text-xs font-mono">
              <span className="text-neutral-500 uppercase font-bold">Action Receipt #8F72A</span>
              <span className="text-black font-bold">Verified ✓</span>
            </div>

            <div className="pt-4 space-y-2.5 font-mono text-xs text-black">
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Agent:</span>
                <span className="font-bold text-black">dopamint / personal-agent-v0.4</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Task:</span>
                <span className="font-bold text-black">Book dinner for Friday</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Capability:</span>
                <span className="font-bold text-black">booking.create</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Policy:</span>
                <span className="font-bold text-black">travel-policy-v3</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Authorization:</span>
                <span className="font-bold text-black">Approved</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Execution:</span>
                <span className="font-bold text-black">Successful</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">External ref:</span>
                <span className="font-bold text-black">reservation_8F72A</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">Receipt hash:</span>
                <span className="font-bold text-black">0x8a91…72bd</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-neutral-500">
            Cryptographic signature verified against user trust enclave.
          </div>
        </div>

        {/* Tamper-Evident Hash Chain Terminal */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-white font-bold uppercase">Tamper-evident action log</span>
              <span className="text-neutral-400">Click a block to test edit</span>
            </div>

            <div className="pt-6 space-y-3 font-mono text-xs">
              {chain.map((block, idx) => {
                const isBroken = tamperedIndex !== null && idx >= tamperedIndex;
                return (
                  <div
                    key={block.id}
                    onClick={() => simulateTamper(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isBroken
                        ? 'bg-neutral-900 border-white/40 text-white'
                        : 'bg-neutral-900 hover:bg-neutral-850 border-neutral-800 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs bg-neutral-800 text-white border border-neutral-700">
                        {block.id}
                      </span>
                      <div>
                        <div className="font-bold text-white text-xs">{block.task}</div>
                        <div className="text-[10px] text-neutral-400">{block.timestamp}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono text-xs font-bold text-white">
                        {isBroken ? 'INVALID ✕' : block.hash}
                      </div>
                      <div className="text-[9px] text-neutral-400">
                        {isBroken ? 'CHAIN BROKEN' : 'VALIDATED'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-[11px] text-neutral-400 font-mono">
            {tamperedIndex !== null ? (
              <span className="text-white font-bold">
                ⚠️ Tamper detected at Block {chain[tamperedIndex].id}! Downstream hashes invalidated.
              </span>
            ) : (
              'Every receipt is cryptographically tied to the previous action in a forward-secure Merkle chain.'
            )}
          </div>
        </div>

      </div>

    </section>
  );
};
