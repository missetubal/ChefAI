import { Clock, Star, ChefHat } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: number;
  difficulty: 'easy' | 'medium' | 'hard';
  rating: number;
  reviews: number;
  matchPercentage: number;
  missingIngredients: number;
}

const difficultyLabels = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Chef',
};

const difficultyIcons = {
  easy: '🥗',
  medium: '👨‍🍳',
  hard: '💫',
};

export const RecipeCard = ({
  id,
  title,
  image,
  time,
  difficulty,
  rating,
  reviews,
  matchPercentage,
  missingIngredients,
}: RecipeCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className='overflow-hidden transition-smooth hover:shadow-lg hover:bg-card-hover cursor-pointer group'>
      <div className='relative aspect-video overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-smooth group-hover:scale-105'
        />
        <div className='absolute top-2 right-2'>
          {matchPercentage === 100 ? (
            <Badge className='bg-success text-success-foreground'>
              ✅ Você TEM todos
            </Badge>
          ) : (
            <Badge
              variant='secondary'
              className='bg-warning text-warning-foreground'
            >
              ⚠️ Faltam {missingIngredients}
            </Badge>
          )}
        </div>
      </div>

      <div className='p-4 space-y-3'>
        <h3 className='font-semibold text-lg text-card-foreground line-clamp-2'>
          {title}
        </h3>

        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <div className='flex items-center gap-1'>
            <Star className='h-4 w-4 fill-secondary text-secondary' />
            <span className='font-medium'>{rating}</span>
            <span>({reviews})</span>
          </div>
        </div>

        <div className='flex items-center gap-3 text-sm text-muted-foreground'>
          <div className='flex items-center gap-1'>
            <Clock className='h-4 w-4' />
            <span>{time} min</span>
          </div>
          <div className='flex items-center gap-1'>
            <span>{difficultyIcons[difficulty]}</span>
            <span>{difficultyLabels[difficulty]}</span>
          </div>
        </div>

        <Button
          variant='default'
          className='w-full'
          onClick={() => navigate(`/recipe/${id}`)}
        >
          Ver Receita
        </Button>
      </div>
    </Card>
  );
};
