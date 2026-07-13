import { ErrorState } from '../components/states/States';
export function ErrorBoundaryPage(){return <main className="sg-page auth-page"><ErrorState kind="unexpected" title="Erro inesperado" message="Não foi possível concluir a operação. Tente novamente dentro de instantes."/></main>}
