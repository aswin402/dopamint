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
  const [screenMode, setScreenMode] = useState<'lock' | 'chat'>('lock');
  const [chatTime, setChatTime] = useState('9:41');
  const [isTappingNotification, setIsTappingNotification] = useState(false);
  const [notificationKey, setNotificationKey] = useState(0);
  const chatScrollRef = React.useRef<HTMLDivElement>(null);

  // Smooth slow scroller function using iOS easeInOut cubic curve
  const smoothScrollSlowly = React.useCallback((
    element: HTMLElement,
    target: number,
    duration = 3400
  ) => {
    const start = element.scrollTop;
    const change = target - start;
    if (Math.abs(change) < 2) return () => {};
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    let animationFrameId: number;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      element.scrollTop = start + change * eased;

      if (eased > 0.42) {
        setChatTime('10:14');
      } else {
        setChatTime('9:41');
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateScroll);
      }
    };

    animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Manual or automatic notification click & app launch
  const triggerAppLaunch = React.useCallback(() => {
    setIsTappingNotification(true);
    // Tap press feedback for 350ms, then launch app
    setTimeout(() => {
      setScreenMode('chat');
      setIsTappingNotification(false);
    }, 380);
  }, []);

  // Continuous Lifecycle Flow
  useEffect(() => {
    let cancelScroll: (() => void) | undefined;
    let tapTimer: ReturnType<typeof setTimeout>;
    let scrollStartTimer: ReturnType<typeof setTimeout>;
    let resetTimer: ReturnType<typeof setTimeout>;

    if (screenMode === 'lock') {
      setChatTime('9:41');
      setIsTappingNotification(false);

      // After 2.4s of lock screen, simulate tapping the notification to open app
      tapTimer = setTimeout(() => {
        triggerAppLaunch();
      }, 2600);
    } else if (screenMode === 'chat') {
      // 1. Initial position: top of chat
      if (chatScrollRef.current) {
        chatScrollRef.current.scrollTop = 0;
      }
      setChatTime('9:41');

      // 2. Pause for 1.8s, then smoothly & slowly scroll down to reveal Take Profit
      scrollStartTimer = setTimeout(() => {
        if (chatScrollRef.current) {
          const maxScroll = chatScrollRef.current.scrollHeight - chatScrollRef.current.clientHeight;
          cancelScroll = smoothScrollSlowly(chatScrollRef.current, maxScroll, 3400);
        }
      }, 1800);

      // 3. After full demonstration (~10s), cycle back to Lock Screen
      resetTimer = setTimeout(() => {
        setScreenMode('lock');
        setNotificationKey(prev => prev + 1);
      }, 10200);
    }

    return () => {
      if (cancelScroll) cancelScroll();
      clearTimeout(tapTimer);
      clearTimeout(scrollStartTimer);
      clearTimeout(resetTimer);
    };
  }, [screenMode, notificationKey, triggerAppLaunch, smoothScrollSlowly]);

  // Handle user manual scroll to update clock dynamically
  const handleChatScroll = () => {
    if (chatScrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatScrollRef.current;
      if (scrollTop > (scrollHeight - clientHeight) * 0.4) {
        setChatTime('10:14');
      } else {
        setChatTime('9:41');
      }
    }
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

          </div>

          {/* RIGHT COLUMN: THE EXACT SILVER IPHONE (LOCK SCREEN + SCROLL-ANIMATED CHAT) */}
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

              {/* Screen Container (Guaranteed Hardware-Level Corner Clipping) */}
              <div 
                style={{
                  borderRadius: '50px',
                  border: '9px solid black',
                  fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
                  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                  maskImage: 'radial-gradient(white, black)',
                  WebkitClipPath: 'inset(0 round 41px)',
                  clipPath: 'inset(0 round 41px)',
                  isolation: 'isolate',
                  contain: 'paint',
                  transform: 'translateZ(0)',
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
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
                      style={{ 
                        fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
                        borderRadius: '41px',
                      }}
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

                      {/* 3. Notification Banner (With Animated Tap Highlight) */}
                      <div className="relative z-30 px-3 my-auto">
                        <motion.div
                          key={notificationKey}
                          initial={{ scale: 0.88, opacity: 0, y: -20 }}
                          animate={{ 
                            scale: isTappingNotification ? 0.94 : 1, 
                            opacity: 1, 
                            y: 0,
                            boxShadow: isTappingNotification ? '0 0 24px rgba(0, 122, 255, 0.45)' : '0 16px 36px rgba(0,0,0,0.6)'
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.94 }}
                          onClick={triggerAppLaunch}
                          className={`p-3 rounded-[20px] backdrop-blur-2xl border transition-all duration-200 flex items-start gap-2.5 cursor-pointer group relative ${
                            isTappingNotification 
                              ? 'bg-[#2f2b23] border-[#007aff]/80 shadow-[0_0_20px_rgba(0,122,255,0.4)]' 
                              : 'bg-[#24211b]/85 border-[#887d6c]/35 hover:border-[#dfc28d]/60'
                          }`}
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
                      VIEW B: CONTINUOUS LIVE CHAT (EXPANDING APP LAUNCH ANIMATION)
                      ========================================== */}
                  {screenMode === 'chat' && (
                    <motion.div
                      key="chat-screen"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
                      style={{ 
                        fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
                        borderRadius: '41px',
                      }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-between bg-[#fbf9f5] text-[#1c1917] z-30 overflow-hidden"
                    >
                      
                      {/* TOP STATUS BAR + HEADER CONTAINER */}
                      <div className="bg-[#ede7dc]/95 backdrop-blur-xl border-b border-[#dfd6c6] pt-2.5 px-3 pb-2 z-40 shrink-0 shadow-2xs">
                        
                        {/* Status bar (Dynamic Clock 9:41 -> 10:14) */}
                        <div className="flex items-center justify-between text-[#1c1917] text-[11px] font-semibold select-none mb-1.5 px-2">
                          <span className="w-10 text-left font-bold transition-all duration-300">{chatTime}</span>

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

                          <button 
                            onClick={() => setScreenMode('lock')}
                            className="text-[#007aff] hover:opacity-75 p-1 cursor-pointer font-medium text-xs flex items-center gap-1"
                            title="Back to Lock Screen"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* UNIFIED CONTINUOUS CHAT STREAM (SMOOTH SCROLL ANIMATED) */}
                      <div 
                        ref={chatScrollRef}
                        onScroll={handleChatScroll}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
                        className="flex-1 px-3.5 py-3 overflow-y-auto space-y-2.5 text-[11px] bg-[#fbf9f5] [&::-webkit-scrollbar]:hidden scroll-smooth"
                      >
                        
                        {/* =========================================================
                            PART 1: 9:41 AM — LISTING SNIPE & TRADE ENTRY
                            ========================================================= */}
                        
                        {/* 1. Agent: Bought coin */}
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

                        {/* 2. User: what's the entry? */}
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

                        {/* 3. Agent: $XX Trade Card */}
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

                        {/* 4. User: what's the plan? */}
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

                        {/* 5. Agent: momentum 2x */}
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

                        {/* 6. User: keep me posted */}
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
                            <span>9:41 AM</span>
                            <CheckCheck className="w-3 h-3 text-white" />
                          </div>
                        </motion.div>

                        {/* =========================================================
                            PART 2: 10:14 AM — TAKE PROFIT TARGET HIT & EXECUTED
                            ========================================================= */}

                        {/* 7. Agent: We hit target */}
                        <div className="pt-2">
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.52 }}
                            className="max-w-[82%] bg-[#eae3d5] rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-1"
                          >
                            <p className="leading-snug font-normal">
                              we hit the target! 🎯 <br />
                              taking profit now...
                            </p>
                            <div className="text-[8px] text-[#78716c] text-right font-mono">
                              10:14 AM
                            </div>
                          </motion.div>
                        </div>

                        {/* 8. THE TAKE PROFIT EXECUTED CARD */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96, y: 8 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="w-full bg-[#eae3d5] border border-[#d8cfbe] rounded-[20px] rounded-tl-xs p-3 text-[#1c1917] shadow-xs space-y-2.5"
                        >
                          {/* Card Header: $XX + +142.36% */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-[#1c1917] flex items-center justify-center">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#38bdf8] flex items-center justify-center gap-[1px]">
                                  <span className="w-0.5 h-0.5 rounded-full bg-black" />
                                  <span className="w-0.5 h-0.5 rounded-full bg-black" />
                                </div>
                              </div>
                              <span className="font-bold text-sm text-[#1c1917] tracking-tight">$XX</span>
                            </div>

                            <span className="text-xs font-bold font-mono text-[#15803d]">
                              +142.36%
                            </span>
                          </div>

                          {/* Inner Mint/Emerald Profit Box */}
                          <div className="bg-[#e4f6eb] border border-[#86efac] rounded-[14px] p-2.5 text-center shadow-xs">
                            <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#15803d] uppercase tracking-wider">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#16a34a] text-white flex items-center justify-center text-[9px] font-black">✓</span>
                              <span>TAKE PROFIT EXECUTED</span>
                            </div>

                            <div className="text-[9px] text-[#166534] font-medium mt-1">
                              Total Profit
                            </div>

                            <div className="text-[23px] font-bold text-[#15803d] font-mono tracking-tight leading-tight my-0.5">
                              $4,286.40
                            </div>

                            <div className="text-[9px] text-[#16a34a] font-semibold">
                              +142.36%)
                            </div>
                          </div>

                          {/* Detail Metric Rows */}
                          <div className="space-y-1 text-[10px] text-[#44403c] pt-0.5">
                            <div className="flex justify-between">
                              <span className="text-[#57534e]">Take Profit Amount</span>
                              <span className="text-[#1c1917] font-mono font-bold">$3,000.00</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#57534e]">Remaining Position</span>
                              <span className="text-[#1c1917] font-mono font-bold">$1,286.40</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#57534e]">Avg. Sell Price</span>
                              <span className="text-[#1c1917] font-mono font-bold">$0.0528</span>
                            </div>
                          </div>

                          <div className="text-[8px] text-[#78716c] text-right font-mono pt-0.5 border-t border-[#d8cfbe]/40">
                            10:14 AM
                          </div>
                        </motion.div>

                        {/* 9. Agent: Profit locked in */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.68 }}
                          className="max-w-[82%] bg-[#eae3d5] rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-1"
                        >
                          <p className="leading-snug font-normal">
                            profit locked in! 💰 <br />
                            let it run with the remaining bag?
                          </p>
                          <div className="text-[8px] text-[#78716c] text-right font-mono">
                            10:14 AM
                          </div>
                        </motion.div>

                        {/* 10. User: perfect. let it run. */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.76 }}
                          className="max-w-[78%] ml-auto bg-[#007aff] rounded-[16px] rounded-tr-xs p-2.5 text-white shadow-[0_2px_8px_rgba(0,122,255,0.28)] space-y-1 pb-1"
                        >
                          <p className="leading-snug font-medium">
                            perfect. let it run. 🙌
                          </p>
                          <div className="text-[8px] text-white/85 text-right flex items-center justify-end gap-1 font-mono">
                            <span>10:15 AM</span>
                            <CheckCheck className="w-3 h-3 text-white" />
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
                            Message Upbit Agent...
                          </div>

                          <button 
                            onClick={() => {
                              if (chatScrollRef.current) {
                                chatScrollRef.current.scrollTo({
                                  top: chatScrollRef.current.scrollHeight,
                                  behavior: 'smooth',
                                });
                              }
                            }}
                            className="w-7 h-7 rounded-full bg-[#007aff] flex items-center justify-center text-white shadow-[0_2px_8px_rgba(0,122,255,0.4)] shrink-0 cursor-pointer hover:bg-[#0066d6] transition-colors"
                          >
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
