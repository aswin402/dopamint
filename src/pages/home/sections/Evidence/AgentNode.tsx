import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import nvidiaLogo from '../../../../assets/integration_logos/nvidia.svg';
import baseLogo from '../../../../assets/integration_logos/base.svg';

interface AgentNodeProps {
  step: string;
  title: string;
  subtitle: string;
  tags?: string[];
  icon?: React.ReactNode;
  isPrimary?: boolean;
  isActive?: boolean;
  stepIndex: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export const AgentNode: React.FC<AgentNodeProps> = ({
  step,
  title,
  subtitle,
  icon,
  isActive = false,
  stepIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = '',
}) => {
  const [isLocalHovered, setIsLocalHovered] = React.useState(false);
  const isEffectiveActive = isActive || isLocalHovered;

  const handleMouseEnter = () => {
    setIsLocalHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsLocalHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={isEffectiveActive ? { scale: 1.02, y: -4 } : { scale: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`relative h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-500 cursor-pointer text-left group overflow-hidden ${
        isEffectiveActive
          ? 'bg-[#ffffff] border-[#c4a978] shadow-[0_24px_50px_rgba(196,169,120,0.28)] ring-1.5 ring-[#c4a978]/80 z-20'
          : 'bg-[#fbf9f4] hover:bg-[#ffffff] border-[#ded5c5] hover:border-[#c4a978]/60 shadow-[0_12px_32px_rgba(20,24,32,0.08)] hover:shadow-[0_18px_40px_rgba(20,24,32,0.14)]'
      } ${className}`}
    >
      {/* Top golden accent line when active */}
      <div
        className={`absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#c4a978] to-transparent transition-opacity duration-500 ${
          isEffectiveActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Top pulsating amber jewel on active */}
      {isEffectiveActive && (
        <span className="absolute top-3 right-3 flex h-2.5 w-2.5 pointer-events-none z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4a978] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c4a978]" />
        </span>
      )}

      <div>
        {/* Top Header: Step number + Live Status + Icon */}
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] uppercase transition-colors whitespace-nowrap ${
                isEffectiveActive ? 'text-[#a66522]' : 'text-[#5a544b]'
              }`}
            >
              {step}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {isEffectiveActive && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#dcfce7] border border-[#86efac] text-[#15803d] text-[9.5px] font-mono font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                ACTIVE
              </span>
            )}

            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                isEffectiveActive
                  ? 'bg-[#ffffff] border-[#c4a978] text-[#a66522] shadow-xs'
                  : 'bg-[#ffffff] border-[#ded5c5] text-[#37312c]'
              }`}
            >
              {icon}
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h4 className="text-sm sm:text-[15px] font-bold uppercase tracking-wider mb-1 text-[#141820]">
          {title}
        </h4>

        {/* Subtitle */}
        <p className="text-xs text-[#5a544b] font-serif italic leading-snug mb-3">
          {subtitle}
        </p>

        {/* ── CARD-SPECIFIC VISUAL CONTENT ── */}

        {/* 1. INTENT CARD */}
        {stepIndex === 0 && (
          <div className="space-y-2.5 pt-0.5">
            {/* Editorial Quote Box */}
            <div className="bg-[#f5f1e8] border border-[#e5dcce] rounded-xl px-3 py-2 flex items-center shadow-xs">
              <span className="font-serif italic font-bold text-xs sm:text-[13.5px] text-[#141820] tracking-tight">
                “Buy $5000 of NVDA”
              </span>
            </div>

            {/* Asset Details Pill */}
            <div className="bg-[#ffffff] rounded-xl p-3 border border-[#ded5c5] shadow-xs space-y-2.5">
              {/* Nvidia item */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#76B900]/10 border border-[#76B900]/25 p-1 flex items-center justify-center shrink-0">
                  <img src={nvidiaLogo} alt="Nvidia" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#16a34a]/10 text-[#15803d]">BUY</span>
                    <span className="text-xs font-semibold text-[#141820]">Nvidia · NVDAc</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#78716c] mt-0.5">Tokenized Stock</span>
                </div>
              </div>

              {/* Base Network item */}
              <div className="flex items-center gap-2.5 pt-2 border-t border-[#f0ebe1]">
                <img src={baseLogo} alt="Base" className="w-6 h-6 rounded-full object-contain shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-bold text-xs text-[#141820]">Base</span>
                  <span className="text-[10px] font-mono text-[#78716c]">L2 Network</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ORCHESTRATE CARD */}
        {stepIndex === 1 && (
          <div className="space-y-1.5 pt-0.5">
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Check Balance
            </div>
            {/* Elegant Pipeline Connector */}
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Find Liquidity
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Select Route
            </div>
          </div>
        )}

        {/* 3. AGENT HARNESS CARD */}
        {stepIndex === 2 && (
          <div className="space-y-1.5 pt-0.5">
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Find Liquidity
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Execute Trade
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Verify Transaction
            </div>

            {/* Bottom 3 tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2.5">
              {['Parallel Agents', 'Routing', 'Safety'].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#ffffff] border border-[#ded5c5] text-[#37312c] shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 4. ACTION LAYER CARD */}
        {stepIndex === 3 && (
          <div className="space-y-1.5 pt-0.5">
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Trade Executed
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-xs font-semibold text-[#141820] shadow-xs">
              Transaction Confirmed
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>

            {/* Success Outcome Box */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f4f9f4] border border-[#bbf7d0] shadow-xs">
              <div className="w-6 h-6 rounded-full bg-[#15803d] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="font-bold text-xs text-[#141820]">NVDAc Received</span>
                <span className="text-[10px] font-serif italic text-[#55604e]">Tokenized Nvidia share on Base</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};


