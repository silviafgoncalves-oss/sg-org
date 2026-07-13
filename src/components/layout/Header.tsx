import { ArrowLeft, Bell, Menu, Search, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Monogram } from '../../assets/brand';
import './layout.css';

type HeaderProps = { title: string; showBack?: boolean; showSearch?: boolean; showNotifications?: boolean; showAvatar?: boolean; showMenu?: boolean };
export function Header({ title, showBack, showSearch, showNotifications = true, showAvatar = true, showMenu = true }: HeaderProps) {
  const navigate = useNavigate();
  return <header className="app-header"><div className="header-title-group">{showBack ? <button aria-label="Voltar" className="icon-button" onClick={() => navigate(-1)}><ArrowLeft size={20}/></button> : <Monogram className="header-logo"/>}<div><span className="eyebrow">SG-Org</span><h1>{title}</h1></div></div><nav className="header-actions" aria-label="Ações da página">{showSearch && <button aria-label="Pesquisar" className="icon-button"><Search size={20}/></button>}{showNotifications && <button aria-label="Notificações" className="icon-button"><Bell size={20}/></button>}{showAvatar && <button aria-label="Perfil" className="icon-button"><UserRound size={20}/></button>}{showMenu && <button aria-label="Menu" className="icon-button desktop-hidden"><Menu size={20}/></button>}</nav></header>;
}
