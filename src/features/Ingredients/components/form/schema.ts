import { z } from 'zod';

export const ingredientSchema = z.object({
  ingredient: z
    .string()
    .trim()
    .nonempty({ message: 'Ingrediente não pode estar vazio' })
    .max(100, { message: 'Nome muito longo' }),
});

export type IngredientFormData = z.infer<typeof ingredientSchema>;
