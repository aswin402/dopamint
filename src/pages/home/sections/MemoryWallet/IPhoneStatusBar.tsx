import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface IPhoneStatusBarProps {
  time: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const IPhoneStatusBar: React.FC<IPhoneStatusBarProps> = ({
  time,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#1c1917]';
  const barBg = isDark ? 'bg-white' : 'bg-[#1c1917]';

  return (
    <div className={`flex items-center justify-between ${textColor} text-[11px] font-semibold select-none ${className}`}>
      <span className="w-10 text-left pl-0.5 font-bold transition-all duration-300">
        {time}
      </span>

      {/* Dynamic Island */}
      <div className="w-[94px] h-[24px] rounded-full bg-black flex items-center justify-between px-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.8)] border border-white/10">
        <div className="w-2 h-2 rounded-full bg-[#111] border border-white/20 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#1e293b]" />
        </div>
        <div className="w-2 h-2 rounded-full bg-[#0a0f1d] border border-blue-900/40" />
      </div>

      {/* Connectivity Indicators */}
      <div className={`w-10 flex items-center justify-end gap-1 ${textColor} pr-0.5`}>
        <div className="flex items-end gap-[1px] h-2">
          <span className={`w-[2px] h-1 ${barBg} rounded-xs`} />
          <span className={`w-[2px] h-1.5 ${barBg} rounded-xs`} />
          <span className={`w-[2px] h-2 ${barBg} rounded-xs`} />
        </div>
        <Wifi className="w-2.5 h-2.5" />
        <Battery className="w-3 h-3" />
      </div>
    </div>
  );
};
