export function Monogram({ className = 'brand-mark' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Monograma SG"><rect width="64" height="64" rx="20" fill="#2C2A29"/><path d="M20 39c3 4 14 5 14-1 0-8-16-3-16-14 0-9 14-11 20-5" fill="none" stroke="#FDFBF7" strokeWidth="4" strokeLinecap="round"/><path d="M45 24c-3-5-16-6-20 2-5 10 3 20 13 18 6-1 9-5 9-11h-9" fill="none" stroke="#D4CBB5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
