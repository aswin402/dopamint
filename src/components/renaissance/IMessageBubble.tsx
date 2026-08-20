import React from 'react';

interface IMessageBubbleProps {
  text: string;
  side?: 'left' | 'right';
  className?: string;
}

export const IMessageBubble: React.FC<IMessageBubbleProps> = ({
  text,
  side = 'left',
  className = '',
}) => {
  const isLeft = side === 'left';

  return (
    <div className={`imsg-turn ${isLeft ? 'imsg-turn--in' : 'imsg-turn--out'} ${className}`}>
      <p className="imsg-msg">
        {text}
      </p>
    </div>
  );
};
