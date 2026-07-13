import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={cn('rounded-full px-6 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/30 disabled:cursor-not-allowed disabled:opacity-50', variant === 'primary' ? 'bg-gold text-paper shadow-md hover:-translate-y-0.5 hover:bg-[#85633d]' : 'text-taupe hover:text-ink', className)} {...props} />;
}
