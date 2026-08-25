import React from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  Wifi,
  Battery,
  Flashlight,
  Camera,
} from 'lucide-react';

interface LockScreenProps {
  notificationKey: number;
  isTapping: boolean;
  onTap: () => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({
  notificationKey,
  isTapping,
  onTap,
}) => {
  return (
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
            scale: isTapping ? 0.94 : 1, 
            opacity: 1, 
            y: 0,
            boxShadow: isTapping ? '0 0 24px rgba(0, 122, 255, 0.45)' : '0 16px 36px rgba(0,0,0,0.6)'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.94 }}
          onClick={onTap}
          className={`p-3 rounded-[20px] backdrop-blur-2xl border transition-all duration-200 flex items-start gap-2.5 cursor-pointer group relative ${
            isTapping 
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
  );
};
