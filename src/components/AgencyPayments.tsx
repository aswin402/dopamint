import React from 'react';
import { DollarSign, ShieldCheck, CheckCircle2, XCircle, ArrowRight, Wallet, Zap } from 'lucide-react';

export const AgencyPayments: React.FC = () => {
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
    <section className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>BOUNDED AUTONOMY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            An agent that can pay. <br />
            <span className="text-emerald-600">With limits.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Payment authority is the clearest test of whether an agent's autonomy is actually bounded. DopaMint's is.
          </p>
        </div>

        {/* 2-Column Wallet & Engine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch mb-16">
          
          {/* Wallet Limits Card */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Connected Agent Wallet
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                  MPC Isolated
                </span>
              </div>

              {/* Wallet Numbers */}
              <div className="pt-4 space-y-4 font-mono">
                <div>
                  <div className="text-xs text-slate-400">Available Balance</div>
                  <div className="text-4xl font-black text-slate-950 mt-0.5">$1,240.00</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 text-[10px]">Daily limit</div>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">$250.00</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-400 text-[10px]">Per transaction</div>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">$100.00</div>
                  </div>
                </div>
              </div>

              {/* Category Rules */}
              <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="space-y-1 text-emerald-700 font-semibold">
                  <div className="flex items-center gap-1">✓ subscriptions</div>
                  <div className="flex items-center gap-1">✓ restaurants</div>
                  <div className="flex items-center gap-1">✓ travel</div>
                </div>
                <div className="space-y-1 text-red-600 font-semibold">
                  <div className="flex items-center gap-1">✕ withdrawals</div>
                  <div className="flex items-center gap-1">✕ unknown contracts</div>
                  <div className="flex items-center gap-1">✕ unlimited transfers</div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400">
              Deterministic rule engine runs inside confidential hardware enclave.
            </div>
          </div>

          {/* Policy Decision Engine Card */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-2 border-slate-800 space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-emerald-400 font-bold uppercase">Policy Engine: wallet.pay</span>
                <span className="text-slate-400">RISK: LOW</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 font-mono text-xs space-y-2.5">
                <div className="flex justify-between text-slate-400">
                  <span>Amount:</span>
                  <span className="text-white font-bold">$42.00 USD</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Per-transaction limit:</span>
                  <span className="text-slate-300">$100.00</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Category:</span>
                  <span className="text-emerald-400 font-bold">restaurants (Allowed)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Risk score:</span>
                  <span className="text-emerald-400 font-bold">0.02 (Low)</span>
                </div>
              </div>

              {/* Execution Block */}
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/60 text-emerald-200 flex items-center justify-between font-mono text-xs font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>DECISION → EXECUTE</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 text-emerald-400">
                  Settled ✓
                </span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400">
              Zero unapproved payouts. If a single rule fails, execution is halted immediately.
            </div>

          </div>

        </div>

        {/* 7-Step Verification Flow Ribbon */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-5xl mx-auto">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-4 text-center">
            END-TO-END PAYMENT LIFECYCLE
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold text-slate-800">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                  {step}
                </span>
                {idx < steps.length - 1 && <span className="text-slate-300">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
