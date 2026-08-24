import React from 'react';

interface IMessageBubbleProps {
  text: string;
  side?: 'left' | 'right';
  variant?: 'green' | 'cream';
  className?: string;
}

export const IMessageBubble: React.FC<IMessageBubbleProps> = ({
  text,
  side = 'left',
  variant,
  className = '',
}) => {
  const isLeft = side === 'left';
  const isGreen = variant ? variant === 'green' : isLeft;

  // Exact authentic Renaissance iMessage colors
  const bgColor = isGreen ? '#d0e8c8' : '#f4ede4';
  const textColor = isGreen ? '#263725' : '#4a2c18';

  return (
    <div className={`imsg-turn ${isLeft ? 'justify-start' : 'justify-end'} ${className}`}>
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className={`relative max-w-[88%] sm:max-w-[22rem] px-3.5 sm:px-4 py-2 sm:py-2.5 text-[0.92rem] sm:text-[1.02rem] leading-[1.32] tracking-[-0.01em] rounded-[1.35rem] ${
          isLeft ? 'rounded-bl-[4px]' : 'rounded-br-[4px]'
        } text-pretty break-words select-none`}
      >
        <p className="m-0 font-sans">{text}</p>

        {/* Clean curved iOS tail with zero overflow artifacts */}
        {isLeft ? (
          <svg
            className="absolute bottom-0 -left-[6px] w-[9px] h-[15px] pointer-events-none"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0C9 6.5 5.5 13 0 15C5 15 8.5 12 9 7V0Z"
              fill={bgColor}
            />
          </svg>
        ) : (
          <svg
            className="absolute bottom-0 -right-[6px] w-[9px] h-[15px] pointer-events-none"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C0 6.5 3.5 13 9 15C4 15 0.5 12 0 7V0Z"
              fill={bgColor}
            />
          </svg>
        )}
      </div>
    </div>
  );
};
