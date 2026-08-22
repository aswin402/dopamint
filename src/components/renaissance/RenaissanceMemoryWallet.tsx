import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Flashlight,
  Camera
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
  const [notificationKey, setNotificationKey] = useState(0);

  const handleReplay = () => {
    setIsSimulating(true);
    setStepActive(1);
    setTimeout(() => setStepActive(2), 700);
    setTimeout(() => {
      setStepActive(3);
      setNotificationKey(prev => prev + 1);
      setIsSimulating(false);
    }, 1800);
  };

  return (
    <section id="specialised-agent" className="w-full bg-transparent text-[#f3f2e6] pt-12 sm:pt-16 pb-24 sm:pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* =========================================================================
            MAIN SHOWCASE: LEFT CONTENT + RIGHT IPHONE
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          
          {/* LEFT COLUMN: SPECIALISED AGENT CONTENT */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#c4a978]/35 text-[11px] font-mono tracking-widest text-[#dfc28d] uppercase font-semibold">
              <img src={crownImg} alt="Crown" className="w-3.5 h-3.5 object-contain" />
              <span>OUR SPECIALISED AGENT</span>
            </div>

            {/* Editorial Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#ffffff] tracking-tight leading-[1.04]">
              Agent hunts the signal. <br />
              <span className="font-serif italic font-normal text-[#dfc28d]">
                Your Always-On Profit Agent.
              </span>
            </h2>

            {/* Sub-headline with bullet tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-base sm:text-lg font-serif italic text-[#d4c8b6] pt-1">
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

            {/* Interactive Simulation Button */}
            <div className="pt-4 max-w-sm">
              <button
                onClick={handleReplay}
                disabled={isSimulating}
                className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#c4a978]/50 text-[#f7f2ea] font-serif text-sm font-bold flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg group"
              >
                <RefreshCw className={`w-4 h-4 text-[#dfc28d] ${isSimulating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                <span>{isSimulating ? 'Triggering Live Listing Alert...' : 'Simulate Live Listing Alert'}</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: THE EXACT SILVER IPHONE (SHIFTED LEFTWARDS) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end lg:pr-10 xl:pr-16 relative select-none">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 lg:left-auto lg:right-10 xl:lg:right-16 max-w-[320px] h-[590px] mx-auto lg:mx-0 bg-gradient-to-b from-[#887d6c]/30 via-[#887d6c]/15 to-transparent blur-3xl rounded-[4rem] pointer-events-none" />

            {/* 
              THE PHONE (Matches CodePen .phone with #bbb09c outer frame,
              antenna bands, and CNC side buttons)
            */}
            <div 
              style={{
                aspectRatio: '37 / 76',
                height: '575px',
                maxHeight: '84vh',
                borderRadius: '50px',
                boxShadow: '0 0 0.1em 0.25em rgba(100, 92, 78, 0.45), 0 0 0 4px #bbb09c, 0 30px 70px -15px rgba(0, 0, 0, 0.95)',
              }}
              className="relative z-10 bg-black box-border"
            >
              {/* Antenna bands (top & bottom border cuts) */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50px',
                  right: '-4px',
                  bottom: '50px',
                  left: '-4px',
                  border: '4px solid #8f8472',
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Hardware Buttons */}
              <div className="absolute -inset-[4px] pointer-events-none">
                {/* Left side: Action Button + Volume Up + Volume Down */}
                <div className="absolute right-full top-[92px] w-[3px] flex flex-col gap-[12px]">
                  {/* Action button */}
                  <div 
                    style={{
                      height: '23px',
                      background: '#f2efe9',
                      boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
                      borderTopLeftRadius: '3px',
                      borderBottomLeftRadius: '3px',
                      marginBottom: '5px'
                    }}
                  />
                  {/* Vol Up */}
                  <div 
                    style={{
                      height: '46px',
                      background: '#f2efe9',
                      boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
                      borderTopLeftRadius: '3px',
                      borderBottomLeftRadius: '3px'
                    }}
                  />
                  {/* Vol Down */}
                  <div 
                    style={{
                      height: '46px',
                      background: '#f2efe9',
                      boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
                      borderTopLeftRadius: '3px',
                      borderBottomLeftRadius: '3px'
                    }}
                  />
                </div>

                {/* Right side: Power Button */}
                <div className="absolute left-full top-[148px] w-[3px] scale-x-[-1]">
                  <div 
                    style={{
                      height: '70px',
                      background: '#f2efe9',
                      boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
                      borderTopLeftRadius: '3px',
                      borderBottomLeftRadius: '3px'
                    }}
                  />
                </div>
              </div>

              {/* Screen Container */}
              <div 
                style={{
                  borderRadius: '50px',
                  border: '9px solid black',
                }}
                className="absolute inset-0 overflow-hidden flex flex-col justify-between"
              >
                {/* 
                  #887d6c THEME WALLPAPER (CodePen Top & Bottom Scrim Gradients with #887d6c Warm Antique Bronze/Gold Lighting)
                */}
                <div className="absolute inset-0 bg-[#0f0e0c] overflow-hidden pointer-events-none">
                  
                  {/* Top #887d6c Curved Ribbon Section */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      height: '58%',
                      borderBottomLeftRadius: '170px',
                      borderBottomRightRadius: '170px',
                      overflow: 'hidden',
                      background: 'radial-gradient(120% 110% at 50% 92.5%, #0f0e0c 33.3%, transparent 100%), radial-gradient(100% 66.6% at 110% 85%, #887d6c 33.3%, transparent 100%), radial-gradient(100% 66.6% at -10% 85%, #9d917f 33.3%, transparent 100%), radial-gradient(150% 100% at 50% 80%, transparent 35%, #b8ac9a 100%)',
                      backgroundColor: '#36312a',
                    }}
                  >
                    {/* Glowing highlight border line */}
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        border: '3px solid rgba(255, 255, 255, 0.7)',
                        borderRadius: 'inherit',
                        filter: 'blur(1px)',
                        maskImage: 'radial-gradient(100% 100% at 50% 70%, black 30%, transparent 50%)',
                        WebkitMaskImage: 'radial-gradient(100% 100% at 50% 70%, black 30%, transparent 50%)'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        mixBlendMode: 'overlay',
                        background: 'radial-gradient(80% 150% at 50% 100%, #887d6c, transparent 70%)'
                      }}
                    />
                  </div>

                  {/* Bottom #887d6c Inverted Ribbon Section */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 'auto 0 0 0',
                      height: '56%',
                      borderTopLeftRadius: '170px',
                      borderTopRightRadius: '170px',
                      overflow: 'hidden',
                      background: 'radial-gradient(120% 110% at 50% 92.5%, #0f0e0c 33.3%, transparent 100%), radial-gradient(100% 66.6% at 110% 85%, #6e6456 33.3%, transparent 100%), radial-gradient(100% 66.6% at -10% 85%, #887d6c 33.3%, transparent 100%), radial-gradient(150% 100% at 50% 80%, transparent 35%, #a69a88 100%)',
                      backgroundColor: '#23201b',
                    }}
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        border: '3px solid rgba(255, 255, 255, 0.6)',
                        borderRadius: 'inherit',
                        filter: 'blur(1px)',
                        maskImage: 'radial-gradient(100% 100% at 50% 70%, black 30%, transparent 50%)',
                        WebkitMaskImage: 'radial-gradient(100% 100% at 50% 70%, black 30%, transparent 50%)'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        mixBlendMode: 'overlay',
                        background: 'radial-gradient(80% 150% at 50% 100%, #887d6c, transparent 70%)'
                      }}
                    />
                  </div>

                </div>

                {/* =========================================================================
                    LOCK SCREEN UI (EXACT MATCH TO UPLOADED IMAGE)
                    ========================================================================= */}
                
                {/* 1. TOP STATUS BAR */}
                <div className="relative z-30 pt-2.5 px-5 flex items-center justify-between text-white text-[11px] font-semibold">
                  {/* Time */}
                  <span className="w-10 text-left pl-0.5 font-sans">9:41</span>

                  {/* Dynamic Island */}
                  <div className="w-[94px] h-[24px] rounded-full bg-black flex items-center justify-between px-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.8)] border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#111] border border-white/20 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#1e293b]" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#0a0f1d] border border-blue-900/40" />
                  </div>

                  {/* Indicators */}
                  <div className="w-10 flex items-center justify-end gap-1 text-white pr-0.5">
                    <div className="flex items-end gap-[1px] h-2">
                      <span className="w-[2px] h-1 bg-white rounded-xs" />
                      <span className="w-[2px] h-1.5 bg-white rounded-xs" />
                      <span className="w-[2px] h-2 bg-white rounded-xs" />
                    </div>
                    <Wifi className="w-2.5 h-2.5" />
                    <Battery className="w-3 h-3" />
                  </div>
                </div>

                {/* 2. LOCK SCREEN CLOCK & DATE */}
                <div className="relative z-20 pt-3 flex flex-col items-center justify-center text-center">
                  <Lock className="w-3 h-3 text-[#f9f7f4]/90 mb-1.5" />
                  
                  <div className="text-[12px] font-medium text-[#ede8e1] tracking-tight">
                    Monday, 12 May
                  </div>

                  <h1 className="text-[54px] sm:text-[60px] font-bold text-[#f9f7f4] leading-[1] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] my-0.5 font-sans">
                    9:41
                  </h1>
                </div>

                {/* 3. NOTIFICATION BANNER (MATCHES IMAGE EXACTLY) */}
                <div className="relative z-30 px-3 my-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={notificationKey}
                      initial={{ scale: 0.92, opacity: 0, y: 15 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="p-3 rounded-[20px] bg-[#24211b]/85 backdrop-blur-2xl border border-[#887d6c]/35 shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-start gap-2.5"
                    >
                      {/* Avatar with warm bronze ring */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#887d6c] via-[#bdae99] to-[#f0e8dc] p-[1.5px] shrink-0 shadow-[0_0_10px_rgba(136,125,108,0.6)]">
                        <div className="w-full h-full rounded-full bg-[#12100d] flex items-center justify-center">
                          {/* Cute robot face icon */}
                          <div className="w-3.5 h-3.5 rounded-full bg-[#38bdf8] flex items-center justify-center gap-[1.5px]">
                            <span className="w-0.5 h-0.5 rounded-full bg-black" />
                            <span className="w-0.5 h-0.5 rounded-full bg-black" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[12px] font-bold text-white tracking-tight">
                            Dopamint Agent
                          </h4>
                          <span className="text-[9px] text-[#c7bdae] font-medium">
                            now
                          </span>
                        </div>

                        <p className="text-[11px] text-[#f7f4ed] font-normal leading-snug mt-0.5">
                          yo, i just bought that $XX coin the moment it got launched 🚀
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 4. BOTTOM SHORTCUTS & HOME INDICATOR */}
                <div className="relative z-30 pb-2.5 px-5">
                  <div className="flex items-center justify-between mb-3">
                    {/* Flashlight button */}
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-white/25 transition-colors">
                      <Flashlight className="w-3.5 h-3.5" />
                    </div>

                    {/* Camera button */}
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-white/25 transition-colors">
                      <Camera className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Home bar */}
                  <div className="w-28 h-1 bg-white/80 rounded-full mx-auto shadow-sm" />
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
