import React, { useState } from 'react';
import { Trash2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { InteractiveWalletCard } from '../ui/InteractiveWalletCard';

export const RenaissanceMemoryWallet: React.FC = () => {
  const [activeCaps, setActiveCaps] = useState({ daily: 250, perAction: 100, spent: 40 });

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>BOUNDED CONTEXT & WALLET</span>
        <span className="font-serif italic text-base text-black">Memory + agency</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          It remembers you. <br />
          <span className="font-serif italic font-normal text-black">
            It still can't go wild.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Small example: it knows you're vegetarian, so it picks the right spot — and it books the table without ever going past what you let it spend.
        </p>
      </div>

      {/* 2-Column Memory + Wallet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* Left: Memory Flow Sequence */}
        <div className="lg:col-span-7 parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4 font-mono text-xs">
            
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-1">
              <div className="text-[10px] font-bold text-neutral-400 uppercase">remembers</div>
              <div className="font-bold text-black text-sm">You're vegetarian. Told it back in March.</div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-1">
              <div className="text-[10px] font-bold text-neutral-400 uppercase">remembers</div>
              <div className="font-bold text-black text-sm">You hate anywhere loud on a weeknight.</div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-300 space-y-1">
              <div className="text-[10px] font-bold text-black uppercase">acts</div>
              <div className="font-bold text-black text-sm">Books Kiln, 7:30pm, veg tasting menu.</div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-2xl bg-black text-white space-y-1">
              <div className="text-[10px] font-bold text-neutral-400 uppercase">stops</div>
              <div className="font-bold text-white text-sm">Deposit's $40 — fine. A $600 chef's table? Not without you.</div>
            </div>

          </div>

          <p className="text-xs text-neutral-600 font-sans leading-relaxed pt-2 border-t border-neutral-200">
            Every memory came from somewhere, and you can delete any of it. Nothing gets treated as fact just because the model said it.
          </p>
        </div>

        {/* Right: Its Wallet */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <InteractiveWalletCard
            balance="$1,240.00"
            perDay="$40 / $250"
            perAction="$40 / $100"
            className="!max-w-full shadow-2xl"
          />
          <div className="mt-3 p-4 rounded-2xl bg-black text-white border border-neutral-800 text-xs font-sans text-neutral-300 w-full text-center">
            Move the caps whenever. Pull the plug whenever. It's your money.
          </div>
        </div>

      </div>

    </section>
  );
};
