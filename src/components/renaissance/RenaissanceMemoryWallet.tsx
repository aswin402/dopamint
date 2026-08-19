import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Zap, RefreshCw, Layers, TrendingUp, Search, Lock } from 'lucide-react';
import { BurnTransition } from '../ui/BurnTransition';

const EXCHANGES_RAILS = [
  'Upbit',
  'Coinbase',
  'Binance',
  'OKX',
  'Bybit',
  'Kraken',
  'Bithumb',
  'Gate',
];

const WALLET_RAILS = [
  'MetaMask',
  'Phantom',
  'Base',
  'Coinbase Wallet',
  'Rabby',
  'Ledger',
  'Backpack',
];

export const RenaissanceMemoryWallet: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [stepActive, setStepActive] = useState<1 | 2 | 3>(3);

  const handleReplay = () => {
    setIsSimulating(true);
    setStepActive(1);
    setTimeout(() => setStepActive(2), 700);
    setTimeout(() => {
      setStepActive(3);
      setIsSimulating(false);
    }, 1800);
  };

  return (
    <section id="the-floor" className="w-full bg-[#D9D6CA] text-[#141820] py-24 sm:py-32 select-none relative overflow-hidden">
      
      {/* =========================================================================
          1. TOP BURN TRANSITION (STARTING EDGE)
          ========================================================================= */}
      <div className="absolute top-0 inset-x-0 h-64 sm:h-80 md:h-96 pointer-events-none z-30 opacity-95">
        <BurnTransition
          color="#D9D6CA"
          transitionColor="#FFFFFF"
          noiseScale={2.5}
          noiseIntensity={0.52}
          scrollSensitivity={0.015}
          baseAnimationSpeed={0.08}
          edgeSoftness={0.38}
          bloomIntensity={0.75}
          bloomRadius={0.35}
          parallaxEnabled={true}
          movement={{ horizontal: 'center', vertical: 0.5 }}
          className="h-full w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Chapter Marker */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
          <span>06 THE FLOOR</span>
          <span className="font-serif italic text-base text-black">Watch the house work</span>
        </div>

        {/* Editorial Title & Subtitle */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-black tracking-tight leading-[0.94]">
            Watch the <br />
            <span className="font-serif italic font-normal text-black">
              house work.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
            One sentence enters the house. Skills wake up, reason together and settle it on the rails you already use.
          </p>
        </div>

        {/* =========================================================================
            2. THE 3-STEP PIPELINE: intent 01 → reasoning 02 → execution 03
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* STEP 1: intent 01 */}
          <div className="lg:col-span-4 parchment-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden shadow-lg border border-neutral-300/80">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-black text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  intent 01
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Incoming voice/text</span>
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-bold">
                  User prompt entered
                </h3>
                <div className="p-4 rounded-2xl bg-white border border-neutral-300 shadow-sm relative overflow-hidden group">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg font-serif italic text-black font-semibold leading-snug">
                      “put idle USDC to work above 8%”
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-neutral-400">
                    <span>Parsed: Asset=USDC</span>
                    <span>·</span>
                    <span>MinYield=8.0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-neutral-100/90 border border-neutral-200 text-xs font-mono text-neutral-600 flex items-center justify-between">
              <span>Dispatched to Agent Cluster</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
            </div>
          </div>

          {/* STEP 2: reasoning 02 */}
          <div className="lg:col-span-5 parchment-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden shadow-lg border border-neutral-300/80">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#3d5143] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  reasoning 02
                </span>
                <span className="text-xs font-mono text-neutral-500 font-bold">
                  Multi-Skill Consensus
                </span>
              </div>

              {/* 3 Reasoning Nodes */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Node 1: yield */}
                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-black flex items-center gap-1.5">
                        <span className="text-emerald-700 font-black">yield</span>
                        <span className="text-neutral-400">·</span>
                        <span>4 vaults screened</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">Morpho, Aave v3, Aerodrome, Moonwell</div>
                    </div>
                  </div>
                  <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    9.2% Max
                  </span>
                </div>

                {/* Node 2: research */}
                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                      <Search className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-black flex items-center gap-1.5">
                        <span className="text-blue-700 font-black">research</span>
                        <span className="text-neutral-400">·</span>
                        <span>audit + TVL checked</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">OpenZeppelin audit ✓ · $42M TVL</div>
                    </div>
                  </div>
                  <span className="text-blue-700 font-bold text-[11px] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    Verified
                  </span>
                </div>

                {/* Node 3: risk */}
                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-black flex items-center gap-1.5">
                        <span className="text-purple-700 font-black">risk</span>
                        <span className="text-neutral-400">·</span>
                        <span>single-venue cap 25%</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">Allocation safety envelope bounded</div>
                    </div>
                  </div>
                  <span className="text-purple-700 font-bold text-[11px] bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                    Passed ✓
                  </span>
                </div>

              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 flex items-center justify-between">
              <span className="font-bold">Consensus Reached (3/3 approvals)</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* STEP 3: execution 03 */}
          <div className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-[#141820] text-white space-y-6 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-neutral-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                  execution 03
                </span>
                <span className="px-2 py-0.5 rounded-md bg-neutral-800 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30">
                  ONCHAIN
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-bold">
                  Signed & Settled
                </h3>

                <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 font-mono space-y-3">
                  <div className="text-sm font-black text-white leading-snug">
                    swap + deposit signed onchain · <span className="text-emerald-400">9.2% net</span>
                  </div>

                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Venue:</span>
                    <span className="font-bold text-white">Morpho Vault</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Execution:</span>
                    <span className="font-bold text-emerald-400">settled on Base</span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
                    <span>Tx Hash:</span>
                    <span className="text-neutral-400 font-mono">0x4e29…81fd</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleReplay}
              disabled={isSimulating}
              className="p-3.5 rounded-2xl bg-white text-black font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all cursor-pointer shadow-md w-full"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Simulating Pipeline...' : 'Replay Floor Flow'}</span>
            </button>
          </div>

        </div>

        {/* =========================================================================
            3. MARQUEE TICKERS: THE RAILS (Exchanges & Wallets)
            ========================================================================= */}
        <div className="w-full space-y-4 pt-4 pb-4 overflow-hidden relative z-20">
          
          <div className="text-center font-mono text-xs text-neutral-500 font-bold uppercase tracking-wider mb-2">
            Integrated Rails & Venues
          </div>

          {/* Marquee Row 1: Exchanges (Upbit, Coinbase, Binance, OKX, Bybit, Kraken, Bithumb, Gate) */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform">
              {[...EXCHANGES_RAILS, ...EXCHANGES_RAILS, ...EXCHANGES_RAILS, ...EXCHANGES_RAILS].map((exchange, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3.5 rounded-2xl bg-white border border-neutral-300/80 shadow-xs font-mono text-xs font-bold text-black flex items-center gap-2.5 hover:bg-neutral-50 transition-colors shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-[#3d5143] shrink-0" />
                  <span>{exchange}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2: Wallets (MetaMask, Phantom, Base, Coinbase Wallet, Rabby, Ledger, Backpack) */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform" style={{ animationDirection: 'reverse' }}>
              {[...WALLET_RAILS, ...WALLET_RAILS, ...WALLET_RAILS, ...WALLET_RAILS].map((wallet, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3.5 rounded-2xl bg-[#141820] border border-neutral-800 shadow-xs font-mono text-xs font-bold text-white flex items-center gap-2.5 hover:bg-neutral-800 transition-colors shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>{wallet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="pt-6 text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono text-neutral-500 leading-relaxed">
              Names shown indicate the kinds of rails agents are built to work across. No partnership or endorsement is implied.
            </p>
          </div>

        </div>

      </div>

      {/* =========================================================================
          4. BOTTOM BURN TRANSITION (ENDING EDGE)
          ========================================================================= */}
      <div className="absolute bottom-0 inset-x-0 h-64 sm:h-80 md:h-96 pointer-events-none z-30 opacity-95">
        <BurnTransition
          color="#D9D6CA"
          transitionColor="#FFFFFF"
          noiseScale={2.5}
          noiseIntensity={0.52}
          scrollSensitivity={0.015}
          baseAnimationSpeed={0.08}
          edgeSoftness={0.38}
          bloomIntensity={0.75}
          bloomRadius={0.35}
          parallaxEnabled={true}
          inverted={true}
          movement={{ horizontal: 'center', vertical: 0.5 }}
          className="h-full w-full"
        />
      </div>

    </section>
  );
};
