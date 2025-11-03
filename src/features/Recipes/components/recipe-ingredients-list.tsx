import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface Ingredient {
  name: string;
  amount: string;
  hasIt: boolean;
}

interface RecipeIngredientsListProps {
  ingredients: Ingredient[];
  onAddToShoppingList: (name: string, amount: string) => void;
}

export const RecipeIngredientsList = ({
  ingredients,
  onAddToShoppingList,
}: RecipeIngredientsListProps) => {
  const missingIngredients = ingredients.filter((i) => !i.hasIt);

  return (
    <Card className='p-6'>
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold text-foreground'>Ingredientes</h2>
          {missingIngredients.length > 0 && (
            <Badge
              variant='secondary'
              className='bg-warning text-warning-foreground'
            >
              Faltam {missingIngredients.length} ingredientes
            </Badge>
          )}
        </div>

        <div className='space-y-2'>
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg transition-smooth ${
                ingredient.hasIt
                  ? 'bg-success/10 border border-success/20'
                  : 'bg-destructive/10 border border-destructive/20'
              }`}
            >
              <div className='flex items-center gap-3'>
                <span className='text-2xl'>
                  {ingredient.hasIt ? '✅' : '❌'}
                </span>
                <div>
                  <p className='font-medium text-foreground'>
                    {ingredient.name}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {ingredient.amount}
                  </p>
                </div>
              </div>

              {!ingredient.hasIt && (
                <Button
                  size='sm'
                  variant='outline'
                  onClick={() =>
                    onAddToShoppingList(ingredient.name, ingredient.amount)
                  }
                >
                  <ShoppingCart className='h-4 w-4' />
                  Adicionar
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
