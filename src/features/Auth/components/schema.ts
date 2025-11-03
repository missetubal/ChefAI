import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: 'Email é obrigatório' })
    .email({ message: 'Email inválido' })
    .max(255, { message: 'Email muito longo' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    .max(100, { message: 'Senha muito longa' }),
});

export const registerSchema = loginSchema.extend({
  fullName: z
    .string()
    .trim()
    .nonempty({ message: 'Nome completo é obrigatório' })
    .max(100, { message: 'Nome muito longo' }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
