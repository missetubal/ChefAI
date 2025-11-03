import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';

interface ShoppingListItemProps {
  id: string;
  ingredientName: string;
  ingredientAmount: string;
  recipeTitle?: string;
  checked: boolean;
  onToggle: (id: string, checked: boolean) => void;
  onDelete: (id: string) => void;
}

export const ShoppingListItem = ({
  id,
  ingredientName,
  ingredientAmount,
  recipeTitle,
  checked,
  onToggle,
  onDelete,
}: ShoppingListItemProps) => {
  return (
    <Card
      className={`p-4 transition-smooth ${
        checked ? 'opacity-60 bg-muted' : ''
      }`}
    >
      <div className='flex items-start gap-4'>
        <Checkbox
          checked={checked}
          onCheckedChange={() => onToggle(id, checked)}
          className='mt-1'
        />

        <div className='flex-1'>
          <p
            className={`font-medium text-foreground ${
              checked ? 'line-through' : ''
            }`}
          >
            {ingredientName}
          </p>
          <p className='text-sm text-muted-foreground'>{ingredientAmount}</p>
          {recipeTitle && (
            <p className='text-xs text-muted-foreground italic mt-1'>
              Para: {recipeTitle}
            </p>
          )}
        </div>

        <Button variant='ghost' size='icon' onClick={() => onDelete(id)}>
          <Trash2 className='h-4 w-4 text-destructive' />
        </Button>
      </div>
    </Card>
  );
};
