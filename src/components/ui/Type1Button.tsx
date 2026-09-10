import React from 'react';
import { Link } from 'react-router-dom';

interface Type1ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  href?: string;
  to?: string;
  className?: string;
  onClick?: React.MouseEventHandler<any>;
}

export const Type1Button: React.FC<Type1ButtonProps> = ({
  children,
  variant = 'dark',
  href,
  to,
  className = '',
  onClick,
  ...props
}) => {
  const baseClass = variant === 'light' ? 'button-type1-light' : 'button-type1';

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${baseClass} type1 font-sans ${className}`}
      >
        <span className="btn-txt">{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClass} type1 font-sans ${className}`}
      >
        <span className="btn-txt">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={`${baseClass} type1 font-sans ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="btn-txt">{children}</span>
    </button>
  );
};
