import React from 'react';
import { motion } from 'framer-motion';

interface AgentNodeProps {
  title: string;
  subtitle: string;
  badge?: string;
  icon?: React.ReactNode;
  isPrimary?: boolean;
  isAccent?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export const AgentNode: React.FC<AgentNodeProps> = ({
  title,
  subtitle,
  badge,
  icon,
  isPrimary = false,
  isAccent = false,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  className = '',
}) => {
  return (
    <motion.div
      animate={isActive ? { scale: 1.025, y: -2 } : { scale: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
      className={`relative px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl border transition-all duration-500 cursor-pointer text-center group overflow-hidden ${
        isActive
          ? 'bg-[#221c15] border-[#f0dcba] shadow-[0_0_36px_rgba(240,220,186,0.36)] ring-1 ring-[#f0dcba]/60 z-30'
          : isPrimary
          ? 'bg-[#1e1a15]/90 backdrop-blur-xl border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.18)] hover:border-[#f0dcba]'
          : isAccent
          ? 'bg-[#1c1814]/85 backdrop-blur-xl border-[#dfc28d]/55 shadow-[0_0_24px_rgba(223,194,141,0.15)] hover:border-[#f0dcba]'
          : 'bg-[#171411]/80 backdrop-blur-xl border-[#c4a978]/30 hover:border-[#e5d4b5]/60 shadow-[0_12px_32px_rgba(0,0,0,0.5)]'
      } ${className}`}
    >
      {/* Delicate candlelight top edge highlight */}
      <div
        className={`absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#f0dcba] to-transparent transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      <div className="flex flex-col items-center justify-center space-y-0.5">
        {badge && (
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#dfc28d] uppercase mb-0.5">
            {badge}
          </span>
        )}
        
        <div className="flex items-center gap-2">
          {icon && (
            <span
              className={`transition-colors duration-300 ${
                isActive ? 'text-[#f0dcba]' : 'text-[#dfc28d]'
              }`}
            >
              {icon}
            </span>
          )}
          <h4
            className={`tracking-[0.08em] text-xs sm:text-[14px] md:text-[15px] uppercase font-bold transition-colors duration-300 ${
              isActive
                ? 'text-[#f0dcba] drop-shadow-[0_0_8px_rgba(240,220,186,0.55)]'
                : 'text-[#f7f2ea] group-hover:text-[#dfc28d]'
            }`}
          >
            {title}
          </h4>
        </div>

        <p
          className={`text-xs sm:text-[13px] md:text-[13.5px] font-normal leading-tight max-w-[320px] transition-colors duration-300 ${
            isActive ? 'text-[#f6edd9]' : 'text-[#c7baa4]'
          }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Gentle candlelight pulse on primary or active */}
      {(isPrimary || isActive) && (
        <span className="absolute top-2.5 right-3 flex h-2 w-2 pointer-events-none">
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
