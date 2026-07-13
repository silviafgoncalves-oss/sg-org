export type AgendaItem = { id: string; title: string; kind: 'calendar' | 'task' | 'note'; description: string; date: string; completed?: boolean };
