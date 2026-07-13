import { Link } from 'react-router-dom';
import { ErrorState } from '../components/states/States';
export function NotFoundPage(){return <main className="sg-page auth-page"><ErrorState kind="results" title="Página inexistente" message="A página pedida não foi encontrada."/><Link className="sg-button" to="/">Voltar ao início</Link></main>}
