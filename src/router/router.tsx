import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { ErrorBoundaryPage } from '../pages/ErrorBoundaryPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { SplashPage } from '../pages/SplashPage';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { PlaceholderPage } from '../pages/PlaceholderPage';
import { ProtectedRoute } from './ProtectedRoute';
import { PageLoading } from '../components/loading/Loading';

export const router = createBrowserRouter([
  { path: '/', element: <SplashPage />, errorElement: <ErrorBoundaryPage /> },
  { path: '/login', element: <AuthPage /> },
  { path: '/loading', element: <PageLoading /> },
  { element: <ProtectedRoute />, children: [{ element: <AppShell />, children: [
    { path: '/home', element: <HomePage /> },
    { path: '/dashboard', element: <PlaceholderPage kind="dashboard" title="Dashboard" /> },
    { path: '/calendar', element: <PlaceholderPage kind="calendar" title="Calendário" /> },
    { path: '/tasks', element: <PlaceholderPage kind="tasks" title="Tarefas" /> },
    { path: '/notes', element: <PlaceholderPage kind="notes" title="Notas" /> },
    { path: '/profile', element: <PlaceholderPage kind="profile" title="Perfil" /> },
    { path: '/settings', element: <PlaceholderPage kind="settings" title="Definições" /> },
  ] }] },
  { path: '/404', element: <NotFoundPage /> },
  { path: '*', element: <Navigate to="/404" replace /> },
]);
