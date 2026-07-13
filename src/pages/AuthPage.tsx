import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '../components/ui/Button';
import { supabase } from '../services/supabaseClient';

const authSchema = z.object({
  email: z.string().email('Indique um email válido.'),
  password: z.string().min(8, 'A password deve ter pelo menos 8 caracteres.'),
  terms: z.boolean().refine(Boolean, 'Aceite os Termos de Serviço.'),
  privacy: z.boolean().refine(Boolean, 'Aceite a Política de Privacidade.'),
  rgpd: z.boolean().refine(Boolean, 'Aceite o RGPD.'),
});

type AuthForm = z.infer<typeof authSchema>;

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AuthForm>({ resolver: zodResolver(authSchema) });

  async function onSubmit(values: AuthForm) {
    if (!supabase) {
      setMessage('Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY para ativar autenticação cloud.');
      return;
    }
    const authCall = mode === 'login'
      ? supabase.auth.signInWithPassword({ email: values.email, password: values.password })
      : supabase.auth.signUp({ email: values.email, password: values.password });
    const { error } = await authCall;
    if (error) setMessage(error.message);
    else navigate('/dashboard');
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper p-6 text-ink">
      <section className="w-full max-w-lg rounded-[2rem] border border-linen bg-white/70 p-8 shadow-premium">
        <Link to="/" className="text-xs uppercase tracking-[0.28em] text-sage">SG-Org</Link>
        <h1 className="mt-6 font-serif text-4xl italic">{mode === 'login' ? 'Entrar' : 'Criar conta'}</h1>
        <p className="mt-3 text-sm leading-6 text-sage">O acesso exige aceitação explícita dos termos, privacidade e RGPD.</p>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <input className="w-full rounded-2xl border border-linen bg-paper px-4 py-3" placeholder="Email" type="email" {...register('email')} />
          <input className="w-full rounded-2xl border border-linen bg-paper px-4 py-3" placeholder="Password" type="password" {...register('password')} />
          {(['terms', 'privacy', 'rgpd'] as const).map((name) => (
            <label key={name} className="flex gap-3 text-sm text-sage"><input type="checkbox" {...register(name)} /> {name === 'terms' ? 'Termos de Serviço' : name === 'privacy' ? 'Política de Privacidade' : 'RGPD'}</label>
          ))}
          <div className="space-y-1 text-sm text-red-700">{Object.values(errors).map((error) => <p key={error.message}>{error.message}</p>)}</div>
          {message && <p className="text-sm text-sage">{message}</p>}
          <Button disabled={isSubmitting} type="submit" className="w-full">{mode === 'login' ? 'Iniciar sessão' : 'Registar'}</Button>
        </form>
        <button className="mt-5 text-sm text-gold" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'Criar conta' : 'Já tenho conta'}</button>
      </section>
    </main>
  );
}
