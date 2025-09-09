import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}