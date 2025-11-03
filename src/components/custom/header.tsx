import { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Menu } from './menu';

export const Header = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();
  //   const { toast } = useToast();

  //   useEffect(() => {
  //     supabase.auth.getSession().then(({ data: { session } }) => {
  //       setUser(session?.user || null);
  //     });

  //     const {
  //       data: { subscription },
  //     } = supabase.auth.onAuthStateChange((event, session) => {
  //       setUser(session?.user || null);
  //     });

  //     return () => subscription.unsubscribe();
  //   }, []);

  const handleLogout = async () => {
    // await supabase.auth.signOut();
    // toast({
    //   title: "Logout realizado",
    //   description: "Até logo!",
    // });
    // navigate("/");
  };

  // Não mostrar header na página de auth
  if (location.pathname === '/auth') {
    return null;
  }

  return (
    <header className='sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className='flex items-center gap-2 hover:opacity-80 transition-smooth'
        >
          <div className='w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center'>
            <ChefHat className='h-6 w-6 text-primary-foreground' />
          </div>
          <span className='text-xl font-bold text-foreground'>Chef IA</span>
        </button>

        {/* User Menu */}
        <Menu />
      </div>
    </header>
  );
};
