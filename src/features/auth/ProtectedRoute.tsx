import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function ProtectedRoute() {
  const { user, loading, configured } = useAuth();
  if (loading) return <div className="min-h-screen bg-paper" aria-label="A validar sessão" />;
  if (!configured || !user) return <Navigate to="/auth" replace />;
  return <Outlet />;
}
