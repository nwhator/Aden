import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';
import { products as fallbackProducts } from '@/lib/products';
import type { Product } from '@/lib/types';

function normalizeProduct(row: Record<string, unknown>): Product {
  const price = row.price;
  const formattedPrice =
    typeof price === 'number'
      ? `$${price.toFixed(2)}`
      : typeof price === 'string'
      ? price
      : '';

  return {
    id: String(row.id ?? ''),
    name: String(row.name ?? ''),
    subtitle: String(row.subtitle ?? ''),
    price: formattedPrice,
    image: String(row.image ?? ''),
    description: String(row.description ?? ''),
    slug: String(row.slug ?? ''),
    available: Boolean(row.available ?? true),
    created_at: String(row.created_at ?? ''),
    updated_at: String(row.updated_at ?? ''),
  };
}

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured) {
    return fallbackProducts;
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('available', true)
    .order('created_at', { ascending: false });

  if (error || !data) {
    return fallbackProducts;
  }

  return data.map(normalizeProduct);
}

export async function getProductById(id: string): Promise<Product | null> {
  if (!isSupabaseConfigured) {
    return fallbackProducts.find((product) => product.id === id) ?? null;
  }

  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();

  if (error || !data) {
    return null;
  }

  return normalizeProduct(data);
}
