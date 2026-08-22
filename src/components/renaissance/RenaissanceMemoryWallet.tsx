import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  TrendingUp, 
  Search, 
  Lock,
  Radio,
  Wifi, 
  Battery,
  SlidersHorizontal,
  ArrowUpRight,
  Eye,
  Activity,
  Layers
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
  const [islandExpanded, setIslandExpanded] = useState(false);

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
            <span className="font-mono uppercase tracking-wider text-xs sm:text-[13px] text-[#dfc28d] not-italic font-bold">
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
            2. MAIN SHOWCASE: 3-STEP INTELLIGENCE + THE SILVER IPHONE
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          
          {/* LEFT COLUMN: 3-STEP ALPHA PIPELINE BREAKDOWN */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Step 1: Watches */}
            <motion.div 
              whileHover={{ x: 4 }}
              className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 ${
                stepActive === 1 
                  ? 'bg-[#221c16]/95 border-[#dfc28d] shadow-[0_0_30px_rgba(223,194,141,0.2)]' 
                  : 'bg-[#171411]/85 border-[#c4a978]/30 hover:border-[#dfc28d]/50'
              } backdrop-blur-xl border space-y-3`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#dfc28d]/20 border border-[#dfc28d]/40 text-[#dfc28d] font-mono text-[10px] font-bold uppercase tracking-wider">
                    01 WATCHES
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                    Signal Detection &amp; Ingest
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#dfc28d] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfc28d] animate-ping" />
                  <span>14ms Latency</span>
                </span>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[#c7baa4] leading-relaxed">
                Connects directly to raw WebSocket feeds across 8 major exchanges (Upbit, Binance, Coinbase). Detects listing announcement blocks instantly before the crowd reacts.
              </p>
            </motion.div>

            {/* Step 2: Reasons */}
            <motion.div 
              whileHover={{ x: 4 }}
              className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 ${
                stepActive === 2 
                  ? 'bg-[#221c16]/95 border-[#dfc28d] shadow-[0_0_30px_rgba(223,194,141,0.2)]' 
                  : 'bg-[#171411]/85 border-[#c4a978]/30 hover:border-[#dfc28d]/50'
              } backdrop-blur-xl border space-y-3`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#dfc28d]/20 border border-[#dfc28d]/40 text-[#dfc28d] font-mono text-[10px] font-bold uppercase tracking-wider">
                    02 REASONS
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                    Multi-Factor Alpha Synthesis
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#4ade80] font-bold">
                  Zero MEV Risk ✓
                </span>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[#c7baa4] leading-relaxed">
                Computes optimal DEX depth, routes through Aerodrome/Uniswap v3, bundles transactions through private Flashbots RPCs, and enforces safety bounds within your custom risk envelope.
              </p>
            </motion.div>

            {/* Step 3: Acts */}
            <motion.div 
              whileHover={{ x: 4 }}
              className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 ${
                stepActive === 3 
                  ? 'bg-[#221c16]/95 border-[#dfc28d] shadow-[0_0_30px_rgba(223,194,141,0.2)]' 
                  : 'bg-[#171411]/85 border-[#c4a978]/30 hover:border-[#dfc28d]/50'
              } backdrop-blur-xl border space-y-3`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#dfc28d] text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                    03 ACTS
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                    Autonomous Execution &amp; Settle
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#4ade80] font-bold">
                  {simulatedProfit} Net
                </span>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[#c7baa4] leading-relaxed">
                Executes pre-listing sniper orders, monitors momentum in milliseconds, captures maximum profit, and settles directly to your self-custody wallet on Base.
              </p>
            </motion.div>

            {/* Interactive Simulation Action */}
            <div className="pt-2">
              <button
                onClick={handleReplay}
                disabled={isSimulating}
                className="w-full py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#c4a978]/50 text-[#f7f2ea] font-serif text-sm font-bold flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg group"
              >
                <RefreshCw className={`w-4 h-4 text-[#dfc28d] ${isSimulating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                <span>{isSimulating ? 'Simulating Alpha Hunt Pipeline...' : 'Replay Alpha Hunt Flow'}</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: THE SILVER IPHONE */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 max-w-[360px] h-[640px] mx-auto bg-gradient-to-b from-[#e2e8f0]/15 via-[#94a3b8]/10 to-transparent blur-3xl rounded-[4rem] pointer-events-none" />

            {/* 
              PHONE CHASSIS (SILVER THEME)
              Aspect ratio 37/76, with metallic silver bevels and CNC-cut side buttons
            */}
            <div className="relative z-10 w-[310px] sm:w-[350px] md:w-[370px] h-[620px] sm:h-[690px] md:h-[720px] bg-black rounded-[52px] sm:rounded-[56px] p-[10px] sm:p-[12px] shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_0_0_4px_#cbd5e1,0_0_0_5.5px_#64748b,0_30px_70px_-15px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden select-none">
              
              {/* --- HARDWARE BUTTONS (LEFT & RIGHT SILVER EDGES) --- */}
              {/* Left: Action Button + Volume Up + Volume Down */}
              <div className="absolute -left-[5px] top-[110px] w-[5px] h-[26px] bg-gradient-to-r from-[#94a3b8] to-[#e2e8f0] rounded-l-[3px] shadow-[inset_1px_0_1px_rgba(255,255,255,0.7)]" />
              <div className="absolute -left-[5px] top-[150px] w-[5px] h-[48px] bg-gradient-to-r from-[#94a3b8] to-[#e2e8f0] rounded-l-[3px] shadow-[inset_1px_0_1px_rgba(255,255,255,0.7)]" />
              <div className="absolute -left-[5px] top-[210px] w-[5px] h-[48px] bg-gradient-to-r from-[#94a3b8] to-[#e2e8f0] rounded-l-[3px] shadow-[inset_1px_0_1px_rgba(255,255,255,0.7)]" />
              
              {/* Right: Power / Siri Button */}
              <div className="absolute -right-[5px] top-[160px] w-[5px] h-[75px] bg-gradient-to-l from-[#94a3b8] to-[#e2e8f0] rounded-r-[3px] shadow-[inset_-1px_0_1px_rgba(255,255,255,0.7)]" />

              {/* --- SCREEN CONTAINER --- */}
              <div className="relative w-full h-full bg-[#08090d] rounded-[44px] sm:rounded-[48px] overflow-hidden flex flex-col justify-between border border-white/10 shadow-inner">
                
                {/* SILVER THEME GLOWING WALLPAPER (Top and bottom smooth radial scrims) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Top Silver Glow */}
                  <div className="absolute -top-12 -left-12 -right-12 h-[340px] bg-[radial-gradient(circle_at_50%_0%,_rgba(226,232,240,0.32)_0%,_rgba(148,163,184,0.16)_40%,_transparent_75%)]" />
                  
                  {/* Middle atmospheric mesh */}
                  <div className="absolute top-1/3 -left-20 -right-20 h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(203,213,225,0.1)_0%,_transparent_70%)]" />

                  {/* Bottom Silver/Moonlight Glow */}
                  <div className="absolute -bottom-16 -left-12 -right-12 h-[300px] bg-[radial-gradient(circle_at_50%_100%,_rgba(241,245,249,0.25)_0%,_rgba(148,163,184,0.1)_45%,_transparent_80%)]" />
                </div>

                {/* --- STATUS BAR & DYNAMIC ISLAND --- */}
                <div className="relative z-30 pt-3 px-6 flex items-center justify-between text-white text-[11px] font-semibold tracking-tight">
                  {/* Left: Clock */}
                  <span className="w-12 text-left pl-1 font-mono">9:41</span>

                  {/* Center: Dynamic Island */}
                  <motion.div
                    onClick={() => setIslandExpanded(!islandExpanded)}
                    animate={{
                      width: islandExpanded ? '92%' : '110px',
                      height: islandExpanded ? '64px' : '28px',
                      borderRadius: islandExpanded ? '20px' : '14px',
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    className="bg-black border border-white/15 px-3 py-1 cursor-pointer flex items-center justify-between overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.8)] z-40"
                  >
                    {!islandExpanded ? (
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                          <span className="text-[10px] font-mono text-white/90 uppercase font-bold tracking-wider">
                            ALPHA
                          </span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b] border border-white/20 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-[#0284c7]" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex items-center justify-between gap-2 px-1">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                            <Radio className="w-3.5 h-3.5 text-[#38bdf8] animate-pulse" />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-white leading-tight">Upbit $SOLV Alpha</div>
                            <div className="text-[9px] text-[#94a3b8] font-mono">Sniper armed · Sub-second fill</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#4ade80] bg-[#14532d]/60 px-2 py-0.5 rounded-md border border-[#22c55e]/40">
                          LIVE
                        </span>
                      </div>
                    )}
                  </motion.div>

                  {/* Right: Signal, Wifi, Battery */}
                  <div className="w-12 flex items-center justify-end gap-1.5 text-white/90 pr-1">
                    <span className="text-[10px] font-mono">5G</span>
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* --- SCREEN APP CONTENT: ALWAYS-ON PROFIT AGENT --- */}
                <div className="relative z-20 flex-1 px-4 py-3 sm:px-5 sm:py-4 flex flex-col justify-between overflow-y-auto no-scrollbar space-y-3">
                  
                  {/* Header: Agent Identity */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm">
                        <img src={crownImg} alt="Crown" className="w-4 h-4 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-xs sm:text-sm text-white tracking-wide">
                          Dope Alpha Hunter
                        </h3>
                        <p className="text-[10px] font-mono text-[#94a3b8]">
                          Exchange Listing Sentinel
                        </p>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-[#166534]/50 border border-[#22c55e]/40 text-[#4ade80] text-[9px] font-mono font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                      <span>ACTIVE</span>
                    </span>
                  </div>

                  {/* Card 1: Signal Radar Alert */}
                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#cbd5e1]">
                      <span className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <Radio className="w-3 h-3 animate-ping" />
                        <span>WATCHING 8 VENUES</span>
                      </span>
                      <span>14ms Latency</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs sm:text-[13px] font-serif font-bold text-white">
                          Upbit KRW Listing Signal
                        </div>
                        <div className="text-[10px] text-[#94a3b8] font-mono">
                          Ticker: <span className="text-[#38bdf8] font-bold">$SOLV</span> · Block Confirmed
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-xl bg-[#0369a1]/40 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8]">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card 2: 3-Factor Real-time Consensus Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center space-y-0.5">
                      <div className="text-[8px] font-mono uppercase text-[#94a3b8] font-semibold">Route</div>
                      <div className="text-[10px] font-mono font-bold text-white">Aerodrome</div>
                      <div className="text-[8px] text-[#4ade80] font-mono">0.02% Slip</div>
                    </div>

                    <div className="p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center space-y-0.5">
                      <div className="text-[8px] font-mono uppercase text-[#94a3b8] font-semibold">MEV Guard</div>
                      <div className="text-[10px] font-mono font-bold text-white">Private RPC</div>
                      <div className="text-[8px] text-[#38bdf8] font-mono">0 Sandwich</div>
                    </div>

                    <div className="p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center space-y-0.5">
                      <div className="text-[8px] font-mono uppercase text-[#94a3b8] font-semibold">Risk Cap</div>
                      <div className="text-[10px] font-mono font-bold text-white">15% Max</div>
                      <div className="text-[8px] text-[#4ade80] font-mono">Guarded ✓</div>
                    </div>
                  </div>

                  {/* Card 3: Live Execution & Profit Settle */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/95 border border-[#38bdf8]/40 shadow-xl space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#94a3b8]">Autonomous Fill &amp; Exit</span>
                      <span className="text-[#38bdf8] font-bold">Base Mainnet</span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xl sm:text-2xl font-mono font-black text-[#4ade80] tracking-tight">
                          {simulatedProfit}
                        </div>
                        <div className="text-[10px] font-serif italic text-[#cbd5e1]">
                          Net Realized Alpha
                        </div>
                      </div>

                      <div className="text-right font-mono text-[9px] text-[#94a3b8] space-y-0.5">
                        <div>TX: <span className="text-white">0x7f1a…c98b</span></div>
                        <div>Settled: <span className="text-[#4ade80]">3.2s</span></div>
                      </div>
                    </div>
                  </div>

                  {/* In-App Action Button */}
                  <button
                    onClick={handleReplay}
                    disabled={isSimulating}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#e2e8f0] via-white to-[#cbd5e1] hover:from-white hover:to-[#e2e8f0] text-black font-serif text-xs font-bold flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(255,255,255,0.2)] transition-all cursor-pointer group"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-black ${isSimulating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                    <span>{isSimulating ? 'Hunting Alpha...' : 'Simulate Alpha Hunt'}</span>
                  </button>

                </div>

                {/* --- HOME INDICATOR BAR --- */}
                <div className="relative z-30 pb-2 flex justify-center">
                  <div className="w-28 h-1 bg-white/70 rounded-full shadow-xs" />
                </div>

              </div>
            </div>

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
