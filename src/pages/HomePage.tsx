import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, CheckSquare } from 'lucide-react';
import { AuthPanel } from '@/features/auth/AuthPanel';
import { agendaPreview } from '@/features/agenda/agendaData';
import { AppShell } from '@/layout/AppShell';

const icons = { calendar: Calendar, task: CheckSquare, note: BookOpen };

export function HomePage() {
  return <AppShell><section className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-5xl items-center gap-10 px-6 pb-12 md:grid-cols-[1.1fr_0.9fr]"><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}}><p className="text-xs uppercase tracking-[0.28em] text-[#A39788]">{format(new Date(), "EEEE, d 'de' MMMM", { locale: pt })}</p><h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight tracking-tight text-[#1A1918] md:text-6xl">Escreve a vida que queres viver.</h1><div className="my-8 h-px w-16 bg-[#D4CBB5]"/><p className="max-w-lg text-lg leading-8 text-taupe">Uma agenda digital premium, pensada como uma peça editorial: espaço, serenidade, foco e sincronização segura na cloud.</p><div className="mt-10 space-y-4">{agendaPreview.map((item, index) => { const Icon = icons[item.kind]; return <motion.button key={item.id} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:.2 + index*.08}} className="group flex w-full max-w-md items-center justify-between rounded-2xl border border-linen bg-white/60 p-5 text-left shadow-[0_8px_30px_rgba(212,203,181,0.22)] backdrop-blur transition-all hover:bg-white"><span className="flex items-center gap-4"><span className="rounded-xl bg-[#F7F4EB] p-3 text-taupe"><Icon size={20} strokeWidth={1.5}/></span><span><span className="block text-sm font-medium text-ink">{item.title}</span><span className="text-xs text-[#A39788]">{item.description}</span></span></span><ArrowRight size={16} className="text-[#D4CBB5] transition-colors group-hover:text-taupe"/></motion.button> })}</div></motion.div><AuthPanel /></section></AppShell>;
}
