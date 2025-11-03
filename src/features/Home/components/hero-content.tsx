export const HeroContent = () => {
  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 text-foreground'>
          Como funciona o Chef IA?
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center space-y-4'>
            <div className='w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-3xl'>
              1️⃣
            </div>
            <h3 className='font-semibold text-xl text-foreground'>
              Adicione ingredientes
            </h3>
            <p className='text-muted-foreground'>
              Digite ou fotografe os ingredientes que você tem em casa
            </p>
          </div>

          <div className='text-center space-y-4'>
            <div className='w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-3xl'>
              2️⃣
            </div>
            <h3 className='font-semibold text-xl text-foreground'>
              Encontre receitas
            </h3>
            <p className='text-muted-foreground'>
              Nossa IA busca as melhores receitas compatíveis
            </p>
          </div>

          <div className='text-center space-y-4'>
            <div className='w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-3xl'>
              3️⃣
            </div>
            <h3 className='font-semibold text-xl text-foreground'>
              Cozinhe e aproveite!
            </h3>
            <p className='text-muted-foreground'>
              Siga o passo a passo e prepare pratos deliciosos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
