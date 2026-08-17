import React from 'react';
import { ECOSYSTEM_INTEGRATIONS } from '../../data/dopamint';

export const RenaissanceOnchain: React.FC = () => {
  return (
    <section id="onchain" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER XI // ONCHAIN & ECOSYSTEM</span>
        <span className="font-serif italic text-base text-black">XI</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          What the agent can <br />
          <span className="font-serif italic font-normal text-black">
            actually do onchain.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Not "ask your agent about crypto." Ask it to move — inside the same policy checks as everything else on this page.
        </p>
      </div>

      {/* 4 Onchain Feature Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* 1. Swap */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-black font-sans">
                Swap
              </h3>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/5 text-neutral-700">
                Policy-scoped
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Route a swap across the best available path, on whichever chain your wallet supports.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs text-black flex items-center justify-between">
            <span>Swap 500 USDC → ETH</span>
            <span className="text-black font-bold">Base L2</span>
          </div>
        </div>

        {/* 2. x402 Machine Payments */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-white font-sans">
                x402 payments
              </h3>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-800 text-white border border-neutral-700">
                Spending-limited
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Pay any endpoint that speaks x402 — the HTTP-native standard for machine payments. No invoice, no checkout page, no human in the loop.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 font-mono text-[11px] space-y-1 text-white">
            <div className="text-neutral-500">$ curl https://api.example.com/data</div>
            <div className="text-neutral-400">&lt; HTTP/1.1 402 Payment Required</div>
            <div className="text-white font-bold">$ agent settles 0.0021 ETH via x402</div>
            <div className="text-neutral-300">&lt; HTTP/1.1 200 OK · data returned</div>
          </div>
        </div>

        {/* 3. Buy / Sell */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-black font-sans">
                Buy / sell
              </h3>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/5 text-neutral-700">
                Policy-scoped
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Trade on any connected exchange — OKX, Coinbase, Binance, KuCoin — inside the limits you've set, not whatever the market offers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs text-black flex items-center justify-between">
            <span>Sell 0.4 ETH · OKX</span>
            <span className="text-black font-bold">Market Order</span>
          </div>
        </div>

        {/* 4. Alerts */}
        <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-black font-sans">
                Alerts
              </h3>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/5 text-neutral-700">
                Always watching
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Price thresholds, new listings, delistings — across every exchange the agent is connected to.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-[11px] text-black font-medium">
            <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
              ETH crossed $3,400
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
              Delist: $ZTX (Binance)
            </div>
          </div>
        </div>

      </div>

      {/* Ecosystem Integrations Section */}
      <div className="pt-8 border-t border-neutral-300 mb-16 space-y-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
            Any app. Any exchange. One agent.
          </h3>
          <p className="text-sm text-neutral-600 mt-1">
            Your agents plug into the places you already live — including wherever your money already lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="parchment-card p-6 rounded-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-neutral-500 uppercase">Communication</div>
            <div className="flex flex-wrap gap-1.5">
              {ECOSYSTEM_INTEGRATIONS.communication.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-bold text-black">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="parchment-card p-6 rounded-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-neutral-500 uppercase">Exchanges & Wallets</div>
            <div className="flex flex-wrap gap-1.5">
              {ECOSYSTEM_INTEGRATIONS.exchanges.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-bold text-black">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="parchment-card p-6 rounded-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-neutral-500 uppercase">Payments</div>
            <div className="flex flex-wrap gap-1.5">
              {ECOSYSTEM_INTEGRATIONS.payments.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-bold text-black">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="parchment-card p-6 rounded-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-neutral-500 uppercase">Work & Life</div>
            <div className="flex flex-wrap gap-1.5">
              {ECOSYSTEM_INTEGRATIONS.work.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-bold text-black">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
