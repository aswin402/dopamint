import React, { useState } from 'react';
import { ALERTS_LIST } from '../../data/dopamint';
import { ArrowRight, Bot, Cpu, CheckCircle2, RefreshCw, Zap, TrendingUp, Radio, Activity, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RenaissanceOnchain: React.FC = () => {
  // Interactive states for live animations
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapDone, setSwapDone] = useState(false);

  const [activeAlertIndex, setActiveAlertIndex] = useState<number>(0);
  const [isSimulatingTrade, setIsSimulatingTrade] = useState(false);

  const alertDetails = [
    { title: "ETH crossed $3,400", trigger: "Price: $3,398.20 → $3,404.10", action: "Iris executed 500 USDC limit order · Receipt #0x8f2c…41ab signed ✓", status: "EXECUTED" },
    { title: "BTC steady above $61,000", trigger: "Consolidation 61,240 USD (+0.8%)", action: "Portfolio rebalancing check passed · No action needed", status: "STABLE" },
    { title: "New listing: $NBLK → Coinbase", trigger: "Coinbase Asset API Webhook event #4092", action: "Safety audit verified contract address · Alert sent to user inbox", status: "NOTIFIED" },
    { title: "SOL down 6% in the last hour", trigger: "Velocity alert: -$9.40 / 60min", action: "Stop-loss trigger evaluated · Within tolerance envelope", status: "MONITORED" },
  ];

  const handleRunSwap = () => {
    setIsSwapping(true);
    setSwapDone(false);
    setTimeout(() => {
      setIsSwapping(false);
      setSwapDone(true);
    }, 1400);
  };

  const handleRunTrade = () => {
    setIsSimulatingTrade(true);
    setTimeout(() => {
      setIsSimulatingTrade(false);
    }, 1200);
  };

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
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Onchain — settles on-chain from the agent's own wallet</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 1. Swap (Interactive Routing & DEX Execution Card) */}
          <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-black font-sans">
                  Swap
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
                  Policy-scoped ✓
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                Tell it what you want swapped. It hunts down the best route on whatever chain your wallet's on.
              </p>
            </div>

            {/* Visual Animated Multi-Hop Router Diagram */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-300/90 shadow-xs space-y-3 font-mono">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-600" />
                  <span>DEX Route Synthesis</span>
                </span>
                <span className="text-emerald-700 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Optimal · Base L2
                </span>
              </div>

              {/* Animated Routing Pipeline */}
              <div className="grid grid-cols-3 items-center text-center gap-2 py-2 relative">
                {/* Step 1: Input */}
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[10px] text-neutral-400 font-bold uppercase">PAY</div>
                  <div className="text-xs font-black text-black">500 USDC</div>
                </div>

                {/* Step 2: Bridge/Router with animated pulse */}
                <div className="flex flex-col items-center justify-center relative">
                  <div className="w-full h-0.5 bg-neutral-200 relative overflow-hidden">
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      className="w-8 h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                  <div className="mt-1 text-[9px] font-bold text-neutral-500">Uniswap v3</div>
                </div>

                {/* Step 3: Output */}
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[10px] text-neutral-400 font-bold uppercase">RECEIVE</div>
                  <div className="text-xs font-black text-emerald-700">≈ 0.1471 ETH</div>
                </div>
              </div>

              {/* Execution Telemetry Badges */}
              <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-500 pt-1">
                <div>Price Impact: <span className="font-bold text-black">&lt;0.01%</span></div>
                <div className="text-right">Gas Estimate: <span className="font-bold text-black">$0.0018</span></div>
              </div>
            </div>

            {/* Interactive Action Button */}
            <button
              onClick={handleRunSwap}
              disabled={isSwapping}
              className="p-4 rounded-2xl bg-white border border-neutral-300 font-mono text-xs text-black font-bold flex items-center justify-between shadow-xs hover:border-black transition-all cursor-pointer w-full group"
            >
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${swapDone ? 'bg-emerald-500' : isSwapping ? 'bg-amber-400 animate-ping' : 'bg-black'}`} />
                <span>
                  {isSwapping
                    ? 'Synthesizing DEX Route & Signing...'
                    : swapDone
                    ? 'Swap 500 USDC → ETH Settled ✓'
                    : 'Swap 500 USDC → ETH · Base'}
                </span>
              </span>
              <ArrowRight className={`w-4 h-4 text-neutral-500 transition-transform ${isSwapping ? 'rotate-90 animate-spin' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>

          {/* 2. x402 Payments with curl call & Handshake Trace */}
          <div className="p-8 rounded-3xl bg-black text-white shadow-xl space-y-6 flex flex-col justify-between border border-neutral-800">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-white font-sans">
                  x402 payments
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                  Spending-limited
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                x402 is the HTTP standard for pay-per-call APIs — your agent hits a paywall, pays instantly, keeps going. Same rail works agent-to-agent: your agent can pay another agent or protocol the same way, no human in the loop, still logged.
              </p>
            </div>

            {/* Interactive Terminal Code Block */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 font-mono text-[11px] text-neutral-300 space-y-2 overflow-x-auto leading-relaxed shadow-inner">
              <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[10px] text-neutral-500">
                <span>TERMINAL · LIVE x402 HANDSHAKE</span>
                <span className="text-emerald-400 font-bold">LATENCY: 340ms</span>
              </div>
              <div className="text-neutral-400 font-bold">$ curl -i https://api.pricefeed.xyz/v1/quote?pair=ETH-USDC</div>
              <div className="text-amber-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>HTTP/1.1 402 Payment Required</span>
              </div>
              <div className="text-neutral-400 pl-3">x-402-price: 0.0021 ETH · x-402-chain: base</div>
              <div className="text-emerald-400 font-bold pl-3 border-l-2 border-emerald-500">
                → agent settles 0.0021 ETH via x402 (cap 0.05 ETH/day)
              </div>
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>HTTP/1.1 200 OK</span>
              </div>
              <div className="text-neutral-300 pl-3">{`{ "pair": "ETH-USDC", "mid": 3398.20, "receipt": "0x9f2c…41ab" }`}</div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero pre-shared API keys</span>
              </span>
              <span className="text-white font-bold">Automatic Settlement ✓</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 3. Buy / sell (Micro Order Book & Exchange Execution) */}
          <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-black font-sans">
                  Buy / sell
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
                  Policy-scoped ✓
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                Trades on the exchanges you've already connected — OKX, Coinbase, Binance, KuCoin — over their APIs, never past your limits.
              </p>
            </div>

            {/* Visual Animated Order Book Depth Meter */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-300/90 shadow-xs space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-neutral-200">
                <span className="font-bold text-black uppercase flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-black" />
                  <span>OKX Order Book · ETH/USDT</span>
                </span>
                <span className="text-neutral-500 font-bold text-[10px]">SPREAD: $0.10</span>
              </div>

              {/* Order Book Depth Rows */}
              <div className="space-y-1.5 text-[11px]">
                {/* Ask (Red) */}
                <div className="flex items-center justify-between text-neutral-600 relative overflow-hidden p-1 rounded-sm">
                  <div className="absolute top-0 right-0 h-full bg-red-500/10 w-[35%] pointer-events-none" />
                  <span className="text-red-600 font-bold">$3,401.50</span>
                  <span className="text-neutral-400">1.24 ETH</span>
                </div>
                {/* Ask Target (Highlighted Match) */}
                <div className="flex items-center justify-between text-neutral-900 relative overflow-hidden p-1 rounded-md bg-emerald-50 border border-emerald-200">
                  <div className="absolute top-0 right-0 h-full bg-emerald-500/15 w-[65%] pointer-events-none" />
                  <span className="text-emerald-800 font-black flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>$3,398.20 (FILLED)</span>
                  </span>
                  <span className="text-emerald-900 font-bold">0.40 ETH</span>
                </div>
                {/* Bid (Green) */}
                <div className="flex items-center justify-between text-neutral-600 relative overflow-hidden p-1 rounded-sm">
                  <div className="absolute top-0 right-0 h-full bg-emerald-500/10 w-[45%] pointer-events-none" />
                  <span className="text-emerald-600 font-bold">$3,396.10</span>
                  <span className="text-neutral-400">2.80 ETH</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleRunTrade}
              disabled={isSimulatingTrade}
              className="p-4 rounded-2xl bg-white border border-neutral-300 font-mono text-xs text-black font-bold flex items-center justify-between shadow-xs hover:border-black transition-all cursor-pointer w-full group"
            >
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isSimulatingTrade ? 'bg-amber-400 animate-ping' : 'bg-emerald-500'}`} />
                <span>{isSimulatingTrade ? 'Executing API Fill on OKX...' : 'Sell 0.4 ETH · OKX · Market (Executed ✓)'}</span>
              </span>
              <ArrowRight className={`w-4 h-4 text-neutral-500 transition-transform ${isSimulatingTrade ? 'rotate-90 animate-spin' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>

          {/* 4. Alerts (Live Sentinel Radar Stream & Dynamic Insights) */}
          <div className="parchment-card p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-black font-sans">
                  Alerts
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300 flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>Always watching</span>
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                Prices, listings, weird moves. It watches so you don't have to keep checking your phone.
              </p>
            </div>

            {/* Clickable Interactive Alert Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {ALERTS_LIST.map((alert, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAlertIndex(idx)}
                  className={`px-3 py-2 rounded-xl font-mono text-[11px] font-bold border transition-all cursor-pointer text-left ${
                    activeAlertIndex === idx
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white border-neutral-300 text-black hover:bg-neutral-50'
                  }`}
                >
                  {alert}
                </button>
              ))}
            </div>

            {/* Live Telemetry Card for Selected Alert */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-300 shadow-xs font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase font-bold">
                  {alertDetails[activeAlertIndex].title}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-[9px]">
                  {alertDetails[activeAlertIndex].status}
                </span>
              </div>
              <div className="text-[11px] text-neutral-600">
                <span className="text-neutral-400">Trigger Condition: </span>
                <span className="font-bold text-black">{alertDetails[activeAlertIndex].trigger}</span>
              </div>
              <div className="text-[11px] text-emerald-800 font-medium">
                <span className="text-neutral-400">Agent Action: </span>
                {alertDetails[activeAlertIndex].action}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION: Machine to machine */}
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
          <div className="lg:col-span-7 p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6 border border-neutral-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
                <span className="text-neutral-400 font-bold uppercase">Control layer · agent-to-agent</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-md">x402.call · verified</span>
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
                  <span className="text-amber-400 font-bold">GET /quotes/eth-usd · 402 Payment Required</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>payment:</span>
                  <span className="text-emerald-400 font-bold">0.0004 USDC · x402 · inside Iris' cap</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>result:</span>
                  <span className="text-emerald-400 font-bold">200 OK · quote returned in 340ms</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>receipt:</span>
                  <span className="text-emerald-400 font-bold">signed by both agents · hash 0x9f31…c2 ✓</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 flex items-center gap-2 font-mono text-xs text-emerald-300 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Settled agent-to-agent — same receipt, no human in the loop.</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Key Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="parchment-card p-6 rounded-2xl space-y-2 text-left">
              <h4 className="text-base font-black text-black font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Per-call, not per-contract</span>
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                No API keys to provision, no invoices. The callee quotes a price in the 402 response and your agent decides in-flight.
              </p>
            </div>

            <div className="parchment-card p-6 rounded-2xl space-y-2 text-left">
              <h4 className="text-base font-black text-black font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Caps still apply</span>
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                An agent-to-agent payment runs the same policy evaluation as a payment to a human — per-action cap, daily cap, payee history.
              </p>
            </div>

            <div className="parchment-card p-6 rounded-2xl space-y-2 text-left">
              <h4 className="text-base font-black text-black font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Both sides sign</span>
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
