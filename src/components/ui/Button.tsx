import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseClasses = className;
  
  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}