import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { ingredientSchema, type IngredientFormData } from './schema';

interface IngredientInputProps {
  onAdd: (ingredient: string) => void;
}

export const IngredientInput = ({ onAdd }: IngredientInputProps) => {
  const form = useForm<IngredientFormData>({
    resolver: zodResolver(ingredientSchema),
    defaultValues: {
      ingredient: '',
    },
  });

  const handleSubmit = (data: IngredientFormData) => {
    onAdd(data.ingredient);
    form.reset();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      form.handleSubmit(handleSubmit)();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='flex gap-2'>
        <FormField
          control={form.control}
          name='ingredient'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <Input
                  placeholder='Digite seus ingredientes (ex: frango, arroz, tomate...)'
                  className='text-lg'
                  onKeyPress={handleKeyPress}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit' size='lg'>
          Adicionar
        </Button>
      </form>
    </Form>
  );
};
