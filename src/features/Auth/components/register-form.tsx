import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, User } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { useRegisterForm } from '../hooks';

export const SignupForm = () => {
  const { form, handleSubmit, loading } = useRegisterForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <div className='relative'>
                  <User className='absolute left-3 top-3 h-5 w-5 text-muted-foreground' />
                  <Input
                    type='text'
                    placeholder='Seu nome completo'
                    className='pl-10'
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Mail className='absolute left-3 top-3 h-5 w-5 text-muted-foreground' />
                  <Input
                    type='email'
                    placeholder='seu@email.com'
                    className='pl-10'
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-5 w-5 text-muted-foreground' />
                  <Input
                    type='password'
                    placeholder='••••••••'
                    className='pl-10'
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>Mínimo de 6 caracteres</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          variant='hero'
          className='w-full'
          disabled={loading}
        >
          {loading ? 'Processando...' : 'Criar Conta'}
        </Button>
      </form>
    </Form>
  );
};
