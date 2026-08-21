import React from 'react';
import { motion } from 'framer-motion';

export const AgentArchitecturePipeline: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-start gap-2.5 sm:gap-3.5 pt-2 pb-2 select-none flex-nowrap overflow-x-auto sm:overflow-visible">
      
      {/* Node 1: UNIFIED AGENTS */}
      <motion.div
        whileHover={{ scale: 1.04, y: -2 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="flex flex-col items-center justify-center px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-[#151f18] border border-[#3e5645]/80 shadow-[0_8px_24px_rgba(15,25,18,0.18)] cursor-pointer shrink-0"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#4ee28c] shadow-[0_0_10px_#4ee28c] mb-2.5 animate-pulse" />
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#d6e5d8] font-bold text-center leading-tight">
          UNIFIED<br />AGENTS
        </span>
      </motion.div>

      {/* Animated Connector Line 1 */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-0.5 sm:px-1 shrink-0">
        <motion.span
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.0 }}
          className="w-1.5 h-1.5 rounded-full bg-[#4ee28c]"
        />
        <motion.span
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.25 }}
          className="w-1.5 h-1.5 rounded-full bg-[#4ee28c]"
        />
        <motion.span
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.5 }}
          className="w-1.5 h-1.5 rounded-full bg-[#4ee28c]"
        />
      </div>

      {/* Node 2: AGENT HARNESS */}
      <motion.div
        whileHover={{ scale: 1.04, y: -2 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="flex flex-col items-center justify-center px-4 sm:px-5 py-4 sm:py-4.5 rounded-2xl bg-[#151f18] border border-[#3e5645]/80 shadow-[0_8px_24px_rgba(15,25,18,0.18)] cursor-pointer shrink-0"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#4ee28c] shadow-[0_0_10px_#4ee28c] mb-2.5 animate-pulse" />
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#d6e5d8] font-bold text-center leading-tight whitespace-nowrap">
          AGENT HARNESS
        </span>
      </motion.div>

      {/* Animated Connector Line 2 */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-0.5 sm:px-1 shrink-0">
        <motion.span
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
          className="w-1.5 h-1.5 rounded-full bg-[#4ee28c]"
        />
        <motion.span
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.45 }}
          className="w-1.5 h-1.5 rounded-full bg-[#4ee28c]"
        />
        <motion.span
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.7 }}
          className="w-1.5 h-1.5 rounded-full bg-[#4ee28c]"
        />
      </div>

      {/* Node 3: AGENT LOOP */}
      <motion.div
        whileHover={{ scale: 1.04, y: -2 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="flex flex-col items-center justify-center px-4 sm:px-5 py-4 sm:py-4.5 rounded-2xl bg-[#151f18] border border-[#3e5645]/80 shadow-[0_8px_24px_rgba(15,25,18,0.18)] cursor-pointer shrink-0"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#4ee28c] shadow-[0_0_10px_#4ee28c] mb-2.5 animate-pulse" />
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#d6e5d8] font-bold text-center leading-tight whitespace-nowrap">
          AGENT LOOP
        </span>
      </motion.div>

    </div>
  );
};
