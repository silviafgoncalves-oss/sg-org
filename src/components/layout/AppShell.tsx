import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BottomNavigation } from './BottomNavigation';
import { Header } from './Header';
import { SideNavigation } from './SideNavigation';
import { FloatingActions } from './FloatingActions';
import { ToastViewport } from '../feedback/ToastViewport';
import { DialogHost } from '../dialogs/DialogHost';
import './layout.css';
const titles: Record<string,string> = { '/home':'Home', '/dashboard':'Dashboard', '/calendar':'Calendário', '/tasks':'Tarefas', '/notes':'Notas', '/profile':'Perfil', '/settings':'Definições' };
export function AppShell(){ const { pathname } = useLocation(); return <div className="sg-page app-shell"><SideNavigation/><div className="shell-content"><Header title={titles[pathname] ?? 'SG-Org'} showSearch/><motion.main className="main-content" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.28}}><Outlet/></motion.main></div><FloatingActions/><DialogHost/><ToastViewport/><BottomNavigation/></div> }
