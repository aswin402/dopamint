import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Activity, Radio, Cpu, Zap, ChevronDown } from 'lucide-react';

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
  tags = [],
  icon,
  isPrimary = false,
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
      animate={isActive ? { scale: 1.025, y: -4 } : { scale: 1, y: 0 }}
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
      className={`relative h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-500 cursor-pointer text-left group overflow-hidden ${
        isActive
          ? 'bg-[#1e1913] border-[#f0dcba] shadow-[0_0_36px_rgba(240,220,186,0.3)] ring-1 ring-[#f0dcba]/70 z-20'
          : isPrimary
          ? 'bg-[#171410]/90 backdrop-blur-xl border-[#c4a978]/40 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#f0dcba]/80'
          : 'bg-[#12100d]/80 backdrop-blur-xl border-[#c4a978]/25 hover:border-[#e5d4b5]/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
      } ${className}`}
    >
      {/* Top candle glow line */}
      <div
        className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#f0dcba] to-transparent transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Ambient background radial glow when active */}
      <div
        className={`absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#dfc28d]/15 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div>
        {/* Top bar: Step number + Icon + Live Status */}
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[11px] font-bold tracking-widest uppercase transition-colors ${
                isActive ? 'text-[#f0dcba]' : 'text-[#dfc28d]'
              }`}
            >
              {step}
            </span>
            {isActive && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-[9px] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                ACTIVE
              </span>
            )}
          </div>

          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
              isActive
                ? 'bg-[#f0dcba]/20 border-[#f0dcba] text-[#f0dcba] shadow-[0_0_14px_rgba(240,220,186,0.45)]'
                : 'bg-white/5 border-[#c4a978]/30 text-[#dfc28d]'
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h4
          className={`text-sm sm:text-[15px] font-bold uppercase tracking-wider mb-1.5 transition-colors relative z-10 ${
            isActive
              ? 'text-[#f0dcba] drop-shadow-[0_0_8px_rgba(240,220,186,0.4)]'
              : 'text-[#f7f2ea] group-hover:text-[#dfc28d]'
          }`}
        >
          {title}
        </h4>

        {/* Subtitle / Description */}
        <p
          className={`text-xs sm:text-[12px] leading-relaxed transition-colors relative z-10 mb-3 ${
            isActive ? 'text-[#f6edd9]' : 'text-[#b8aa94]'
          }`}
        >
          {subtitle}
        </p>

        {/* Live Simulation Preview Box */}
        <div className="relative z-10 mb-3 min-h-[46px]">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key={`sim-${stepIndex}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="p-2 rounded-lg bg-black/50 border border-[#f0dcba]/30 text-[11px] font-mono text-[#f0dcba] space-y-1 shadow-inner"
              >
                {stepIndex === 0 && (
                  <div className="flex items-center gap-1.5 text-[#f0dcba]">
                    <Radio className="w-3 h-3 text-[#f0dcba] animate-pulse shrink-0" />
                    <span className="truncate">“Deploy $5k into top yield”</span>
                  </div>
                )}
                {stepIndex === 1 && (
                  <div className="flex items-center gap-1.5 text-[#f0dcba]">
                    <Cpu className="w-3 h-3 text-[#f0dcba] animate-spin shrink-0" style={{ animationDuration: '4s' }} />
                    <span className="truncate">Loading: Risk limits &amp; wallet...</span>
                  </div>
                )}
                {stepIndex === 2 && (
                  <div className="flex items-center gap-1.5 text-[#4ade80]">
                    <Zap className="w-3 h-3 text-[#4ade80] fill-[#4ade80] shrink-0" />
                    <span className="text-[#f6edd9]">3 agents syncing in <span className="bg-white text-black font-bold px-1 py-0.5 rounded text-[10px] font-mono">parallel</span></span>
                  </div>
                )}
                {stepIndex === 3 && (
                  <div className="flex items-center gap-1.5 text-[#4ade80]">
                    <CheckCircle2 className="w-3 h-3 text-[#4ade80] shrink-0" />
                    <span className="truncate text-[#f6edd9]">Tx #8453 executed on Base</span>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={`idle-${stepIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-[10.5px] font-mono text-[#8a7f70] flex items-center justify-between group-hover:border-[#c4a978]/20 transition-colors"
              >
                <span>Click to inspect</span>
                <ChevronDown className="w-3 h-3 text-[#dfc28d]/60 group-hover:text-[#dfc28d]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Feature Tags / Chips */}
      {tags.length > 0 && (
        <div className="pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5 relative z-10">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] sm:text-[10.5px] font-medium px-2 py-0.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-[#f0dcba]/15 text-[#f0dcba] border border-[#f0dcba]/40'
                  : 'bg-white/5 text-[#dfc28d]/80 border border-[#c4a978]/20'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Active pulse dot */}
      {(isPrimary || isActive) && (
        <span className="absolute top-2.5 right-2.5 flex h-2 w-2 pointer-events-none z-10">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              isActive ? 'bg-[#f0dcba] opacity-90' : 'bg-[#dfc28d] opacity-75'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isActive ? 'bg-[#f0dcba]' : 'bg-[#dfc28d]'
            }`}
          />
        </span>
      )}
    </motion.div>
  );
};
