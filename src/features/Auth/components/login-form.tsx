import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLoginForm } from '../hooks';

export const LoginForm = () => {
  const { form, handleSubmit, loading } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className='space-y-4'>
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
          {loading ? 'Processando...' : 'Entrar'}
        </Button>
      </form>
    </Form>
  );
};
