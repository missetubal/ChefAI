import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import type { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabase/client';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      let errorMessage = 'Erro ao processar autenticação';

      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Email ou senha incorretos';
      }

      throw new Error(errorMessage);
    }

    toast({
      title: 'Login realizado com sucesso!',
      description: 'Bem-vindo de volta ao Chef IA',
    });

    return { error: null };
  };

  const register = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      let errorMessage = 'Erro ao criar conta';

      if (error.message.includes('User already registered')) {
        errorMessage = 'Este email já está cadastrado';
      } else if (error.message.includes('Password')) {
        errorMessage = 'A senha deve ter no mínimo 6 caracteres';
      }

      throw new Error(errorMessage);
    }

    toast({
      title: 'Conta criada com sucesso!',
      description: 'Bem-vindo ao Chef IA',
    });

    return { error: null };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    toast({
      title: 'Logout realizado',
      description: 'Até logo!',
    });
    navigate('/');
  };

  return {
    user,
    session,
    loading,
    login,
    register,
    logout,
  };
};
