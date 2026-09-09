import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import nvidiaLogo from '../../../../assets/integration_logos/nvidia.svg';
import baseLogo from '../../../../assets/integration_logos/base.svg';

interface AgentNodeProps {
  title: string;
  subtitle: string;
  tags?: string[];
  icon?: React.ReactNode;
  isActive?: boolean;
  stepIndex: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export const AgentNode: React.FC<AgentNodeProps> = ({
  title,
  subtitle,
  tags,
  icon,
  isActive = false,
  stepIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = '',
}) => {
  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      animate={
        isActive
          ? { scale: 1, opacity: 1 }
          : { scale: 1, opacity: 0.78 }
      }
      whileHover={{ scale: 1.015, y: -2, opacity: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`relative h-full max-h-[415px] min-[390px]:max-h-[435px] md:max-h-none flex flex-col justify-between p-4 min-[390px]:p-4.5 md:p-4 lg:p-5 rounded-[22px] md:rounded-2xl border transition-colors duration-300 cursor-pointer text-left group overflow-hidden ${
        isActive
          ? 'bg-[#ffffff] border-[#c4a978] shadow-[0_16px_40px_rgba(196,169,120,0.22)] ring-1.5 ring-[#c4a978]/80 z-20'
          : 'bg-[#fbf9f4] hover:bg-[#ffffff] border-[#ded5c5] hover:border-[#c4a978]/60 shadow-[0_8px_24px_rgba(20,24,32,0.06)] hover:shadow-[0_18px_40px_rgba(20,24,32,0.14)] z-10'
      } ${className}`}
    >
      {/* Top golden accent line when active */}
      <div
        className={`absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#c4a978] to-transparent transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Top pulsating amber jewel on active */}
      {isActive && (
        <span className="absolute top-3.5 right-3.5 md:top-3 md:right-3 flex h-2.5 w-2.5 pointer-events-none z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4a978] opacity-75" />
          <span className="relative inline-flex rounded-full h-full w-full bg-[#c4a978]" />
        </span>
      )}

      {/* ── CARD HEADER ── */}
      <div className="shrink-0">
        <div className="flex items-center justify-between gap-2 mb-1 md:mb-1 lg:mb-1.5 relative z-10">
          <h4 className="text-[16px] min-[390px]:text-[17px] md:text-sm lg:text-[15px] font-bold uppercase tracking-wider text-[#141820]">
            {title}
          </h4>

          <div
            className={`w-7.5 h-7.5 min-[390px]:w-8 min-[390px]:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
              isActive
                ? 'bg-[#ffffff] border-[#c4a978] text-[#a66522] shadow-xs'
                : 'bg-[#ffffff] border-[#ded5c5] text-[#37312c]'
            }`}
          >
            {icon}
          </div>
        </div>

        <p className="text-[12px] min-[390px]:text-[12.5px] md:text-[11px] lg:text-xs text-[#5a544b] font-serif italic leading-snug">
          {subtitle}
        </p>
      </div>

      {/* ── CARD-SPECIFIC MIDDLE CONTENT ── */}
      <div className="flex-1 flex flex-col justify-center my-2 min-[390px]:my-2.5 md:my-1.5 lg:my-2.5">

        {/* 1. INTENT CARD */}
        {stepIndex === 0 && (
          <div className="space-y-2 min-[390px]:space-y-2.5 md:space-y-2 lg:space-y-2.5">
            {/* Editorial Quote Box */}
            <div className="bg-[#f5f1e8] border border-[#e5dcce] rounded-xl px-3.5 py-2 flex items-center shadow-xs">
              <span className="font-serif italic font-bold text-[14px] min-[390px]:text-[15px] md:text-xs lg:text-[13.5px] text-[#141820] tracking-tight">
                “Buy $5000 of NVDA”
              </span>
            </div>

            {/* Asset Details Pill */}
            <div className="bg-[#ffffff] rounded-xl md:rounded-xl lg:rounded-2xl p-2.5 min-[390px]:p-3 md:p-2.5 lg:p-3 border border-[#ded5c5] shadow-xs space-y-2 min-[390px]:space-y-2.5 md:space-y-2 lg:space-y-2.5">
              {/* Nvidia item */}
              <div className="flex items-center gap-2.5 md:gap-2 lg:gap-2.5">
                <div className="w-8 h-8 min-[390px]:w-8.5 min-[390px]:h-8.5 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-lg bg-[#76B900]/10 border border-[#76B900]/25 p-1 flex items-center justify-center shrink-0">
                  <img src={nvidiaLogo} alt="Nvidia" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#16a34a]/10 text-[#15803d]">BUY</span>
                    <span className="text-[13.5px] min-[390px]:text-[14.5px] md:text-xs font-semibold text-[#141820]">Nvidia · NVDAc</span>
                  </div>
                  <span className="text-[11px] md:text-[9.5px] lg:text-[10px] font-mono text-[#78716c] mt-0.5">Tokenized Stock</span>
                </div>
              </div>

              {/* Base Network item */}
              <div className="flex items-center gap-2.5 md:gap-2 lg:gap-2.5 pt-2 md:pt-1.5 lg:pt-2 border-t border-[#f0ebe1]">
                <img src={baseLogo} alt="Base" className="w-5.5 h-5.5 min-[390px]:w-6 min-[390px]:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full object-contain shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-bold text-[13.5px] min-[390px]:text-[14.5px] md:text-xs text-[#141820]">Base</span>
                  <span className="text-[11px] md:text-[9.5px] lg:text-[10px] font-mono text-[#78716c]">L2 Network</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ROUTE / DOPE CARD */}
        {stepIndex === 1 && (
          <div className="space-y-1.5 min-[390px]:space-y-2 md:space-y-1.5">
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Check Balance
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Check Memory &amp; Context
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Select Route
            </div>
          </div>
        )}

        {/* 3. AGENT HARNESS CARD */}
        {stepIndex === 2 && (
          <div className="space-y-1.5 min-[390px]:space-y-2 md:space-y-1.5">
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Find Liquidity
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Execute Trade
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Verify Transaction
            </div>
          </div>
        )}

        {/* 4. EXECUTION LAYER CARD */}
        {stepIndex === 3 && (
          <div className="space-y-1.5 min-[390px]:space-y-2 md:space-y-1.5">
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Trade Executed
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>
            <div className="w-full py-2 min-[390px]:py-2.5 md:py-2 px-3 rounded-xl bg-[#ffffff] border border-[#ded5c5] text-center text-[13px] min-[390px]:text-[14px] md:text-xs font-semibold text-[#141820] shadow-xs">
              Transaction Confirmed
            </div>
            <div className="flex flex-col items-center justify-center py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a978]" />
            </div>

            {/* Success Outcome Box */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f4f9f4] border border-[#bbf7d0] shadow-xs">
              <div className="w-7 h-7 rounded-full bg-[#15803d] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="font-bold text-[13px] min-[390px]:text-[14px] md:text-xs text-[#141820]">NVDAc Received</span>
                <span className="text-[10.5px] min-[390px]:text-[11px] md:text-[10px] font-serif italic text-[#55604e] mt-0.5">Tokenized Nvidia share on Base</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ── CARD FOOTER / TAGS ── */}
      {tags && tags.length > 0 && (
        <div className="shrink-0 flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#f0ebe1]/80 md:border-t-0">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] min-[390px]:text-[11px] md:text-[9px] lg:text-[10px] font-mono font-medium px-2.5 py-0.5 md:px-1.5 lg:px-2 rounded-lg bg-[#ffffff] border border-[#ded5c5] text-[#37312c] shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};


