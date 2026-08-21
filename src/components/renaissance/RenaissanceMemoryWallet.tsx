import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  Layers, 
  TrendingUp, 
  Search, 
  Lock,
  Eye,
  Activity,
  Gauge,
  Radio,
  SlidersHorizontal,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import crownImg from '../../assets/Crown.png';

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
  const [simulatedProfit, setSimulatedProfit] = useState<string>('+32.4%');

  const handleReplay = () => {
    setIsSimulating(true);
    setStepActive(1);
    setTimeout(() => setStepActive(2), 700);
    setTimeout(() => {
      setStepActive(3);
      setSimulatedProfit(`+${(28 + Math.random() * 8).toFixed(1)}%`);
      setIsSimulating(false);
    }, 1800);
  };

  return (
    <section id="specialised-agent" className="w-full bg-transparent text-[#f3f2e6] pt-12 sm:pt-16 pb-24 sm:pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* =========================================================================
            1. SECTION HEADER: SPECIALISED AGENTS
            ========================================================================= */}
        <div className="max-w-4xl mb-14 sm:mb-20 text-left space-y-4">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#c4a978]/35 text-[11px] font-mono tracking-widest text-[#dfc28d] uppercase font-semibold">
            <img src={crownImg} alt="Crown" className="w-3.5 h-3.5 object-contain" />
            <span>SPECIALISED AGENTS</span>
          </div>

          {/* Editorial Title */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#ffffff] tracking-tight leading-[1.02]">
            Agent hunts the signal. <br />
            <span className="font-serif italic font-normal text-[#dfc28d]">
              Your Always-On Profit Agent.
            </span>
          </h2>

          {/* Sub-headline with bullet tags */}
          <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base font-serif italic text-[#d4c8b6]">
            <span className="text-[#f7f2ea] font-medium not-italic font-mono uppercase tracking-wider text-xs sm:text-[13px] text-[#dfc28d]">
              exchange listing alpha agent
            </span>
            <span className="text-[#c4a978]">·</span>
            <span className="text-[#f3f2e6]">watches</span>
            <span className="text-[#c4a978]">·</span>
            <span className="text-[#f3f2e6]">reasons</span>
            <span className="text-[#c4a978]">·</span>
            <span className="text-[#f3f2e6]">acts</span>
          </div>
        </div>

        {/* =========================================================================
            2. THE 3-STAGE ALPHA PIPELINE: WATCHES → REASONS → ACTS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* STEP 1: WATCHES (01) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden bg-[#171411]/85 backdrop-blur-xl border border-[#c4a978]/35 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[#f7f2ea] border border-[#c4a978]/40 font-mono text-[10px] font-bold uppercase tracking-widest">
                  watch 01
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#dfc28d]">
                  <span className="w-2 h-2 rounded-full bg-[#dfc28d] animate-pulse" />
                  <span>Real-Time WebSocket Ingest</span>
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xs font-serif tracking-[0.14em] text-[#c7baa4] uppercase font-bold">
                  Listing Alpha Signal
                </h3>
                
                <div className="p-4 rounded-2xl bg-[#1f1a15]/90 border border-[#c4a978]/30 shadow-inner space-y-3 group">
                  <div className="flex items-start gap-2.5">
                    <Radio className="w-4 h-4 text-[#dfc28d] shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <p className="text-sm sm:text-base font-serif text-[#ffffff] font-semibold leading-snug">
                        Upbit KRW Listing Detected
                      </p>
                      <p className="text-xs font-serif italic text-[#dfc28d] mt-0.5">
                        Ticker $SOLV · Announcement block confirmed
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#bdae98]">
                    <span>Latency: 14ms</span>
                    <span>·</span>
                    <span>Source: API Websocket</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#d6c7b0] flex items-center justify-between">
              <span>Dispatched to Reasoning Cluster</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#dfc28d]" />
            </div>
          </div>

          {/* STEP 2: REASONS (02) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between relative overflow-hidden bg-[#171411]/85 backdrop-blur-xl border border-[#c4a978]/35 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#2a2219] text-[#dfc28d] border border-[#d4af37]/40 font-mono text-[10px] font-bold uppercase tracking-widest">
                  reason 02
                </span>
                <span className="text-xs font-serif italic text-[#d4c8b6]">
                  Multi-Factor Consensus
                </span>
              </div>

              {/* 3 Reasoning Sub-Nodes */}
              <div className="space-y-2.5 font-mono text-xs">
                
                {/* Node 1: Liquidity & Route */}
                <div className="p-3 rounded-2xl bg-[#1f1a15]/90 border border-[#c4a978]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#282119] border border-[#dfc28d]/40 flex items-center justify-center text-[#dfc28d]">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-[#f7f2ea] flex items-center gap-1.5">
                        <span className="text-[#dfc28d]">liquidity</span>
                        <span className="text-white/30">·</span>
                        <span>DEX depth &amp; price impact</span>
                      </div>
                      <div className="text-[10px] font-sans text-[#bdae98]">Uniswap v3 + Aerodrome pooled route</div>
                    </div>
                  </div>
                  <span className="text-[#4ade80] font-mono font-bold text-[11px] bg-[#1a261d] px-2 py-0.5 rounded-md border border-[#34d399]/40">
                    Optimal Route
                  </span>
                </div>

                {/* Node 2: Frontrun & MEV Protection */}
                <div className="p-3 rounded-2xl bg-[#1f1a15]/90 border border-[#c4a978]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#282119] border border-[#dfc28d]/40 flex items-center justify-center text-[#dfc28d]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-[#f7f2ea] flex items-center gap-1.5">
                        <span className="text-[#dfc28d]">mev guard</span>
                        <span className="text-white/30">·</span>
                        <span>Private RPC bundling</span>
                      </div>
                      <div className="text-[10px] font-sans text-[#bdae98]">Zero sandwich risk · Flashbots relay</div>
                    </div>
                  </div>
                  <span className="text-[#dfc28d] font-mono font-bold text-[11px] bg-white/5 px-2 py-0.5 rounded-md border border-white/20">
                    Protected ✓
                  </span>
                </div>

                {/* Node 3: Risk & Position Sizing */}
                <div className="p-3 rounded-2xl bg-[#1f1a15]/90 border border-[#c4a978]/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#282119] border border-[#dfc28d]/40 flex items-center justify-center text-[#dfc28d]">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-[#f7f2ea] flex items-center gap-1.5">
                        <span className="text-[#dfc28d]">risk envelope</span>
                        <span className="text-white/30">·</span>
                        <span>Cap bounded</span>
                      </div>
                      <div className="text-[10px] font-sans text-[#bdae98]">Max 15% wallet allocation · Stop-loss set</div>
                    </div>
                  </div>
                  <span className="text-[#4ade80] font-mono font-bold text-[11px] bg-[#1a261d] px-2 py-0.5 rounded-md border border-[#34d399]/40">
                    Approved ✓
                  </span>
                </div>

              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-serif italic text-[#dfc28d] flex items-center justify-between">
              <span>Strategy synthesized in 38ms</span>
              <CheckCircle2 className="w-4 h-4 text-[#dfc28d]" />
            </div>
          </div>

          {/* STEP 3: ACTS (03) */}
          <div className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-[#1e1a15]/95 backdrop-blur-xl text-white space-y-6 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-[#d4af37]/60">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#dfc28d] text-[#141210] font-mono text-[10px] font-bold uppercase tracking-widest">
                  act 03
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-[#4ade80] font-mono text-[10px] font-bold border border-[#4ade80]/30">
                  EXECUTED
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-serif tracking-[0.14em] text-[#dfc28d] uppercase font-bold">
                  Autonomous Fill &amp; Exit
                </h3>

                <div className="p-4 rounded-2xl bg-[#14110e]/90 border border-[#c4a978]/30 font-mono space-y-3 shadow-inner">
                  <div className="text-sm font-serif font-bold text-[#ffffff] leading-snug">
                    Snipe fill &amp; profit take · <span className="text-[#4ade80] font-mono font-bold">{simulatedProfit}</span>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-serif">
                    <span className="text-[#c7baa4]">Pair:</span>
                    <span className="font-bold text-[#ffffff]">$SOLV / USDC</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-serif">
                    <span className="text-[#c7baa4]">Settlement:</span>
                    <span className="font-bold text-[#dfc28d] font-mono">settled on Base</span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#a49682] pt-1 font-mono">
                    <span>Tx Hash:</span>
                    <span className="text-[#dfc28d]">0x7f1a…c98b</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleReplay}
              disabled={isSimulating}
              className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-[#c4a978]/50 text-[#f7f2ea] font-serif text-xs sm:text-[13px] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md w-full group"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#dfc28d] ${isSimulating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              <span>{isSimulating ? 'Simulating Alpha Hunt...' : 'Simulate Alpha Hunt'}</span>
            </button>
          </div>

        </div>

        {/* =========================================================================
            3. INTEGRATED RAILS & VENUES (MARQUEE TICKERS)
            ========================================================================= */}
        <div className="w-full space-y-4 pt-4 pb-4 overflow-hidden relative z-20">
          
          <div className="text-center font-serif italic text-sm text-[#d4c8b6] mb-2">
            Integrated Rails, Venues &amp; Wallets
          </div>

          {/* Marquee Row 1: Exchanges (Upbit, Coinbase, Binance, OKX, Bybit, Kraken, Bithumb, Gate) */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform">
              {[...EXCHANGES_RAILS, ...EXCHANGES_RAILS, ...EXCHANGES_RAILS, ...EXCHANGES_RAILS].map((exchange, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 rounded-2xl bg-[#1a1714]/80 backdrop-blur-md border border-[#c4a978]/30 shadow-xs font-serif text-xs sm:text-[13px] font-bold text-[#f7f2ea] flex items-center gap-2.5 hover:border-[#dfc28d]/60 transition-colors shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-[#dfc28d] shrink-0" />
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
                  className="px-6 py-3 rounded-2xl bg-[#141210]/90 backdrop-blur-md border border-[#c4a978]/30 shadow-xs font-serif text-xs sm:text-[13px] font-bold text-[#f7f2ea] flex items-center gap-2.5 hover:border-[#dfc28d]/60 transition-colors shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-[#4ade80] shrink-0" />
                  <span>{wallet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="pt-6 text-center max-w-3xl mx-auto">
            <p className="text-xs font-serif italic text-[#a49682] leading-relaxed">
              Names shown indicate the kinds of rails specialized agents are built to hunt and settle across. No partnership or endorsement is implied.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
