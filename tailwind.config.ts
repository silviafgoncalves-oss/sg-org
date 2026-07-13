import type { Config } from 'tailwindcss';

export default { content: ['./index.html', './src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { serif: ['Georgia', 'Cambria', 'serif'], sans: ['Inter', 'ui-sans-serif', 'system-ui'] }, colors: { paper: '#FDFBF7', ink: '#2C2A29', linen: '#EAE3D2', taupe: '#7C7267', gold: '#9C784E' } } }, plugins: [] } satisfies Config;
