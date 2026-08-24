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
  const colorClass = variant
    ? (variant === 'green' ? 'imsg-bubble--green' : 'imsg-bubble--cream')
    : (isLeft ? 'imsg-bubble--green' : 'imsg-bubble--cream');

  return (
    <div className={`imsg-turn ${isLeft ? 'imsg-turn--in justify-start' : 'imsg-turn--out justify-end'} ${className}`}>
      <p className={`imsg-msg ${colorClass}`}>
        {text}
      </p>
    </div>
  );
};
