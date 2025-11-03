import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/utils/supabase/client';

export interface ShoppingListItem {
  id: string;
  ingredient_name: string;
  ingredient_amount: string;
  recipe_id: string | null;
  recipe_title?: string | null;
  checked: boolean | null;
  created_at: string;
}

export const useShoppingList = (userId: string | undefined) => {
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (userId) {
      loadShoppingList();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const loadShoppingList = async () => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from('shopping_list')
        .select('*')
        .eq('user_id', userId)
        .order('checked', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;

      setItems(data || []);
    } catch (error: any) {
      toast({
        title: 'Erro ao carregar lista',
        description: error.message,
        // variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (
    ingredientName: string,
    ingredientAmount: string,
    recipeId?: string,
    recipeTitle?: string
  ) => {
    if (!userId) {
      throw new Error('Login necessário');
    }

    const { error } = await supabase.from('shopping_list').insert({
      user_id: userId,
      ingredient_name: ingredientName,
      ingredient_amount: ingredientAmount,
      recipe_id: recipeId,
      recipe_title: recipeTitle,
    });

    if (error) {
      if (error.code === '23505') {
        throw new Error('Este item já está na sua lista de compras');
      }
      throw error;
    }

    toast({
      title: 'Adicionado à lista!',
      description: `${ingredientName} foi adicionado à sua lista de compras`,
    });

    await loadShoppingList();
  };

  const toggleItem = async (id: string, checked: boolean) => {
    const { error } = await supabase
      .from('shopping_list')
      .update({ checked: !checked })
      .eq('id', id);

    if (error) throw error;

    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !checked } : item
      )
    );
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase
      .from('shopping_list')
      .delete()
      .eq('id', id);

    if (error) throw error;

    setItems(items.filter((item) => item.id !== id));

    toast({
      title: 'Item removido',
      description: 'Item excluído da lista',
    });
  };

  const clearCompleted = async () => {
    const completedIds = items
      .filter((item) => item.checked)
      .map((item) => item.id);

    if (completedIds.length === 0) return;

    const { error } = await supabase
      .from('shopping_list')
      .delete()
      .in('id', completedIds);

    if (error) throw error;

    setItems(items.filter((item) => !item.checked));

    toast({
      title: 'Items removidos',
      description: `${completedIds.length} item(ns) removido(s)`,
    });
  };

  const shareOnWhatsApp = () => {
    const uncheckedItems = items.filter((item) => !item.checked);

    if (uncheckedItems.length === 0) {
      toast({
        title: 'Lista vazia',
        description: 'Adicione itens à lista antes de compartilhar',
      });
      return;
    }

    let message = '*🛒 Lista de Compras - Chef IA*\n\n';

    uncheckedItems.forEach((item, index) => {
      message += `${index + 1}. ${item.ingredient_name} - ${
        item.ingredient_amount
      }\n`;
      if (item.recipe_title) {
        message += `   _Para: ${item.recipe_title}_\n`;
      }
    });

    message += '\n_Gerado pelo Chef IA_';

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  return {
    items,
    loading,
    addItem,
    toggleItem,
    deleteItem,
    clearCompleted,
    shareOnWhatsApp,
    refreshList: loadShoppingList,
  };
};
