import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import crownImg from '../../../../assets/Crown.webp';
import { PhoneFrame } from './PhoneFrame';
import { LockScreen } from './LockScreen';
import { ChatScreen } from './ChatScreen';
import { smoothScrollSlowly } from './smoothScroll';
import { useConfettiCelebration } from './useConfettiCelebration';

export const MemoryWalletSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // The 15s chat lifecycle is a pure demo — don't burn timers/DOM work while
  // the section is off-screen. Restarting from the lock screen on re-entry is
  // the intended loop behavior anyway.
  const isInView = useInView(sectionRef, { amount: 0.25 });
  const [screenMode, setScreenMode] = useState<'lock' | 'chat'>('lock');
  const [chatTime, setChatTime] = useState('9:41');
  const [isTappingNotification, setIsTappingNotification] = useState(false);
  const [messageStage, setMessageStage] = useState(0);
  const [notificationKey, setNotificationKey] = useState(0);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

  useConfettiCelebration(confettiCanvasRef, isInView ? screenMode : 'lock', messageStage);

  // Manual or automatic notification click & app launch
  const triggerAppLaunch = useCallback(() => {
    setIsTappingNotification(true);
    // Tap press feedback for 350ms, then launch app
    setTimeout(() => {
      setScreenMode('chat');
      setMessageStage(0);
      setIsTappingNotification(false);
    }, 380);
  }, []);

  // Continuous Lifecycle Flow with Staggered Message Reveals
  useEffect(() => {
    if (!isInView) return;
    let cancelScroll: (() => void) | undefined;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (screenMode === 'lock') {
      // Reset lock-screen state on the next tick — no synchronous setState in effects
      timers.push(setTimeout(() => {
        setChatTime('9:41');
        setMessageStage(0);
        setIsTappingNotification(false);
      }, 0));

      // After 2.4s of lock screen, simulate tapping the notification to open app
      const tapTimer = setTimeout(() => {
        triggerAppLaunch();
      }, 2600);
      timers.push(tapTimer);
    } else if (screenMode === 'chat') {
      // 1. Initial position: top of chat, reset stage to 0
      if (chatScrollRef.current) {
        chatScrollRef.current.scrollTop = 0;
      }
      // Reset chat state on the next tick — no synchronous setState in effects
      timers.push(setTimeout(() => {
        setChatTime('9:41');
        setMessageStage(0);
      }, 0));

      // Part 1: 9:41 AM Trade Entry Messages appear ONE BY ONE
      timers.push(setTimeout(() => setMessageStage(1), 250));  // Msg 1: Bought coin
      timers.push(setTimeout(() => setMessageStage(2), 800));  // Msg 2: Entry?
      timers.push(setTimeout(() => setMessageStage(3), 1400)); // Msg 3: $XX Trade card
      timers.push(setTimeout(() => setMessageStage(4), 2000)); // Msg 4: Plan?
      timers.push(setTimeout(() => setMessageStage(5), 2600)); // Msg 5: Momentum 2x
      timers.push(setTimeout(() => setMessageStage(6), 3200)); // Msg 6: Keep me posted

      // When last message of Part 1 arrives ("sounds good. keep me posted"),
      // smoothly scroll up so Msg 6 moves to top and leaves the bottom blank
      timers.push(setTimeout(() => {
        if (chatScrollRef.current) {
          const target = Math.min(180, chatScrollRef.current.scrollHeight - chatScrollRef.current.clientHeight);
          cancelScroll = smoothScrollSlowly(chatScrollRef.current, target, 800);
        }
      }, 3800));

      // Part 2: 10:14 AM Messages appear one by one directly in that open space below Msg 6
      timers.push(setTimeout(() => {
        setMessageStage(7); // Msg 7: We hit target
        setChatTime('10:14');
      }, 4900));

      timers.push(setTimeout(() => {
        setMessageStage(8); // Msg 8: Take Profit Executed Card
      }, 6000));

      timers.push(setTimeout(() => {
        setMessageStage(9); // Msg 9: Profit locked in
      }, 7400));

      timers.push(setTimeout(() => {
        setMessageStage(10); // Msg 10: Perfect let it run
      }, 8400));

      // Pause 6.0s to view full results, then loop back to Lock Screen
      timers.push(setTimeout(() => {
        setScreenMode('lock');
        setMessageStage(0);
        setNotificationKey(prev => prev + 1);
      }, 15000));
    }

    return () => {
      if (cancelScroll) cancelScroll();
      timers.forEach(t => clearTimeout(t));
    };
  }, [screenMode, notificationKey, triggerAppLaunch, isInView]);

  // Synchronize smooth auto-scrolling on DOM updates as Part 2 messages render
  useEffect(() => {
    if (screenMode !== 'chat' || messageStage < 7) return;

    // Small delay ensures newly rendered message is in the DOM before calculating scrollHeight
    const timer = setTimeout(() => {
      if (chatScrollRef.current) {
        const maxScroll = chatScrollRef.current.scrollHeight - chatScrollRef.current.clientHeight;
        if (maxScroll > 0) {
          const duration = messageStage === 8 ? 800 : 500;
          smoothScrollSlowly(chatScrollRef.current, maxScroll, duration);
        }
      }
    }, 40);

    return () => clearTimeout(timer);
  }, [messageStage, screenMode]);

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
    <section ref={sectionRef} id="specialised-agent" className="w-full bg-transparent text-[#f3f2e6] pt-10 sm:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* =========================================================================
            MAIN SHOWCASE: LEFT CONTENT + RIGHT IPHONE
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-6 sm:mb-8">
          
          {/* LEFT COLUMN: SPECIALISED AGENT CONTENT */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f3f2e6] backdrop-blur-md border border-[#c4a978]/40 text-[11px] font-mono tracking-widest text-[#37312c] uppercase font-bold shadow-xs">
              <img src={crownImg} alt="Crown" className="w-3.5 h-3.5 object-contain" />
              <span className="text-[#37312c]">OUR SPECIALISED AGENT</span>
            </div>

            {/* Editorial Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#ffffff] tracking-tight leading-[1.06]">
              Agent hunts the signal. <br />
              <span className="font-serif italic font-bold text-[#ffffff]">
                So You Don't Have To.
              </span>
            </h2>

            {/* Sub-headline with bullet tags (White & Bold Italic) */}
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-2.5 text-sm sm:text-base text-[#ffffff] pt-1">
              <span className="font-mono uppercase tracking-wider text-xs sm:text-[13px] text-[#ffffff] font-bold">
                exchange listing alpha agent
              </span>
              <span className="text-[#ffffff]/60 text-xs">·</span>
              <span className="font-serif italic font-bold text-[#ffffff]">watches</span>
              <span className="text-[#ffffff]/60 text-xs">·</span>
              <span className="font-serif italic font-bold text-[#ffffff]">reasons</span>
              <span className="text-[#ffffff]/60 text-xs">·</span>
              <span className="font-serif italic font-bold text-[#ffffff]">acts</span>
            </div>

          </div>

          {/* RIGHT COLUMN: THE EXACT SILVER IPHONE (LOCK SCREEN + SCROLL-ANIMATED CHAT) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end lg:pr-10 xl:pr-16 relative">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 lg:left-auto lg:right-10 xl:lg:right-16 max-w-[320px] h-[590px] mx-auto lg:mx-0 bg-gradient-to-b from-[#887d6c]/30 via-[#887d6c]/15 to-transparent blur-3xl rounded-[4rem] pointer-events-none" />

            <PhoneFrame>
              <AnimatePresence mode="wait">
                {/* VIEW A: EXACT FULL-SCREEN LOCK SCREEN */}
                {screenMode === 'lock' && (
                  <LockScreen
                    key="lock-screen"
                    notificationKey={notificationKey}
                    isTapping={isTappingNotification}
                    onTap={triggerAppLaunch}
                  />
                )}

                {/* VIEW B: CONTINUOUS LIVE CHAT (EXPANDING APP LAUNCH ANIMATION) */}
                {screenMode === 'chat' && (
                  <ChatScreen
                    key="chat-screen"
                    chatTime={chatTime}
                    messageStage={messageStage}
                    chatScrollRef={chatScrollRef}
                    confettiCanvasRef={confettiCanvasRef}
                    onBack={() => setScreenMode('lock')}
                    onScroll={handleChatScroll}
                    onJumpToEnd={() => {
                      if (chatScrollRef.current) {
                        chatScrollRef.current.scrollTo({
                          top: chatScrollRef.current.scrollHeight,
                          behavior: 'smooth',
                        });
                      }
                    }}
                  />
                )}
              </AnimatePresence>
            </PhoneFrame>

          </div>

        </div>

      </div>
    </section>
  );
};
