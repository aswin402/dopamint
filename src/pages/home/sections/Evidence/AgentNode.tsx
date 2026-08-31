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
          ? 'bg-[#ffffff] border-[#c4a978] shadow-[0_16px_40px_rgba(0,0,0,0.35)] ring-2 ring-[#c4a978]/70 z-20 scale-[1.02]'
          : isPrimary
          ? 'bg-[#fbf9f4] border-[#c4a978]/50 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:border-[#c4a978] hover:bg-[#ffffff]'
          : 'bg-[#f8f5ee] border-[#dcd6c8] hover:border-[#c4a978]/80 hover:bg-[#ffffff] shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
      } ${className}`}
    >
      {/* Top candle glow line */}
      <div
        className={`absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#c4a978] to-transparent transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Ambient background radial glow when active */}
      <div
        className={`absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#c4a978]/15 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div>
        {/* Top bar: Step number + Icon + Live Status */}
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[11px] font-bold tracking-widest uppercase transition-colors ${
                isActive ? 'text-[#7a382e]' : 'text-[#55604e]'
              }`}
            >
              {step}
            </span>
            {isActive && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#16a34a]/15 border border-[#16a34a]/30 text-[#15803d] text-[9px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                ACTIVE
              </span>
            )}
          </div>

          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
              isActive
                ? 'bg-[#f3f2e6] border-[#c4a978] text-[#7a382e] shadow-[0_2px_8px_rgba(196,169,120,0.3)]'
                : 'bg-[#ede7dc] border-[#dcd6c8] text-[#55604e]'
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h4
          className={`text-sm sm:text-[15px] font-bold uppercase tracking-wider mb-1.5 transition-colors relative z-10 ${
            isActive ? 'text-[#141820]' : 'text-[#25362a] group-hover:text-[#141820]'
          }`}
        >
          {title}
        </h4>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-[12px] leading-relaxed transition-colors relative z-10 mb-3 text-[#5a544b]">
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
                className="p-2.5 rounded-lg bg-[#f3f2e6] border border-[#c4a978]/60 text-[11px] font-mono text-[#1c1917] space-y-1 shadow-inner"
              >
                {stepIndex === 0 && (
                  <div className="flex items-center gap-1.5 text-[#141820]">
                    <Radio className="w-3.5 h-3.5 text-[#7a382e] animate-pulse shrink-0" />
                    <span className="truncate font-medium">“Deploy $5k into top yield”</span>
                  </div>
                )}
                {stepIndex === 1 && (
                  <div className="flex items-center gap-1.5 text-[#141820]">
                    <Cpu className="w-3.5 h-3.5 text-[#55604e] animate-spin shrink-0" style={{ animationDuration: '4s' }} />
                    <span className="truncate font-medium">Loading: Risk limits &amp; wallet...</span>
                  </div>
                )}
                {stepIndex === 2 && (
                  <div className="flex items-center gap-1.5 text-[#15803d]">
                    <Zap className="w-3.5 h-3.5 text-[#16a34a] fill-[#16a34a] shrink-0" />
                    <span className="text-[#141820] font-medium">3 agents syncing in <span className="bg-[#141820] text-white font-bold px-1 py-0.5 rounded text-[9.5px] font-mono">parallel</span></span>
                  </div>
                )}
                {stepIndex === 3 && (
                  <div className="flex items-center gap-1.5 text-[#15803d]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                    <span className="truncate text-[#141820] font-medium">Tx #8453 executed on Base</span>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={`idle-${stepIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-2 rounded-lg bg-[#ede8dd]/60 border border-[#dcd6c8] text-[10.5px] font-mono text-[#7a7265] flex items-center justify-between group-hover:border-[#c4a978]/60 transition-colors"
              >
                <span>Click to inspect</span>
                <ChevronDown className="w-3 h-3 text-[#7a7265] group-hover:text-[#25362a]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Feature Tags / Chips */}
      {tags.length > 0 && (
        <div className="pt-2.5 border-t border-[#e2dcd0] flex flex-wrap gap-1.5 relative z-10">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] sm:text-[10.5px] font-semibold px-2 py-0.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-[#f3f2e6] text-[#25362a] border border-[#c4a978]'
                  : 'bg-[#ede7dc] text-[#55604e] border border-[#dcd6c8]'
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
              isActive ? 'bg-[#c4a978] opacity-90' : 'bg-[#7a382e] opacity-75'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isActive ? 'bg-[#c4a978]' : 'bg-[#7a382e]'
            }`}
          />
        </span>
      )}
    </motion.div>
  );
};
