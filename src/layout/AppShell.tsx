import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="relative min-h-screen overflow-x-hidden bg-paper text-ink selection:bg-linen"><div className="absolute inset-0 bg-[radial-gradient(#c5a077_1px,transparent_1px)] [background-size:26px_26px] opacity-20" /><header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8"><motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/60 font-serif text-lg italic text-gold">SG</div><span className="text-xs uppercase tracking-[0.24em] text-taupe">SG-Org</span></motion.div><Button variant="ghost" aria-label="Perfil"><User size={20} strokeWidth={1.5}/></Button></header><main className="relative z-10">{children}</main></div>;
}
