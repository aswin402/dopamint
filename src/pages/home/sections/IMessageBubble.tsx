import React from 'react';

interface IMessageBubbleProps {
  text: string;
  side?: 'left' | 'right';
  variant?: 'green' | 'cream';
  className?: string;
}

export const IMessageBubble: React.FC<IMessageBubbleProps> = ({
  text,
  side = 'right',
  variant,
  className = '',
}) => {
  const isRight = side === 'right';
  const colorClass = variant
    ? (variant === 'green' ? 'imsg-bubble--green' : 'imsg-bubble--cream')
    : (isRight ? 'imsg-bubble--green' : 'imsg-bubble--cream');

  return (
    <div className={`imsg-turn ${isRight ? 'imsg-turn--out' : 'imsg-turn--in'} ${className}`}>
      <p className={`imsg-msg ${colorClass}`}>
        {text}
      </p>
    </div>
  );
};
