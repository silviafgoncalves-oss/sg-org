import { Outlet } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export function AppLayout() {
  const { signOut } = useAuth();
  return <div className="min-h-screen bg-paper text-ink"><header className="mx-auto flex max-w-5xl items-center justify-between p-6"><span className="text-xs uppercase tracking-[0.3em] text-sage">SG-Org</span><Button onClick={signOut}>Sair</Button></header><Outlet /></div>;
}
