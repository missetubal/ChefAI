import { Header } from '@/components/custom/header';
import { Hero, HeroContent, Premium } from '@/features/Home';

export const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-subtle'>
      <Header />
      <Hero />
      <HeroContent />
      <Premium />
    </div>
  );
};
