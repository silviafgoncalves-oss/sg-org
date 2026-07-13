import { motion } from 'framer-motion';
import { Monogram } from '../../assets/brand';
import './loading.css';
export function Spinner(){return <span className="spinner" role="status" aria-label="A carregar"/>}
export function SplashLoading(){return <div className="splash-loading"><motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.6}}><Monogram className="splash-mark"/><p>A preparar a sua agenda…</p><Spinner/></motion.div></div>}
export function PageLoading(){return <section className="sg-card loading-card"><Spinner/><span>A carregar página</span></section>}
export function ContentSkeleton(){return <div className="skeleton-stack" aria-label="Conteúdo a carregar"><span/><span/><span/></div>}
