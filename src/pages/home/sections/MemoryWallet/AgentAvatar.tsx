import React from 'react';

interface AgentAvatarProps {
  size?: 'sm' | 'md';
  className?: string;
}

export const AgentAvatar: React.FC<AgentAvatarProps> = ({
  size = 'sm',
  className = '',
}) => {
  const isMd = size === 'md';
  const containerClass = isMd
    ? 'w-8 h-8 rounded-full bg-gradient-to-tr from-[#887d6c] via-[#bdae99] to-[#f0e8dc] p-[1.5px] shrink-0 shadow-[0_0_10px_rgba(136,125,108,0.6)]'
    : 'w-7 h-7 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] p-[1px] shadow-sm shrink-0';

  const innerBg = isMd ? 'bg-[#12100d]' : 'bg-[#1e1b4b]';

  return (
    <div className={`${containerClass} ${className}`}>
      <div className={`w-full h-full rounded-full ${innerBg} flex items-center justify-center`}>
        <div className="w-3.5 h-3.5 rounded-full bg-[#38bdf8] flex items-center justify-center gap-[1px]">
          <span className="w-0.5 h-0.5 rounded-full bg-black" />
          <span className="w-0.5 h-0.5 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
};
