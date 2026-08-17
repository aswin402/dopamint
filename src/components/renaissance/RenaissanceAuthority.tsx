import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const RenaissanceAuthority: React.FC = () => {
  const [amount, setAmount] = useState<number>(5.0);
  const capPerAction = 100.0;
  const isApproved = amount <= capPerAction;

  return (
    <section id="authority" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>AUTHORITY & TRUST LAYER</span>
        <span className="font-serif italic text-base text-black">Authority</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Your agent can run in a sandbox — <br />
          <span className="font-serif italic font-normal text-black">
            so can you actually trust it?
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Here's what happens the second it tries to do something you didn't approve.
        </p>
      </div>

      {/* Interactive Trust Playground (2 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
        
        {/* Controls Card */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-300 text-xs font-mono">
              <span className="text-neutral-500 uppercase font-bold">Try it</span>
              <span className="text-black font-bold">payments.send</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 font-medium">
              Pick something for the agent to propose and watch the call get made.
            </p>

            {/* Quick Test Amount Buttons */}
            <div className="space-y-2 pt-2">
              <label className="block text-[11px] font-mono font-bold text-neutral-500 uppercase">
                Select Proposed Amount:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setAmount(5.0)}
                  className={`px-4 py-2 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                    amount === 5.0
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  $5.00 USDC (Micro)
                </button>
                <button
                  onClick={() => setAmount(42.0)}
                  className={`px-4 py-2 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                    amount === 42.0
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  $42.00 USDC (Standard)
                </button>
                <button
                  onClick={() => setAmount(180.0)}
                  className={`px-4 py-2 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                    amount === 180.0
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  $180.00 USDC (Over Limit)
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs space-y-2 text-black">
            <div className="flex justify-between">
              <span className="text-neutral-500">Trust layer:</span>
              <span className="font-bold">payments.send</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">who's asking:</span>
              <span className="font-bold">Iris · onchain agent</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">your cap:</span>
              <span className="font-bold">$100 per action / $250 a day</span>
            </div>
          </div>
        </div>

        {/* Verdict Live Card */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-neutral-400">DECISION RECORD</span>
              <span className="text-white font-bold">{isApproved ? 'RISK: LOW' : 'RISK: OVER CAP'}</span>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 font-mono text-xs space-y-2.5">
              <div className="flex justify-between text-neutral-400">
                <span>amount:</span>
                <span className="text-white font-bold">${amount.toFixed(2)} USDC</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>risk check:</span>
                <span className="text-white">known payee, seen 12 times</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>receipt:</span>
                <span className="text-white font-bold">{isApproved ? 'signed + logged' : 'unauthorized'}</span>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-2xl border border-white/20 bg-neutral-900 flex items-center justify-between font-mono text-xs font-bold text-white">
              <div className="flex items-center gap-2">
                {isApproved ? <CheckCircle2 className="w-5 h-5 text-white" /> : <XCircle className="w-5 h-5 text-neutral-400" />}
                <span>
                  {isApproved
                    ? 'Approved — went through, and here\'s the receipt.'
                    : 'Blocked — exceeded $100 per-action limit.'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 font-sans">
            Every call is intercepted by the deterministic policy layer prior to dispatch.
          </p>
        </div>

      </div>

    </section>
  );
};
