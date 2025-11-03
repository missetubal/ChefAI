import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IngredientChipProps {
  ingredient: string;
  onRemove: () => void;
}

export const IngredientChip = ({
  ingredient,
  onRemove,
}: IngredientChipProps) => {
  return (
    <div className='inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium shadow-sm transition-smooth hover:shadow-glow-primary'>
      <span>{ingredient}</span>
      <Button
        variant='ghost'
        size='icon'
        className='h-4 w-4 rounded-full hover:bg-primary-foreground/20 p-0'
        onClick={onRemove}
      >
        <X className='h-3 w-3' />
      </Button>
    </div>
  );
};
