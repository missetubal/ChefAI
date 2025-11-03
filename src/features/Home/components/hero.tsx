import { Edit3, Camera } from 'lucide-react';
import heroImage from '@/assets/hero-cooking.jpg';
import { Button } from '@/components/ui';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-hero opacity-90' />
      <img
        src={heroImage}
        alt='Ingredientes frescos'
        className='absolute inset-0 w-full h-full object-cover mix-blend-overlay'
      />

      <div className='relative container mx-auto px-4 py-20 md:py-32'>
        <div className='max-w-3xl mx-auto text-center space-y-8'>
          <h1 className='text-4xl md:text-6xl font-bold text-primary-foreground drop-shadow-lg'>
            Descubra receitas com os ingredientes que você já tem!
          </h1>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='hero'
              size='lg'
              className='text-lg'
              onClick={() => navigate('/ingredients')}
            >
              <Edit3 className='h-5 w-5' />
              Digitar meus ingredientes
            </Button>

            <Button
              variant='premium'
              size='lg'
              className='text-lg'
              onClick={() => navigate('/upload')}
            >
              <Camera className='h-5 w-5' />
              Enviar foto da despensa
            </Button>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center text-primary-foreground text-lg pt-8'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              <span>Reduza desperdício</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              <span>Economize</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              <span>Cozinhe sem complicação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
