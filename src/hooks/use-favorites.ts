import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/utils/supabase/client';

export interface Favorite {
  id: string;
  recipe_id: string;
  recipe_title: string;
  recipe_image: string;
  created_at: string;
}

export const useFavorites = (userId: string | undefined) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (userId) {
      loadFavorites();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const loadFavorites = async () => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setFavorites(data || []);
    } catch (error: any) {
      toast({
        title: 'Erro ao carregar favoritos',
        description: error.message,

        // variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const checkIfFavorite = async (recipeId: string): Promise<boolean> => {
    if (!userId) return false;

    const { data } = await supabase
      .from('favorites')
      .select('id')
      .eq('user_id', userId)
      .eq('recipe_id', recipeId)
      .maybeSingle();

    return !!data;
  };

  const addFavorite = async (
    recipeId: string,
    recipeTitle: string,
    recipeImage: string
  ) => {
    if (!userId) {
      throw new Error('Login necessário');
    }

    const { error } = await supabase.from('favorites').insert({
      user_id: userId,
      recipe_id: recipeId,
      recipe_title: recipeTitle,
      recipe_image: recipeImage,
    });

    if (error) throw error;

    toast({
      title: 'Adicionado aos favoritos!',
    });

    await loadFavorites();
  };

  const removeFavorite = async (recipeId: string) => {
    if (!userId) {
      throw new Error('Login necessário');
    }

    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', userId)
      .eq('recipe_id', recipeId);

    if (error) throw error;

    toast({
      title: 'Removido dos favoritos',
    });

    await loadFavorites();
  };

  return {
    favorites,
    loading,
    checkIfFavorite,
    addFavorite,
    removeFavorite,
    refreshFavorites: loadFavorites,
  };
};
