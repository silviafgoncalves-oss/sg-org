import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { paper: '#FDFBF7', ink: '#2C2A29', linen: '#EAE3D2', sage: '#7C7267', gold: '#9C784E' }, boxShadow: { premium: '0 24px 80px rgba(44,42,41,0.10)' } } },
  plugins: [],
} satisfies Config;
