import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn('rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-paper shadow-premium transition hover:-translate-y-0.5 hover:bg-[#83633e] focus:outline-none focus:ring-2 focus:ring-gold/40', className)} {...props} />;
}
