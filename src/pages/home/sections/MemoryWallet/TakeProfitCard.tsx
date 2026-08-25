import React from 'react';
import { motion } from 'framer-motion';

/** The "+142.36% TAKE PROFIT EXECUTED" receipt card (chat message stage 8). */
export const TakeProfitCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: [0.94, 1.02, 1] }}
      transition={{ duration: 0.42, times: [0, 0.65, 1], ease: 'easeOut' }}
      className="w-full bg-[#eae3d5] border border-[#d8cfbe] rounded-[18px] rounded-tl-xs p-2.5 text-[#1c1917] shadow-[0_4px_20px_rgba(22,163,74,0.12)] space-y-2 relative overflow-hidden"
    >
      {/* Card Header: $XX + +142.36% */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-4.5 h-4.5 rounded-full bg-[#1c1917] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#38bdf8] flex items-center justify-center gap-[1px]">
              <span className="w-0.5 h-0.5 rounded-full bg-black" />
              <span className="w-0.5 h-0.5 rounded-full bg-black" />
            </div>
          </div>
          <span className="font-bold text-xs text-[#1c1917] tracking-tight">$XX</span>
        </div>

        <span className="text-[11px] font-bold font-mono text-[#15803d]">
          +142.36%
        </span>
      </div>

      {/* Inner Mint/Emerald Profit Box */}
      <motion.div 
        initial={{ scale: 0.96 }}
        animate={{ scale: [0.96, 1.02, 1] }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        className="bg-[#e4f6eb] border border-[#86efac] rounded-[12px] p-2 text-center shadow-[0_0_15px_rgba(22,163,74,0.16)]"
      >
        <div className="flex items-center justify-center gap-1 text-[9px] font-bold text-[#15803d] uppercase tracking-wider">
          <span className="w-3 h-3 rounded-full bg-[#16a34a] text-white flex items-center justify-center text-[8px] font-black">✓</span>
          <span>TAKE PROFIT EXECUTED</span>
        </div>

        <div className="text-[8px] text-[#166534] font-medium mt-0.5">
          Total Profit
        </div>

        <div className="text-[20px] font-bold text-[#15803d] font-mono tracking-tight leading-tight my-0.5">
          $4,286.40
        </div>

        <div className="text-[8.5px] text-[#16a34a] font-semibold">
          +142.36%)
        </div>
      </motion.div>

      {/* Detail Metric Rows */}
      <div className="space-y-0.5 text-[9.5px] text-[#44403c]">
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
  );
};
