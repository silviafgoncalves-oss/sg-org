import { addDays, formatISO } from 'date-fns';
import type { AgendaItem } from '@/types/agenda';

export const agendaPreview: AgendaItem[] = [
  { id: 'ritual', title: 'Ritual da manhã', kind: 'calendar', description: 'Planear o dia com calma', date: formatISO(new Date(), { representation: 'date' }) },
  { id: 'focus', title: 'Três prioridades', kind: 'task', description: 'Foco no essencial', date: formatISO(new Date(), { representation: 'date' }) },
  { id: 'journal', title: 'Notas livres', kind: 'note', description: 'Registar ideias importantes', date: formatISO(addDays(new Date(), 1), { representation: 'date' }) },
];
