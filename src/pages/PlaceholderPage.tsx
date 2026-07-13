import { ContentSkeleton } from '../components/loading/Loading';
import { EmptyState } from '../components/states/States';
import './pages.css';
export function PlaceholderPage({ title, kind }: { title: string; kind: 'dashboard'|'calendar'|'tasks'|'notes'|'profile'|'settings' }){ const emptyKind = kind==='calendar'?'events':kind==='notes'?'notes':kind==='tasks'?'tasks':'results'; return <div className="page-stack"><section className="sg-card page-intro"><p className="eyebrow">Estrutura</p><h2>{title}</h2><p>Página visual preparada para integração segura de dados e regras de negócio futuras.</p></section><ContentSkeleton/><EmptyState kind={emptyKind} title={`Sem ${title.toLowerCase()} ainda`} message="Assim que existirem dados seguros no back-end, aparecerão aqui."/></div> }
