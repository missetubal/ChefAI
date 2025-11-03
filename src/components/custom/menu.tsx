import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { Heart, LogOut, ShoppingCart, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const Menu = () => {
  const user = '';
  const navigate = useNavigate();

  return (
    <div className='flex items-center gap-2'>
      {user ? (
        <>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => navigate('/favorites')}
            title='Favoritos'
          >
            <Heart className='h-5 w-5' />
          </Button>

          <Button
            variant='ghost'
            size='icon'
            onClick={() => navigate('/shopping-list')}
            title='Lista de Compras'
          >
            <ShoppingCart className='h-5 w-5' />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon'>
                <User className='h-5 w-5' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-56'>
              <div className='px-2 py-2'>
                {/* <p className='text-sm font-medium'>{user.email}</p> */}
                <p className='text-xs text-muted-foreground'>
                  {/* {user.user_metadata?.full_name || 'Usuário'} */}
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/premium')}>
                ⭐ Plano Premium
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                // onClick={handleLogout}
                className='text-destructive'
              >
                <LogOut className='h-4 w-4 mr-2' />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Button variant='hero' onClick={() => navigate('/auth')}>
          Entrar
        </Button>
      )}
    </div>
  );
};
