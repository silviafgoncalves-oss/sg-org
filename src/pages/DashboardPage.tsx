import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { BookOpen, Calendar, CheckSquare } from 'lucide-react';

export default function DashboardPage() {
  const today = format(new Date(), "EEEE, d 'de' MMMM", { locale: pt });
  return <main className="mx-auto grid max-w-5xl gap-6 p-6 md:grid-cols-3"><section className="md:col-span-3 rounded-[2rem] border border-linen bg-white/70 p-8 shadow-premium"><p className="text-xs uppercase tracking-[0.3em] text-sage">{today}</p><h1 className="mt-4 font-serif text-4xl italic">O teu dia, com espaço para respirar.</h1></section>{[[Calendar,'Compromissos'],[CheckSquare,'Prioridades'],[BookOpen,'Notas']] .map(([Icon,label]) => { const C = Icon as typeof Calendar; return <article key={label as string} className="rounded-[2rem] border border-linen bg-white/60 p-6"><C className="text-gold"/><h2 className="mt-5 font-serif text-2xl italic">{label as string}</h2><p className="mt-2 text-sm text-sage">Preparado para sincronização cloud e evolução em tempo real.</p></article>; })}</main>;
}
