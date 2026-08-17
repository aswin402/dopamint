import React from 'react';
import { ArrowLeftRight, Terminal, DollarSign, Bell, ShieldCheck, Zap } from 'lucide-react';

export const OnchainActions: React.FC = () => {
  return (
    <section id="onchain" className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <ArrowLeftRight className="w-3.5 h-3.5 text-emerald-600" />
            <span>ONCHAIN CAPABILITIES & x402 RAILS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            What the agent can <br />
            <span className="text-emerald-600">actually do onchain.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Not "ask your agent about crypto." Ask it to move — inside the same policy checks as everything else on this page.
          </p>
        </div>

        {/* 4 Feature Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* 1. Swap */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-950 font-sans">
                  Swap
                </h3>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Policy-scoped
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Route a swap across the best available path, on whichever chain your wallet supports.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 font-mono text-xs text-slate-900 flex items-center justify-between shadow-xs">
              <span>Swap 500 USDC → ETH</span>
              <span className="text-emerald-600 font-bold">Base L2</span>
            </div>
          </div>

          {/* 2. x402 Machine Payments */}
          <div className="p-8 rounded-3xl bg-slate-950 text-white border-2 border-slate-800 space-y-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-white font-sans">
                  x402 payments
                </h3>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Spending-limited
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Pay any endpoint that speaks x402 — the HTTP-native standard for machine payments. No invoice, no checkout page, no human in the loop.
              </p>
            </div>

            {/* Terminal Command Simulation */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
              <div className="text-slate-500">$ curl https://api.example.com/data</div>
              <div className="text-amber-400">&lt; HTTP/1.1 402 Payment Required</div>
              <div className="text-emerald-400 font-bold">$ agent settles 0.0021 ETH via x402</div>
              <div className="text-slate-300">&lt; HTTP/1.1 200 OK · data returned</div>
            </div>
          </div>

          {/* 3. Buy / Sell */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-950 font-sans">
                  Buy / sell
                </h3>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Policy-scoped
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Trade on any connected exchange — OKX, Coinbase, Binance, KuCoin — inside the limits you've set, not whatever the market offers.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 font-mono text-xs text-slate-900 flex items-center justify-between shadow-xs">
              <span>Sell 0.4 ETH · OKX</span>
              <span className="text-emerald-600 font-bold">Market Order</span>
            </div>
          </div>

          {/* 4. Alerts */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-950 font-sans">
                  Alerts
                </h3>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                  Always watching
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Price thresholds, new listings, delistings — across every exchange the agent is connected to.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800">
                SOL down 6% in 1h
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800">
                Delist: $ZTX (Binance)
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800">
                New: $ARC (OKX)
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-emerald-700">
                ETH &gt; $3,400
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
