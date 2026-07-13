import { motion } from 'framer-motion';
import { officialBrand } from '../../assets/brand';

export function Spinner({ label = 'A carregar' }: { label?: string }) {
  return <span role="status" aria-label={label} className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-[#d4cbb5] border-t-[#7c7267]" />;
}

export function Skeleton({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded-2xl bg-[#eae3d2]/70 ${className}`} />;
}

export function PageLoading() { return <div className="grid min-h-[50vh] place-items-center"><Spinner label="Página a carregar" /></div>; }
export function ContentLoading() { return <div className="space-y-3" aria-label="Conteúdo a carregar"><Skeleton className="h-5 w-2/3"/><Skeleton className="h-24 w-full"/><Skeleton className="h-24 w-full"/></div>; }

export function SplashLoading() {
  return <main className="app-bg grid min-h-screen place-items-center p-6" aria-label="Inicialização SG-Org">
    <motion.section initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .7 }} className="text-center">
      <div className="mx-auto mb-5 grid h-28 w-28 place-items-center rounded-full border-4 border-double border-[#c5a077]/70 bg-[#fbf8f3] text-4xl font-serif italic text-[#9c784e] shadow-inner" aria-label="Monograma oficial SG">{officialBrand.monogram}</div>
      <p className="text-xs uppercase tracking-[.28em] text-[#7c7267]">{officialBrand.name}</p>
      <div className="mt-6"><Spinner label="A verificar sessão" /></div>
    </motion.section>
  </main>;
}
