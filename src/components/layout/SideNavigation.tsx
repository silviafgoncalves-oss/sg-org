import { NavLink } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Monogram } from '../../assets/brand';
import { navItems } from './navigation';
import './layout.css';
export function SideNavigation(){ return <aside className="side-nav" aria-label="Navegação principal desktop"><div className="side-brand"><Monogram className="side-logo"/><span>SG-Org</span></div>{navItems.map(({to,label,icon:Icon})=><NavLink key={to} to={to} className={({isActive})=>`side-link ${isActive?'active':''}`}><Icon size={19}/>{label}</NavLink>)}<NavLink to="/settings" className={({isActive})=>`side-link side-settings ${isActive?'active':''}`}><Settings size={19}/>Definições</NavLink></aside> }
