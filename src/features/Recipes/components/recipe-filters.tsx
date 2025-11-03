import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

interface RecipeFiltersProps {
  timeFilter: string | null;
  difficultyFilter: string | null;
  categoryFilter: string | null;
  showOnlyComplete: boolean;
  onTimeFilterChange: (filter: string | null) => void;
  onDifficultyFilterChange: (filter: string | null) => void;
  onCategoryFilterChange: (filter: string | null) => void;
  onShowOnlyCompleteChange: (show: boolean) => void;
}

export const RecipeFilters = ({
  timeFilter,
  difficultyFilter,
  categoryFilter,
  showOnlyComplete,
  onTimeFilterChange,
  onDifficultyFilterChange,
  onCategoryFilterChange,
  onShowOnlyCompleteChange,
}: RecipeFiltersProps) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        {/* Time Filters */}
        <div className='space-y-2'>
          <p className='text-sm font-medium text-muted-foreground'>
            Tempo de preparo
          </p>
          <div className='flex flex-wrap gap-2'>
            <Button
              variant={timeFilter === 'quick' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onTimeFilterChange(timeFilter === 'quick' ? null : 'quick')
              }
            >
              <Clock className='h-4 w-4' />
              Rápido &lt;30min
            </Button>
            <Button
              variant={timeFilter === 'medium' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onTimeFilterChange(timeFilter === 'medium' ? null : 'medium')
              }
            >
              <Clock className='h-4 w-4' />
              Médio
            </Button>
            <Button
              variant={timeFilter === 'long' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onTimeFilterChange(timeFilter === 'long' ? null : 'long')
              }
            >
              <Clock className='h-4 w-4' />
              Longo
            </Button>
          </div>
        </div>

        {/* Difficulty Filters */}
        <div className='space-y-2'>
          <p className='text-sm font-medium text-muted-foreground'>
            Dificuldade
          </p>
          <div className='flex flex-wrap gap-2'>
            <Button
              variant={difficultyFilter === 'easy' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onDifficultyFilterChange(
                  difficultyFilter === 'easy' ? null : 'easy'
                )
              }
            >
              🥗 Fácil
            </Button>
            <Button
              variant={difficultyFilter === 'medium' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onDifficultyFilterChange(
                  difficultyFilter === 'medium' ? null : 'medium'
                )
              }
            >
              👨‍🍳 Médio
            </Button>
            <Button
              variant={difficultyFilter === 'hard' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onDifficultyFilterChange(
                  difficultyFilter === 'hard' ? null : 'hard'
                )
              }
            >
              💫 Chef
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className='space-y-2'>
          <p className='text-sm font-medium text-muted-foreground'>
            Tipo de refeição
          </p>
          <div className='flex flex-wrap gap-2'>
            <Button
              variant={categoryFilter === 'breakfast' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onCategoryFilterChange(
                  categoryFilter === 'breakfast' ? null : 'breakfast'
                )
              }
            >
              🍳 Café
            </Button>
            <Button
              variant={categoryFilter === 'lunch' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onCategoryFilterChange(
                  categoryFilter === 'lunch' ? null : 'lunch'
                )
              }
            >
              🍛 Almoço
            </Button>
            <Button
              variant={categoryFilter === 'dinner' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onCategoryFilterChange(
                  categoryFilter === 'dinner' ? null : 'dinner'
                )
              }
            >
              🍽️ Jantar
            </Button>
            <Button
              variant={categoryFilter === 'dessert' ? 'default' : 'outline'}
              size='sm'
              onClick={() =>
                onCategoryFilterChange(
                  categoryFilter === 'dessert' ? null : 'dessert'
                )
              }
            >
              🍰 Sobremesa
            </Button>
          </div>
        </div>
      </div>

      {/* Complete Match Toggle */}
      <Button
        variant={showOnlyComplete ? 'default' : 'outline'}
        onClick={() => onShowOnlyCompleteChange(!showOnlyComplete)}
      >
        {showOnlyComplete ? '✅' : '☑️'} Mostrar apenas receitas completas
      </Button>
    </div>
  );
};
