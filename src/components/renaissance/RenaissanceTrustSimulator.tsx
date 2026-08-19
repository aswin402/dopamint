import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const RenaissanceTrustSimulator: React.FC = () => {
  const [requestedAmount, setRequestedAmount] = useState<number>(42);
  const maxLimit = 100;
  const isAllowed = requestedAmount <= maxLimit;

  return (
    <section id="trust" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER IV // AUTHORITY & POLICY</span>
        <span className="font-serif italic text-base text-black">IV</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          The model proposes. <br />
          <span className="font-serif italic font-normal text-black">
            The system decides.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          The LLM doesn't get the final say — ever. Every move gets checked against identity, policy, and risk before anything actually happens.
        </p>
      </div>

      {/* Interactive Trust Playground (2 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
        
        {/* Controls Card */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-300 text-xs font-mono">
              <span className="text-neutral-500 uppercase font-bold">Try it: Trust Layer Policy Check</span>
              <span className="text-black font-bold">payments.send</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase font-mono mb-2">
                Proposed Transaction Value:
              </label>
              <div className="flex items-center justify-between font-mono mb-2">
                <span className="text-3xl font-black text-black">${requestedAmount}.00</span>
                <span className="text-xs text-neutral-500">Max limit: ${maxLimit}.00</span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={requestedAmount}
                onChange={(e) => setRequestedAmount(parseInt(e.target.value))}
                className="w-full accent-black cursor-pointer h-2 bg-neutral-300 rounded-lg"
              />
            </div>

            {/* Quick test buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setRequestedAmount(5)}
                className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 text-black cursor-pointer transition-colors"
              >
                $5 (Micro)
              </button>
              <button
                onClick={() => setRequestedAmount(42)}
                className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 text-black cursor-pointer transition-colors"
              >
                $42 (Standard)
              </button>
              <button
                onClick={() => setRequestedAmount(180)}
                className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 text-black cursor-pointer transition-colors"
              >
                $180 (Over Limit)
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs space-y-2 text-neutral-800">
            <div className="flex justify-between">
              <span className="text-neutral-500">Capability:</span>
              <span className="font-bold text-black">payments.send</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Maximum transaction:</span>
              <span className="font-bold text-black">${maxLimit}.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Destination:</span>
              <span className="font-bold text-black">Approved</span>
            </div>
          </div>
        </div>

        {/* Verdict Terminal Card */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-neutral-400">TRUST LAYER DECISION ENGINE</span>
              <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                isAllowed ? 'bg-neutral-800 text-white border border-neutral-700' : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
              }`}>
                {isAllowed ? 'RISK: LOW' : 'RISK: OVER LIMIT'}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 font-mono text-xs space-y-2.5">
              <div className="flex justify-between text-neutral-400">
                <span>Requested amount:</span>
                <span className="text-white font-bold">${requestedAmount}.00 USD</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Policy status:</span>
                <span className="text-white font-bold">
                  {isAllowed ? 'Allowed ✓' : 'Blocked ✕'}
                </span>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-2xl border border-white/20 bg-neutral-900 flex items-center justify-between font-mono text-xs font-bold text-white">
              <div className="flex items-center gap-2">
                {isAllowed ? <CheckCircle2 className="w-5 h-5 text-white" /> : <XCircle className="w-5 h-5 text-neutral-400" />}
                <span className="text-white">{isAllowed ? 'DECISION → EXECUTE' : 'DECISION → ACTION BLOCKED'}</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-black text-white font-mono border border-white/10">
                {isAllowed ? 'Signed Receipt' : 'Freeze Trigger'}
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 font-sans">
            Choose an action for the agent to propose and watch the trust layer make the call.
          </p>
        </div>

      </div>

      {/* 4 Feature Row matching Shopify Editions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-neutral-300 text-left text-xs font-sans text-neutral-700">
        <div className="space-y-1">
          <div className="font-bold text-black text-sm">Wide-mode inspection</div>
          <p className="text-neutral-600">Full screen trace logs to tackle complex agent delegations.</p>
        </div>
        <div className="space-y-1">
          <div className="font-bold text-black text-sm">Target selection</div>
          <p className="text-neutral-600">Contextual policy answers for specific API endpoints.</p>
        </div>
        <div className="space-y-1">
          <div className="font-bold text-black text-sm">Better memory</div>
          <p className="text-neutral-600">Deterministic provenance tracks unique user preferences.</p>
        </div>
        <div className="space-y-1">
          <div className="font-bold text-black text-sm">Money management</div>
          <p className="text-neutral-600">Strict balance checks make payments only with policy approval.</p>
        </div>
      </div>

    </section>
  );
};
