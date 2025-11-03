import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterFormData } from '../components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useAuth } from '@/hooks';

export const useRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleRegister = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      await register(data.email, data.password, data.fullName);
    } catch (error: any) {
      // Error toast is handled in the hook
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    form.handleSubmit(handleRegister);
  };

  return { form, handleSubmit, loading };
};
