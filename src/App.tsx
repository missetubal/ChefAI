import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { TooltipProvider, Toaster as Sonner, Toaster } from './components/ui';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/auth' element={<Auth />} />
          <Route path='/ingredients' element={<Ingredients />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/results' element={<Results />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/shopping-list' element={<ShoppingList />} />
          <Route path='/premium' element={<Premium />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
