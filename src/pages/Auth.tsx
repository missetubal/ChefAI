import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';
import { useAuth } from '@/hooks';
import { LoginForm, SignupForm } from '@/features/Auth';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8'>
      <Card className='w-full max-w-md p-8 space-y-6'>
        {/* Logo/Header */}
        <div className='text-center space-y-2'>
          <div className='flex justify-center mb-4'>
            <div className='w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center'>
              <ChefHat className='h-8 w-8 text-primary-foreground' />
            </div>
          </div>
          <h1 className='text-3xl font-bold text-foreground'>Chef IA</h1>
          <p className='text-muted-foreground'>
            {isLogin
              ? 'Faça login para continuar'
              : 'Crie sua conta gratuitamente'}
          </p>
        </div>

        {/* Form */}
        {isLogin ? <LoginForm /> : <SignupForm />}

        {/* Toggle */}
        <div className='text-center space-y-2'>
          <p className='text-sm text-muted-foreground'>
            {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
          </p>
          <Button
            variant='ghost'
            onClick={() => setIsLogin(!isLogin)}
            className='font-semibold'
          >
            {isLogin ? 'Criar conta gratuita' : 'Fazer login'}
          </Button>
        </div>
      </Card>
    </div>
  );
};
