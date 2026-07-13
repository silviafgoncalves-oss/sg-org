import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-paper p-6 text-ink">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(156,120,78,.22)_50%,transparent_50%),linear-gradient(rgba(156,120,78,.18)_50%,transparent_50%)] [background-size:42px_42px]" />
      <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-xl rounded-[2.5rem] border border-linen bg-paper/95 p-10 text-center shadow-premium outline outline-1 outline-offset-[-14px] outline-linen md:p-14">
        <p className="text-xs uppercase tracking-[0.34em] text-sage">SG-Org</p>
        <div className="mx-auto my-8 flex h-36 w-36 items-center justify-center rounded-full border-4 border-double border-gold/50 bg-[#FBF8F3] font-serif text-5xl font-bold italic text-gold shadow-inner">SG</div>
        <h1 className="font-serif text-4xl italic tracking-tight md:text-5xl">Agenda premium para dias com intenção.</h1>
        <p className="mx-auto mt-5 max-w-md leading-7 text-sage">Uma experiência editorial, calma e organizada para planear tarefas, compromissos e rituais sem parecer um calendário genérico.</p>
        <Link to="/auth" className="mt-9 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-paper shadow-premium transition hover:-translate-y-0.5 hover:bg-[#83633e] focus:outline-none focus:ring-2 focus:ring-gold/40">Entrar no diário <ArrowRight size={16} /></Link>
      </motion.section>
    </main>
  );
}
