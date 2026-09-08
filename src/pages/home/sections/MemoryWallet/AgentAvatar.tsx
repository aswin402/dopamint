import React from 'react';
import iconDope from '@/assets/Icondope.webp';

interface AgentAvatarProps {
  size?: 'sm' | 'md';
  className?: string;
}

export const AgentAvatar: React.FC<AgentAvatarProps> = ({
  size = 'sm',
  className = '',
}) => {
  const isMd = size === 'md';
  const sizeClass = isMd ? 'w-7.5 h-7.5' : 'w-[25px] h-[25px]';

  return (
    <div
      className={`${sizeClass} rounded-full bg-[#eef2ea] border border-[#3e4f42]/25 shadow-2xs shrink-0 flex items-center justify-center overflow-hidden ${className}`}
    >
      <img
        src={iconDope}
        alt="New Listing Agent"
        className="w-[78%] h-[78%] object-contain select-none"
      />
    </div>
  );
};
