import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, 
  Lock,
  Wifi, 
  Battery,
  Flashlight,
  Camera,
  ChevronLeft,
  MoreHorizontal,
  Plus,
  Send,
  CheckCheck
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
  const [screenMode, setScreenMode] = useState<'lock' | 'chat'>('lock');
  const [notificationKey, setNotificationKey] = useState(0);

  // Auto transition demo or replay
  const handleReplay = () => {
    setIsSimulating(true);
    setScreenMode('lock');
    setNotificationKey(prev => prev + 1);

    // After 1.4s of lockscreen notification, open the chat app smoothly
    setTimeout(() => {
      setScreenMode('chat');
      setIsSimulating(false);
    }, 1600);
  };

  // Initial animation on mount: start with lock screen then animate into chat
  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenMode('chat');
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

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
              <span className="font-serif italic font-bold text-[#ffffff]">
                Your Always-On Profit Agent.
              </span>
            </h2>

            {/* Sub-headline with bullet tags (White & Bold Italic) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-base sm:text-lg font-serif italic font-bold text-[#ffffff] pt-1">
              <span className="font-mono uppercase tracking-wider text-xs sm:text-[13px] text-[#ffffff] not-italic font-bold">
                exchange listing alpha agent
              </span>
              <span className="text-[#ffffff]">·</span>
              <span className="text-[#ffffff]">watches</span>
              <span className="text-[#ffffff]">·</span>
              <span className="text-[#ffffff]">reasons</span>
              <span className="text-[#ffffff]">·</span>
              <span className="text-[#ffffff]">acts</span>
            </div>

            {/* Interactive Simulation Button & View Switcher */}
            <div className="pt-4 flex flex-wrap items-center gap-3 max-w-md">
              <button
                onClick={handleReplay}
                disabled={isSimulating}
                className="py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#c4a978]/50 text-[#f7f2ea] font-serif text-sm font-bold flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg group shrink-0"
              >
                <RefreshCw className={`w-4 h-4 text-[#dfc28d] ${isSimulating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                <span>{isSimulating ? 'Triggering Listing Snipe...' : 'Simulate Alpha Hunt'}</span>
              </button>

              <div className="inline-flex rounded-xl bg-black/40 border border-[#c4a978]/30 p-1 backdrop-blur-md">
                <button
                  onClick={() => setScreenMode('lock')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${screenMode === 'lock' ? 'bg-[#dfc28d] text-black font-bold' : 'text-[#d4c8b6] hover:text-white'}`}
                >
                  Lock Screen
                </button>
                <button
                  onClick={() => setScreenMode('chat')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${screenMode === 'chat' ? 'bg-[#dfc28d] text-black font-bold' : 'text-[#d4c8b6] hover:text-white'}`}
                >
                  Live Chat
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: THE EXACT SILVER IPHONE (WITH LOCK/CHAT TRANSITION ANIMATION) */}
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
                fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
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
                  fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
                }}
                className="absolute inset-0 overflow-hidden bg-[#0f0e0c]"
              >
                <AnimatePresence mode="wait">
                  
                  {/* ==========================================
                      VIEW A: EXACT FULL-SCREEN LOCK SCREEN
                      ========================================== */}
                  {screenMode === 'lock' && (
                    <motion.div
                      key="lock-screen"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04, filter: 'blur(3px)' }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-between overflow-hidden z-20 bg-[#0f0e0c]"
                    >
                      {/* #887d6c THEME WALLPAPER */}
                      <div className="absolute inset-0 bg-[#0f0e0c] overflow-hidden pointer-events-none z-0">
                        {/* Top curved ribbon */}
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

                        {/* Bottom inverted ribbon */}
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

                      {/* 1. Status Bar */}
                      <div className="relative z-30 pt-2.5 px-5 flex items-center justify-between text-white text-[11px] font-semibold select-none">
                        <span className="w-10 text-left pl-0.5 font-bold">9:41</span>

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

                      {/* 2. Clock & Date */}
                      <div className="relative z-20 pt-2 flex flex-col items-center justify-center text-center">
                        <Lock className="w-3 h-3 text-[#f9f7f4]/90 mb-1.5" />
                        
                        <div className="text-[12px] font-medium text-[#ede8e1] tracking-tight">
                          Monday, 12 May
                        </div>

                        <h1 className="text-[54px] sm:text-[60px] font-bold text-[#f9f7f4] leading-[1] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] my-0.5">
                          9:41
                        </h1>
                      </div>

                      {/* 3. Notification Banner */}
                      <div className="relative z-30 px-3 my-auto">
                        <motion.div
                          key={notificationKey}
                          initial={{ scale: 0.92, opacity: 0, y: 15 }}
                          animate={{ scale: 1, opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setScreenMode('chat')}
                          className="p-3 rounded-[20px] bg-[#24211b]/85 backdrop-blur-2xl border border-[#887d6c]/35 shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-start gap-2.5 cursor-pointer hover:border-[#dfc28d]/60 transition-all group"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#887d6c] via-[#bdae99] to-[#f0e8dc] p-[1.5px] shrink-0 shadow-[0_0_10px_rgba(136,125,108,0.6)]">
                            <div className="w-full h-full rounded-full bg-[#12100d] flex items-center justify-center">
                              <div className="w-3.5 h-3.5 rounded-full bg-[#38bdf8] flex items-center justify-center gap-[1.5px]">
                                <span className="w-0.5 h-0.5 rounded-full bg-black" />
                                <span className="w-0.5 h-0.5 rounded-full bg-black" />
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-[12px] font-bold text-white tracking-tight flex items-center gap-1.5">
                                <span>Upbit Agent</span>
                                <span className="text-[9px] text-[#dfc28d] opacity-0 group-hover:opacity-100 transition-opacity">tap to open →</span>
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
                      </div>

                      {/* 4. Bottom Shortcuts & Home Indicator */}
                      <div className="relative z-30 pb-2 px-5">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-white/25 transition-colors">
                            <Flashlight className="w-3.5 h-3.5" />
                          </div>

                          <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-white/25 transition-colors">
                            <Camera className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div className="w-28 h-1 bg-white/80 rounded-full mx-auto shadow-sm" />
                      </div>

                    </motion.div>
                  )}

                  {/* ==========================================
                      VIEW B: 100% FULL-SCREEN IMESSAGE LIGHT BEIGE THEME
                      ========================================== */}
                  {screenMode === 'chat' && (
                    <motion.div
                      key="chat-screen"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04, filter: 'blur(3px)' }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-between bg-[#fbf9f5] text-[#1c1917] z-30 overflow-hidden"
                    >
                      
                      {/* TOP STATUS BAR + HEADER CONTAINER (FLUSH TO TOP EDGE IN LIGHT BEIGE) */}
                      <div className="bg-[#ede7dc]/95 backdrop-blur-xl border-b border-[#dfd6c6] pt-2.5 px-3 pb-2 z-40 shrink-0 shadow-2xs">
                        
                        {/* Status bar */}
                        <div className="flex items-center justify-between text-[#1c1917] text-[11px] font-semibold select-none mb-1.5 px-2">
                          <span className="w-10 text-left font-bold">9:41</span>

                          {/* Dynamic Island */}
                          <div className="w-[94px] h-[24px] rounded-full bg-black flex items-center justify-between px-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.8)] border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-[#111] border border-white/20 flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-[#1e293b]" />
                            </div>
                            <div className="w-2 h-2 rounded-full bg-[#0a0f1d] border border-blue-900/40" />
                          </div>

                          {/* Indicators */}
                          <div className="w-10 flex items-center justify-end gap-1 text-[#1c1917] pr-0.5">
                            <div className="flex items-end gap-[1px] h-2">
                              <span className="w-[2px] h-1 bg-[#1c1917] rounded-xs" />
                              <span className="w-[2px] h-1.5 bg-[#1c1917] rounded-xs" />
                              <span className="w-[2px] h-2 bg-[#1c1917] rounded-xs" />
                            </div>
                            <Wifi className="w-2.5 h-2.5 text-[#1c1917]" />
                            <Battery className="w-3 h-3 text-[#1c1917]" />
                          </div>
                        </div>

                        {/* iMessage Header Bar */}
                        <div className="flex items-center justify-between pt-0.5 px-1">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setScreenMode('lock')}
                              className="p-1 -ml-1 text-[#007aff] hover:opacity-75 cursor-pointer transition-opacity flex items-center gap-0.5"
                              title="Back to Lock Screen"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>

                            {/* Agent Avatar */}
                            <div className="relative">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] p-[1px] shadow-sm">
                                <div className="w-full h-full rounded-full bg-[#1e1b4b] flex items-center justify-center">
                                  <div className="w-3.5 h-3.5 rounded-full bg-[#38bdf8] flex items-center justify-center gap-[1px]">
                                    <span className="w-0.5 h-0.5 rounded-full bg-black" />
                                    <span className="w-0.5 h-0.5 rounded-full bg-black" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Title & Online badge */}
                            <div>
                              <div className="text-[12px] font-bold text-[#1c1917] leading-tight flex items-center gap-1">
                                <span>Upbit Agent</span>
                              </div>
                              <div className="text-[9px] text-[#78716c] flex items-center gap-1 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                                <span>Online</span>
                              </div>
                            </div>
                          </div>

                          <button className="text-[#007aff] hover:opacity-75 p-1 cursor-pointer font-medium text-xs">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* IMESSAGE CHAT STREAM (LIGHT BEIGE WITH NO VISIBLE SCROLLBAR) */}
                      <div 
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
                        className="flex-1 px-3.5 py-2.5 overflow-y-auto space-y-2 text-[11px] bg-[#fbf9f5] [&::-webkit-scrollbar]:hidden"
                      >
                        
                        {/* 1. Agent: Bought coin (Light Beige Bubble) */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.04 }}
                          className="max-w-[82%] bg-[#eae3d5] rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-1"
                        >
                          <p className="leading-snug font-normal">
                            yo, i just bought that $XX coin the moment it got launched 🚀
                          </p>
                          <div className="text-[8px] text-[#78716c] text-right font-mono">
                            9:41 AM
                          </div>
                        </motion.div>

                        {/* 2. User: what's the entry? (iMessage Blue Bubble) */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12 }}
                          className="max-w-[78%] ml-auto bg-[#007aff] rounded-[16px] rounded-tr-xs p-2.5 text-white shadow-[0_2px_8px_rgba(0,122,255,0.28)] space-y-1"
                        >
                          <p className="leading-snug font-medium">
                            haha nice! what's the entry?
                          </p>
                          <div className="text-[8px] text-white/85 text-right flex items-center justify-end gap-1 font-mono">
                            <span>9:41 AM</span>
                            <CheckCheck className="w-3 h-3 text-white" />
                          </div>
                        </motion.div>

                        {/* 3. Agent: $XX Trade Card (Light Beige Card) */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="max-w-[78%] bg-[#eae3d5] border border-[#d8cfbe]/60 rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-2"
                        >
                          <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center gap-[1px]">
                              <span className="w-0.5 h-0.5 rounded-full bg-white" />
                              <span className="w-0.5 h-0.5 rounded-full bg-white" />
                            </div>
                            <span className="font-bold text-xs text-[#1c1917]">$XX</span>
                          </div>

                          <div className="space-y-0.5 text-[10px] text-[#44403c]">
                            <div className="flex justify-between">
                              <span>Entry Price</span>
                              <span className="text-[#1c1917] font-mono font-bold">$0.0214</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Amount</span>
                              <span className="text-[#1c1917] font-mono font-bold">4,000 XX</span>
                            </div>
                          </div>

                          <div className="text-[8px] text-[#78716c] text-right font-mono pt-0.5">
                            9:41 AM
                          </div>
                        </motion.div>

                        {/* 4. User: what's the plan? (iMessage Blue Bubble) */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.28 }}
                          className="max-w-[78%] ml-auto bg-[#007aff] rounded-[16px] rounded-tr-xs p-2.5 text-white shadow-[0_2px_8px_rgba(0,122,255,0.28)] space-y-1"
                        >
                          <p className="leading-snug font-medium">
                            looks good. what's the plan?
                          </p>
                          <div className="text-[8px] text-white/85 text-right flex items-center justify-end gap-1 font-mono">
                            <span>9:41 AM</span>
                            <CheckCheck className="w-3 h-3 text-white" />
                          </div>
                        </motion.div>

                        {/* 5. Agent: momentum 2x (Light Beige Bubble) */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.36 }}
                          className="max-w-[82%] bg-[#eae3d5] rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-1"
                        >
                          <p className="leading-snug font-normal">
                            riding the momentum. will take profit at 2x first 🎯
                          </p>
                          <div className="text-[8px] text-[#78716c] text-right font-mono">
                            9:41 AM
                          </div>
                        </motion.div>

                        {/* 6. User: keep me posted (iMessage Blue Bubble) */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.44 }}
                          className="max-w-[78%] ml-auto bg-[#007aff] rounded-[16px] rounded-tr-xs p-2.5 text-white shadow-[0_2px_8px_rgba(0,122,255,0.28)] space-y-1"
                        >
                          <p className="leading-snug font-medium">
                            sounds good. keep me posted.
                          </p>
                          <div className="text-[8px] text-white/85 text-right flex items-center justify-end gap-1 font-mono">
                            <span>9:42 AM</span>
                            <CheckCheck className="w-3 h-3 text-white" />
                          </div>
                        </motion.div>

                        {/* 7. Agent: will update when hit target (Light Beige Bubble) */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.52 }}
                          className="max-w-[82%] bg-[#eae3d5] rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-1"
                        >
                          <p className="leading-snug font-normal">
                            yep. i got you. will update when we hit target. 🤝
                          </p>
                          <div className="text-[8px] text-[#78716c] text-right font-mono">
                            9:42 AM
                          </div>
                        </motion.div>

                      </div>

                      {/* IMESSAGE LIGHT BEIGE BOTTOM INPUT BAR */}
                      <div className="bg-[#ede7dc]/95 backdrop-blur-xl border-t border-[#dfd6c6] px-3 pt-2 pb-3.5 relative z-40 shrink-0">
                        <div className="flex items-center gap-2 mb-2">
                          <button className="w-7 h-7 rounded-full bg-[#ded6c7] hover:bg-[#d5cbb9] flex items-center justify-center text-[#78716c] shrink-0 cursor-pointer transition-colors">
                            <Plus className="w-4 h-4 text-[#78716c]" />
                          </button>
                          
                          <div className="flex-1 bg-[#ffffff] rounded-full px-3.5 py-1.5 text-[10px] text-[#78716c] border border-[#d8cfbe] shadow-2xs">
                            iMessage
                          </div>

                          <button className="w-7 h-7 rounded-full bg-[#007aff] flex items-center justify-center text-white shadow-[0_2px_8px_rgba(0,122,255,0.4)] shrink-0 cursor-pointer hover:bg-[#0066d6] transition-colors">
                            <Send className="w-3.5 h-3.5 -ml-0.5" />
                          </button>
                        </div>

                        {/* Bottom Home indicator */}
                        <div className="w-28 h-1 bg-black/60 rounded-full mx-auto" />
                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>
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
