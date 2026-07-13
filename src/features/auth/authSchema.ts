import { z } from 'zod';

export const authSchema = z.object({ email: z.string().email('Email inválido'), password: z.string().min(8, 'A password deve ter pelo menos 8 caracteres'), terms: z.literal(true), privacy: z.literal(true), gdpr: z.literal(true) });
export type AuthFormValues = z.infer<typeof authSchema>;
