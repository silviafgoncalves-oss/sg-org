import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { hasFutureAuthenticatedSession } from './session';

export function ProtectedRoute() {
  const location = useLocation();
  if (!hasFutureAuthenticatedSession()) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  return <Outlet />;
}
