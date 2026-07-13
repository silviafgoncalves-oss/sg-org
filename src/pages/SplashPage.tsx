import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monogram } from '../assets/brand';
import { checkSession } from '../router/session';
import './pages.css';
export function SplashPage(){ const navigate=useNavigate(); useEffect(()=>{let active=true; checkSession().then((session)=>{ if(active) navigate(session==='authenticated'?'/home':'/login',{replace:true}); }); return()=>{active=false};},[navigate]); return <main className="splash-page" aria-label="Ecrã inicial SG-Org"><motion.div className="splash-panel" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}}><Monogram className="splash-brand"/><p className="eyebrow">Agenda Premium Digital</p><h1>SG-Org</h1><div className="splash-progress" aria-hidden="true"><span/></div><p>A verificar a sua sessão…</p></motion.div></main> }
