import React from 'react';
import { motion } from 'framer-motion';

interface AgentNodeProps {
  step: string;
  title: string;
  subtitle: string;
  tags?: string[];
  icon?: React.ReactNode;
  isPrimary?: boolean;
  isActive?: boolean;
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
      animate={isActive ? { scale: 1.03, y: -4 } : { scale: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
      className={`relative h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-500 cursor-pointer text-left group overflow-hidden ${
        isActive
          ? 'bg-[#221c15] border-[#f0dcba] shadow-[0_0_32px_rgba(240,220,186,0.3)] ring-1 ring-[#f0dcba]/70 z-20'
          : isPrimary
          ? 'bg-[#1b1712]/90 backdrop-blur-xl border-[#d4af37]/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#f0dcba]'
          : 'bg-[#15120f]/80 backdrop-blur-xl border-[#c4a978]/25 hover:border-[#e5d4b5]/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
      } ${className}`}
    >
      {/* Top candle glow line */}
      <div
        className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#f0dcba] to-transparent transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      <div>
        {/* Top bar: Step number + Icon */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`font-mono text-[11px] font-bold tracking-widest uppercase transition-colors ${
              isActive ? 'text-[#f0dcba]' : 'text-[#dfc28d]/80'
            }`}
          >
            {step}
          </span>
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
              isActive
                ? 'bg-[#f0dcba]/20 border-[#f0dcba] text-[#f0dcba] shadow-[0_0_12px_rgba(240,220,186,0.4)]'
                : 'bg-white/5 border-[#c4a978]/30 text-[#dfc28d]'
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h4
          className={`text-sm sm:text-[15px] font-bold uppercase tracking-wider mb-1.5 transition-colors ${
            isActive
              ? 'text-[#f0dcba] drop-shadow-[0_0_8px_rgba(240,220,186,0.4)]'
              : 'text-[#f7f2ea] group-hover:text-[#dfc28d]'
          }`}
        >
          {title}
        </h4>

        {/* Subtitle / Description */}
        <p
          className={`text-xs sm:text-[12.5px] leading-relaxed transition-colors ${
            isActive ? 'text-[#f6edd9]' : 'text-[#b8aa94]'
          }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Feature Tags / Chips */}
      {tags.length > 0 && (
        <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] sm:text-[10.5px] font-medium px-2 py-0.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-[#f0dcba]/15 text-[#f0dcba] border border-[#f0dcba]/40'
                  : 'bg-white/5 text-[#dfc28d]/85 border border-[#c4a978]/20'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Active pulse dot */}
      {(isPrimary || isActive) && (
        <span className="absolute top-2 right-2 flex h-2 w-2 pointer-events-none">
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
