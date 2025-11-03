import { Card } from '@/components/ui/card';

interface RecipeStepsProps {
  steps: string[];
}

export const RecipeSteps = ({ steps }: RecipeStepsProps) => {
  return (
    <Card className='p-6'>
      <div className='space-y-4'>
        <h2 className='text-2xl font-bold text-foreground'>Modo de Preparo</h2>

        <div className='space-y-4'>
          {steps.map((step, index) => (
            <div key={index} className='flex gap-4'>
              <div className='flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold'>
                {index + 1}
              </div>
              <p className='text-foreground pt-1'>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
