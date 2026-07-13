import { CalendarX, CloudOff, FileQuestion, Notebook, ShieldAlert, WifiOff } from 'lucide-react';
import './states.css';
const icons = { tasks: FileQuestion, events: CalendarX, notes: Notebook, results: FileQuestion, offline: WifiOff, unexpected: ShieldAlert, network: CloudOff, invalidSession: ShieldAlert, forbidden: ShieldAlert };
type StateKind = keyof typeof icons;
export function EmptyState({ kind, title, message }: { kind: StateKind; title: string; message: string }) { const Icon = icons[kind]; return <section className="state-card sg-card" role="status"><Icon size={32}/><h2>{title}</h2><p>{message}</p></section> }
export function ErrorState(props: { kind: StateKind; title: string; message: string }) { return <EmptyState {...props}/> }
