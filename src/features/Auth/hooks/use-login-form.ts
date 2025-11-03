import { useForm } from 'react-hook-form';
import { loginSchema, type LoginFormData } from '../components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useAuth } from '@/hooks';

export const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (data: LoginFormData) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
    } catch (error: any) {
      // Error toast is handled in the hook
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    form.handleSubmit(handleLogin);
  };

  return { form, handleSubmit, loading };
};
