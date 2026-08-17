import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { LiveAgentTerminal } from './ui/LiveAgentTerminal';
import { SpotlightCard } from './ui/SpotlightCard';
import { BorderBeam } from './ui/BorderBeam';

export const TrustLayerSimulator: React.FC = () => {
  const [requestedAmount, setRequestedAmount] = useState<number>(42);
  const maxLimit = 100;
  const isAllowed = requestedAmount <= maxLimit;

  return (
    <section id="trust" className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>AUTHORITY & DETERMINISTIC POLICY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            The model proposes. <br />
            <span className="text-emerald-600">The system decides.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            The LLM doesn't get the final say — ever. Every move gets checked against identity, policy, and risk before anything actually happens.
          </p>
        </div>

        {/* Interactive Trust Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch mb-16">
          
          {/* Controls Column */}
          <SpotlightCard className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Interactive Trust Engine
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                  payments.send
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-2">
                  Requested Transaction Amount:
                </label>
                <div className="flex items-center justify-between font-mono mb-2">
                  <span className="text-2xl font-black text-slate-950">${requestedAmount}.00</span>
                  <span className="text-xs text-slate-500">Max limit: ${maxLimit}.00</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={requestedAmount}
                  onChange={(e) => setRequestedAmount(parseInt(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Quick test buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setRequestedAmount(5)}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer transition-colors"
                >
                  $5 (Micro)
                </button>
                <button
                  onClick={() => setRequestedAmount(42)}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer transition-colors"
                >
                  $42 (Standard)
                </button>
                <button
                  onClick={() => setRequestedAmount(180)}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-red-100 hover:bg-red-200 text-red-800 cursor-pointer transition-colors"
                >
                  $180 (Over Limit)
                </button>
              </div>
            </div>

            {/* Spec breakdown */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 font-mono text-xs space-y-2">
              <div className="flex justify-between text-slate-600">
                <span>Capability</span>
                <span className="font-bold text-slate-900">payments.send</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Maximum transaction</span>
                <span className="font-bold text-slate-900">${maxLimit}.00</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Destination status</span>
                <span className="font-bold text-emerald-700">Approved Merchant</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Decision Terminal */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-2 border-slate-800 space-y-6 relative overflow-hidden">
            
            <BorderBeam size={220} duration={12} colorFrom="#10B981" colorTo="#06B6D4" />

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-slate-400">POLICY EVALUATION HUD</span>
                <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                  isAllowed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {isAllowed ? 'RISK: LOW' : 'RISK: POLICY VIOLATION'}
                </span>
              </div>

              {/* Policy Evaluation Matrix */}
              <div className="p-4 rounded-2xl bg-slate-900 font-mono text-xs space-y-2.5">
                <div className="flex justify-between text-slate-400">
                  <span>Policy rule:</span>
                  <span className="text-slate-200">payments-v2 (max: $100)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Requested:</span>
                  <span className="text-white font-bold">${requestedAmount}.00 USD</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Threshold evaluation:</span>
                  <span className={isAllowed ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                    {isAllowed ? '✓ WITHIN PER-TXN BOUND' : '✕ EXCEEDS $100 LIMIT'}
                  </span>
                </div>
              </div>

              {/* Decision Verdict Box */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between font-mono ${
                isAllowed
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
                  : 'bg-red-950/60 border-red-500/60 text-red-200'
              }`}>
                <div className="flex items-center gap-2 font-bold text-xs">
                  {isAllowed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span>{isAllowed ? 'DECISION → EXECUTE' : 'DECISION → ACTION BLOCKED'}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60">
                  {isAllowed ? 'Signed Receipt Issued' : 'Revocation Triggered'}
                </span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono">
              The LLM proposed this transaction. The DopaMint Trust Layer independently validated spending caps before releasing funds.
            </div>

          </div>

        </div>

        {/* Live Stream Execution Terminal Feed */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              REAL-TIME AUTONOMOUS TASK TELEMETRY
            </span>
          </div>
          <LiveAgentTerminal />
        </div>

      </div>
    </section>
  );
};
