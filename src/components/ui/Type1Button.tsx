import React from 'react';

interface Type1ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  href?: string;
  className?: string;
}

export const Type1Button: React.FC<Type1ButtonProps> = ({
  children,
  variant = 'dark',
  href,
  className = '',
  ...props
}) => {
  const baseClass = variant === 'light' ? 'button-type1-light' : 'button-type1';

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClass} type1 font-sans ${className}`}
      >
        <span className="btn-txt">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={`${baseClass} type1 font-sans ${className}`}
      {...props}
    >
      <span className="btn-txt">{children}</span>
    </button>
  );
};
