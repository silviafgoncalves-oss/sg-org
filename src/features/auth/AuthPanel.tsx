import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { authSchema, type AuthFormValues } from './authSchema';

export function AuthPanel() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<AuthFormValues>({ mode: 'onChange' });
  return <form onSubmit={handleSubmit((values) => { const parsed = authSchema.safeParse(values); if (!parsed.success) return; })} className="rounded-[2rem] border border-linen bg-white/70 p-6 shadow-[0_20px_60px_rgba(156,120,78,0.12)] backdrop-blur"><p className="mb-4 text-xs uppercase tracking-[0.22em] text-taupe">Acesso seguro</p><div className="space-y-3"><input className="w-full rounded-2xl border border-linen bg-paper px-4 py-3" placeholder="email@exemplo.com" {...register('email')} /><input className="w-full rounded-2xl border border-linen bg-paper px-4 py-3" type="password" placeholder="Password" {...register('password')} /></div><div className="mt-4 space-y-2 text-sm text-taupe">{(['terms','privacy','gdpr'] as const).map((name) => <label key={name} className="flex gap-2"><input type="checkbox" {...register(name)} />{name === 'terms' ? 'Aceito os Termos de Serviço' : name === 'privacy' ? 'Aceito a Política de Privacidade' : 'Aceito o RGPD'}</label>)}</div><p className="mt-3 min-h-5 text-xs text-gold">{Object.values(errors)[0]?.message}</p><Button disabled={!isValid} className="mt-2 w-full">Entrar / Registar</Button></form>;
}
