import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { features } from '@/constants/premium';
import { Check, X, Crown } from 'lucide-react';

export const Premium = () => {
  return (
    <div className='min-h-screen bg-gradient-subtle'>
      <div className='container mx-auto px-4 py-16 max-w-6xl'>
        <div className='space-y-12'>
          {/* Header */}
          <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <Crown className='h-16 w-16 text-secondary' />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
              Turbine sua experiência culinária
            </h1>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Desbloqueie recursos exclusivos e cozinhe sem limites
            </p>
          </div>

          {/* Pricing Cards */}
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {/* Free Plan */}
            <Card className='p-8 space-y-6 border-2'>
              <div className='space-y-2'>
                <h3 className='text-2xl font-bold text-foreground'>Gratuito</h3>
                <div className='flex items-baseline gap-2'>
                  <span className='text-4xl font-bold text-foreground'>
                    R$ 0
                  </span>
                  <span className='text-muted-foreground'>/mês</span>
                </div>
              </div>

              <div className='space-y-3'>
                {features.free.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    {feature.included ? (
                      feature.negative ? (
                        <X className='h-5 w-5 text-destructive flex-shrink-0 mt-0.5' />
                      ) : (
                        <Check className='h-5 w-5 text-success flex-shrink-0 mt-0.5' />
                      )
                    ) : (
                      <X className='h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5' />
                    )}
                    <span
                      className={
                        feature.included && !feature.negative
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button variant='outline' size='lg' className='w-full'>
                Plano Atual
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className='p-8 space-y-6 border-2 border-primary shadow-glow-primary relative overflow-hidden'>
              <div className='absolute top-0 right-0 bg-gradient-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold'>
                Recomendado
              </div>

              <div className='space-y-2'>
                <h3 className='text-2xl font-bold text-foreground flex items-center gap-2'>
                  Premium
                  <Crown className='h-6 w-6 text-secondary' />
                </h3>
                <div className='flex items-baseline gap-2'>
                  <span className='text-4xl font-bold text-foreground'>
                    R$ 9,90
                  </span>
                  <span className='text-muted-foreground'>/mês</span>
                </div>
              </div>

              <div className='space-y-3'>
                {features.premium.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-success flex-shrink-0 mt-0.5' />
                    <span className='text-foreground font-medium'>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button variant='premium' size='lg' className='w-full'>
                Assinar Premium
              </Button>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-8 text-foreground'>
              Por que escolher Premium?
            </h2>

            <div className='grid md:grid-cols-3 gap-6'>
              <Card className='p-6 text-center space-y-3'>
                <div className='text-4xl'>🚀</div>
                <h3 className='font-semibold text-lg text-foreground'>
                  Ilimitado
                </h3>
                <p className='text-muted-foreground'>
                  Use quantas vezes quiser sem restrições
                </p>
              </Card>

              <Card className='p-6 text-center space-y-3'>
                <div className='text-4xl'>📱</div>
                <h3 className='font-semibold text-lg text-foreground'>
                  Offline
                </h3>
                <p className='text-muted-foreground'>
                  Acesse suas receitas mesmo sem internet
                </p>
              </Card>

              <Card className='p-6 text-center space-y-3'>
                <div className='text-4xl'>🎯</div>
                <h3 className='font-semibold text-lg text-foreground'>
                  Exclusividade
                </h3>
                <p className='text-muted-foreground'>
                  Receitas especiais criadas por chefs
                </p>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='max-w-3xl mx-auto space-y-6'>
            <h2 className='text-3xl font-bold text-center text-foreground'>
              Perguntas Frequentes
            </h2>

            <div className='space-y-4'>
              <Card className='p-6 space-y-2'>
                <h3 className='font-semibold text-lg text-foreground'>
                  Posso cancelar a qualquer momento?
                </h3>
                <p className='text-muted-foreground'>
                  Sim! Você pode cancelar sua assinatura a qualquer momento sem
                  taxas ou multas.
                </p>
              </Card>

              <Card className='p-6 space-y-2'>
                <h3 className='font-semibold text-lg text-foreground'>
                  Tem período de teste grátis?
                </h3>
                <p className='text-muted-foreground'>
                  Oferecemos 7 dias de teste gratuito para novos usuários
                  Premium!
                </p>
              </Card>

              <Card className='p-6 space-y-2'>
                <h3 className='font-semibold text-lg text-foreground'>
                  Quais são as formas de pagamento?
                </h3>
                <p className='text-muted-foreground'>
                  Aceitamos cartão de crédito, PIX e boleto bancário.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
