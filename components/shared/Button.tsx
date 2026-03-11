import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick, 
  disabled,
  className = '' 
}: ButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  const finalClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={finalClass}>
      {children}
    </button>
  );
}
