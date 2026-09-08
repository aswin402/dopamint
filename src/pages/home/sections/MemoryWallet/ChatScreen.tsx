import React, { type RefObject } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  MoreHorizontal,
  Plus,
  Send,
  CheckCheck
} from 'lucide-react';
import { TakeProfitCard } from './TakeProfitCard';
import { IPhoneStatusBar } from './IPhoneStatusBar';
import { AgentAvatar } from './AgentAvatar';
import { CHAT_MESSAGES, NOTIFICATION_DATA } from '@/data/chatConversation';

interface ChatScreenProps {
  chatTime: string;
  messageStage: number;
  chatScrollRef: RefObject<HTMLDivElement | null>;
  confettiCanvasRef: RefObject<HTMLCanvasElement | null>;
  onBack: () => void;
  onScroll: () => void;
  onJumpToEnd: () => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({
  chatTime,
  messageStage,
  chatScrollRef,
  confettiCanvasRef,
  onBack,
  onScroll,
  onJumpToEnd,
}) => {
  return (
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
      {/* CELEBRATORY CONFETTI CANVAS OVERLAY */}
      <canvas 
        ref={confettiCanvasRef} 
        className="absolute inset-0 pointer-events-none z-50 w-full h-full"
      />
      
      {/* TOP STATUS BAR + HEADER CONTAINER */}
      <div className="bg-[#ede7dc]/95 backdrop-blur-xl border-b border-[#dfd6c6] pt-2.5 px-3 pb-2 z-40 shrink-0 shadow-2xs">
        
        {/* Reusable iPhone Status Bar */}
        <IPhoneStatusBar time={chatTime} theme="light" className="mb-1.5 px-2" />

        {/* iMessage Header Bar */}
        <div className="flex items-center justify-between pt-0.5 px-1">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onBack}
              className="p-1 -ml-1 text-[#007aff] hover:opacity-75 cursor-pointer transition-opacity flex items-center gap-0.5"
              title="Back to Lock Screen"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Reusable Agent Avatar */}
            <AgentAvatar size="sm" />

            {/* Title & Online badge */}
            <div>
              <div className="text-[12px] font-bold text-[#1c1917] leading-tight flex items-center gap-1">
                <span>{NOTIFICATION_DATA.title}</span>
              </div>
              <div className="text-[9px] text-[#78716c] flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                <span>Online</span>
              </div>
            </div>
          </div>

          <button 
            onClick={onBack}
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
        onScroll={onScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
        className="flex-1 px-3 py-2.5 overflow-y-auto space-y-2 text-[11px] bg-[#fbf9f5] [&::-webkit-scrollbar]:hidden scroll-smooth pb-5"
      >
        
        {/* =========================================================
            PART 1: 9:41 AM — LISTING SNIPE & TRADE ENTRY (APPEARS ONE BY ONE)
            ========================================================= */}
        
        {CHAT_MESSAGES.filter((msg) => messageStage >= msg.stage).map((msg) => {
          if (msg.isCard === 'take-profit') {
            return <TakeProfitCard key={`stage-${msg.stage}`} />;
          }

          if (msg.isCard === 'trade' && msg.tradeDetails) {
            return (
              <motion.div
                key={`stage-${msg.stage}`}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[78%] bg-[#eae3d5] border border-[#d8cfbe]/60 rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-2"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-br from-[#0b84ff] to-[#5ec8ff] flex items-center justify-center text-[9px] text-white font-bold">
                    X
                  </div>
                  <span className="font-bold text-xs text-[#1c1917]">{msg.tradeDetails.symbol}</span>
                </div>

                <div className="space-y-0.5 text-[10px] text-[#44403c]">
                  <div className="flex justify-between">
                    <span>Entry Price</span>
                    <span className="text-[#1c1917] font-mono font-bold">{msg.tradeDetails.entryPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount</span>
                    <span className="text-[#1c1917] font-mono font-bold">{msg.tradeDetails.amount}</span>
                  </div>
                </div>

                <div className="text-[8px] text-[#78716c] text-right font-mono pt-0.5">
                  {msg.time}
                </div>
              </motion.div>
            );
          }

          if (msg.sender === 'user') {
            return (
              <motion.div
                key={`stage-${msg.stage}`}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[78%] ml-auto bg-[#007aff] rounded-[16px] rounded-tr-xs p-2.5 text-white shadow-[0_2px_8px_rgba(0,122,255,0.28)] space-y-1"
              >
                <p className="leading-snug font-medium">
                  {msg.text}
                </p>
                <div className="text-[8px] text-white/85 text-right flex items-center justify-end gap-1 font-mono">
                  <span>{msg.time}{msg.delivered ? ' · Delivered' : ''}</span>
                  <CheckCheck className="w-3 h-3 text-white" />
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={`stage-${msg.stage}`}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[82%] bg-[#eae3d5] rounded-[16px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-2xs space-y-1"
            >
              <p className="leading-snug font-normal whitespace-pre-line">
                {msg.text}
              </p>
              <div className="text-[8px] text-[#78716c] text-right font-mono">
                {msg.time}
              </div>
            </motion.div>
          );
        })}

      </div>

      {/* IMESSAGE LIGHT BEIGE BOTTOM INPUT BAR */}
      <div className="bg-[#ede7dc]/95 backdrop-blur-xl border-t border-[#dfd6c6] px-3 pt-2 pb-3.5 relative z-40 shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <button className="w-7 h-7 rounded-full bg-[#ded6c7] hover:bg-[#d5cbb9] flex items-center justify-center text-[#78716c] shrink-0 cursor-pointer transition-colors">
            <Plus className="w-4 h-4 text-[#78716c]" />
          </button>
          
          <div className="flex-1 bg-[#ffffff] rounded-full px-3.5 py-1.5 text-[10px] text-[#78716c] border border-[#d8cfbe] shadow-2xs">
            Message New Listing Agent...
          </div>

          <button 
            onClick={onJumpToEnd}
            className="w-7 h-7 rounded-full bg-[#007aff] flex items-center justify-center text-white shadow-[0_2px_8px_rgba(0,122,255,0.4)] shrink-0 cursor-pointer hover:bg-[#0066d6] transition-colors"
          >
            <Send className="w-3.5 h-3.5 -ml-0.5" />
          </button>
        </div>

        {/* Bottom Home indicator */}
        <div className="w-28 h-1 bg-black/60 rounded-full mx-auto" />
      </div>

    </motion.div>
  );
};
