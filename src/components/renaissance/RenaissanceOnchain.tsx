import React from 'react';
import { ALERTS_LIST } from '../../data/dopamint';
import { ArrowRight, Bot, Cpu, CheckCircle2 } from 'lucide-react';

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

      {/* GROUP 1: Onchain */}
      <div className="space-y-6 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-600 uppercase">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span>Onchain — settles on-chain from the agent's own wallet</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Swap */}
          <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-black font-sans">
                  Swap
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/5 text-black border border-black/10">
                  Policy-scoped
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                Tell it what you want swapped. It hunts down the best route on whatever chain your wallet's on.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-300 font-mono text-xs text-black font-bold flex items-center justify-between">
              <span>Swap 500 USDC → ETH · Base</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </div>
          </div>

          {/* 2. x402 Payments with curl call */}
          <div className="p-8 rounded-3xl bg-black text-white shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-white font-sans">
                  x402 payments
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                  Spending-limited
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                x402 is the HTTP standard for pay-per-call APIs — your agent hits a paywall, pays instantly, keeps going. Same rail works agent-to-agent: your agent can pay another agent or protocol the same way, no human in the loop, still logged.
              </p>
            </div>

            {/* Terminal Code Block */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-300 space-y-1 overflow-x-auto leading-relaxed">
              <div className="text-neutral-500 font-bold">$ curl https://api.pricefeed.xyz/v1/quote?pair=ETH-USDC</div>
              <div className="text-neutral-400">HTTP/1.1 402 Payment Required</div>
              <div className="text-neutral-400">x-402-price: 0.0021 ETH · x-402-chain: base</div>
              <div className="text-white font-bold">→ agent settles 0.0021 ETH via x402 (cap 0.05 ETH/day)</div>
              <div className="text-neutral-400">HTTP/1.1 200 OK</div>
              <div className="text-neutral-400">{`{ "pair": "ETH-USDC", "mid": 3398.20, "receipt": "0x9f2c…41ab" }`}</div>
            </div>
          </div>
        </div>
      </div>

      {/* GROUP 2: Exchanges */}
      <div className="space-y-6 mb-20">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-600 uppercase">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span>Exchanges — centralized venues, over their APIs with your connected keys</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3. Buy / sell */}
          <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-black font-sans">
                  Buy / sell
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/5 text-black border border-black/10">
                  Policy-scoped
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                Trades on the exchanges you've already connected — OKX, Coinbase, Binance, KuCoin — over their APIs, never past your limits.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-300 font-mono text-xs text-black font-bold flex items-center justify-between">
              <span>Sell 0.4 ETH · OKX · market</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </div>
          </div>

          {/* 4. Alerts */}
          <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-black font-sans">
                  Alerts
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/5 text-black border border-black/10">
                  Always watching
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                Prices, listings, weird moves. It watches so you don't have to keep checking your phone.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {ALERTS_LIST.map((alert, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white border border-neutral-300 text-black font-mono text-[11px] font-bold"
                >
                  {alert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Machine to machine */}
      <div id="machine-to-machine" className="pt-16 border-t border-neutral-300">
        <div className="max-w-3xl mb-12 space-y-3 text-left">
          <div className="text-xs font-mono uppercase font-bold text-neutral-500">Machine to machine</div>
          <h2 className="text-3xl sm:text-5xl font-black text-display text-black tracking-tight leading-[0.98]">
            Agents talking <br />
            <span className="font-serif italic font-normal text-black">
              to agents.
            </span>
          </h2>
          <p className="text-base text-neutral-700 font-normal leading-relaxed">
            The same rail works with no human in the loop. Your agent can pay or query another agent or protocol per call — and it still gets checked, capped, and logged exactly like anything else here.
          </p>
        </div>

        {/* Live A2A Transaction Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* Left: Terminal Contract Card */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
                <span className="text-neutral-400 font-bold uppercase">Control layer · agent-to-agent</span>
                <span className="text-white font-bold">x402.call</span>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 font-mono text-xs space-y-2.5">
                <div className="flex justify-between text-neutral-400">
                  <span>caller:</span>
                  <span className="text-white font-bold">Iris · your onchain agent</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>callee:</span>
                  <span className="text-white font-bold">Helix · pricing-data agent</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>request:</span>
                  <span className="text-white font-bold">GET /quotes/eth-usd · 402 Payment Required</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>payment:</span>
                  <span className="text-white font-bold">0.0004 USDC · x402 · inside Iris' cap</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>result:</span>
                  <span className="text-white font-bold">200 OK · quote returned in 340ms</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>receipt:</span>
                  <span className="text-white font-bold">signed by both agents · hash 0x9f31…c2</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-900 border border-white/20 flex items-center gap-2 font-mono text-xs text-white font-bold">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Settled agent-to-agent — same receipt, no human in the loop.</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Key Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="parchment-card p-6 rounded-2xl space-y-2 text-left">
              <h4 className="text-base font-black text-black font-sans">
                Per-call, not per-contract
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                No API keys to provision, no invoices. The callee quotes a price in the 402 response and your agent decides in-flight.
              </p>
            </div>

            <div className="parchment-card p-6 rounded-2xl space-y-2 text-left">
              <h4 className="text-base font-black text-black font-sans">
                Caps still apply
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                An agent-to-agent payment runs the same policy evaluation as a payment to a human — per-action cap, daily cap, payee history.
              </p>
            </div>

            <div className="parchment-card p-6 rounded-2xl space-y-2 text-left">
              <h4 className="text-base font-black text-black font-sans">
                Both sides sign
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                The request and the settlement are hashed into the same append-only chain you can inspect in Evidence.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
