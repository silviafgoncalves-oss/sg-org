import { NavLink } from 'react-router-dom';
import { navItems } from './navigation';
import './layout.css';
export function BottomNavigation(){ return <nav className="bottom-nav" aria-label="Navegação principal móvel">{navItems.map(({to,label,icon:Icon})=><NavLink key={to} to={to} className={({isActive})=>`bottom-link ${isActive?'active':''}`}><Icon size={20}/><span>{label}</span></NavLink>)}</nav> }
