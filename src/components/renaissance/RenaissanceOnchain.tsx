import React from 'react';

export const RenaissanceOnchain: React.FC = () => {
  return (
    <section id="onchain" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>ONCHAIN ACTIONS // MACHINE EXECUTION</span>
        <span className="font-serif italic text-base text-black">Onchain actions</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Stuff it can <br />
          <span className="font-serif italic font-normal text-black">
            actually do with money.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Not “ask your agent about crypto.” Ask it to move — with the same checks as everything else here.
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
                inside your rules
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Tell it what you want swapped. It hunts down the best route on whatever chain your wallet's on.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs text-black font-bold">
            Swap 500 USDC → ETH · Base
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
                capped
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Some APIs charge per call. Your agent just pays them and keeps going — no checkout page, no you.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 font-mono text-xs text-white font-bold">
            402 Payment Required → paid 0.0021 ETH → 200 OK
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
                inside your rules
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Trades on the exchanges you've already connected — OKX, Coinbase, Binance, KuCoin — never past your limits.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs text-black font-bold">
            Sell 0.4 ETH · OKX · market
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
                always on
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Prices, listings, weird moves. It watches so you don't have to keep checking your phone.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200 font-mono text-xs text-black font-bold">
            ETH under 3,400 → ping you
          </div>
        </div>

      </div>

    </section>
  );
};
