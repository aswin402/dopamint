import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const RenaissancePayments: React.FC = () => {
  const steps = [
    'Wallet',
    'Agent intent',
    'Policy engine',
    'Simulation',
    'Approval',
    'Transaction',
    'On-chain verification'
  ];

  return (
    <section id="payments" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER X // AGENCY & WALLET BOUNDS</span>
        <span className="font-serif italic text-base text-black">X</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          An agent that can pay. <br />
          <span className="font-serif italic font-normal text-black">
            With limits.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Payment authority is the clearest test of whether an agent's autonomy is actually bounded. DopaMint's is.
        </p>
      </div>

      {/* 2-Column Wallet & Engine Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
        
        {/* Wallet Limits Card */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-300 text-xs font-mono">
              <span className="text-neutral-500 uppercase font-bold">Connected Agent Wallet</span>
              <span className="text-black font-bold">MPC Enclave</span>
            </div>

            <div className="pt-4 space-y-4 font-mono">
              <div>
                <div className="text-xs text-neutral-500">Available Balance</div>
                <div className="text-4xl font-black text-black mt-0.5">$1,240.00</div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="text-neutral-400 text-[10px]">Daily limit</div>
                  <div className="font-bold text-black text-sm mt-0.5">$250.00</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="text-neutral-400 text-[10px]">Per transaction</div>
                  <div className="font-bold text-black text-sm mt-0.5">$100.00</div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-200 grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="space-y-1 text-black font-semibold">
                <div>✓ subscriptions</div>
                <div>✓ restaurants</div>
                <div>✓ travel</div>
              </div>
              <div className="space-y-1 text-neutral-500 font-semibold">
                <div>✕ withdrawals</div>
                <div>✕ unknown contracts</div>
                <div>✕ unlimited transfers</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-neutral-500">
            Deterministic rule engine runs inside confidential hardware enclave.
          </div>
        </div>

        {/* Policy Engine Execution Card */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-white font-bold uppercase">Policy Engine: wallet.pay</span>
              <span className="text-neutral-400">RISK: LOW</span>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 font-mono text-xs space-y-2.5">
              <div className="flex justify-between text-neutral-400">
                <span>Amount:</span>
                <span className="text-white font-bold">$42.00 USD</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Per-transaction limit:</span>
                <span className="text-neutral-300">$100.00</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Category:</span>
                <span className="text-white font-bold">restaurants (Allowed)</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Risk score:</span>
                <span className="text-white font-bold">0.02 (Low)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-white/20 text-white flex items-center justify-between font-mono text-xs font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="text-white">DECISION → EXECUTE</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-black text-white font-mono border border-white/10">
                Settled ✓
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 font-sans">
            Zero unapproved payouts. If a single rule fails, execution is halted immediately.
          </p>
        </div>

      </div>

      {/* 7-Step Verification Flow */}
      <div className="parchment-card p-6 rounded-2xl">
        <div className="text-xs font-mono font-bold text-neutral-500 uppercase mb-3 text-center">
          END-TO-END TRANSACTION PIPELINE
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs font-bold text-black">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <span className="px-3 py-1 rounded-lg bg-white border border-neutral-200 text-black">
                {step}
              </span>
              {idx < steps.length - 1 && <span className="text-neutral-400">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};
