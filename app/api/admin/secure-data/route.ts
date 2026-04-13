import { NextResponse } from 'next/server';
import { isSupabaseConfigured, supabaseAdmin } from '@/lib/supabaseClient';
import type { BlogPost, Order, Product } from '@/lib/types';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

const sampleProducts: Product[] = [
  { id: 'obsidian-oxford', name: 'The Obsidian Oxford', subtitle: 'Signature Collection', price: '$1,250', image: '' },
];

const samplePosts: BlogPost[] = [
  { id: 'intro-to-bespoke', title: 'The Craft of Bespoke', excerpt: 'Explore the rituals and detail that define every ADEN shoe.', published_at: new Date().toISOString() },
];

const sampleOrders: Order[] = [
  { id: '001', customerName: 'Julian V. Rothschild', status: 'Processing', total: '$1,450', createdAt: '2026-04-05' },
];

export async function POST(request: Request) {
  const body = await request.json();
  const token = String(body?.token ?? '');

  if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: 'Invalid access token' }, { status: 401 });
  }

  if (!isSupabaseConfigured) {
    return NextResponse.json({ products: sampleProducts, posts: samplePosts, orders: sampleOrders, supabaseReady: false });
  }

  const [productsRes, postsRes, ordersRes] = await Promise.all([
    supabaseAdmin.from('products').select('*').limit(20),
    supabaseAdmin.from('blog_posts').select('*').order('published_at', { ascending: false }).limit(20),
    supabaseAdmin.from('orders').select('*').order('created_at', { ascending: false }).limit(20),
  ]);

  if (productsRes.error || postsRes.error || ordersRes.error) {
    return NextResponse.json({ error: 'Unable to load admin data' }, { status: 500 });
  }

  const products = productsRes.data as Product[];
  const posts = postsRes.data as BlogPost[];
  const orders = (ordersRes.data as Array<Record<string, unknown>>).map((order) => ({
    id: String(order.id ?? 'unknown'),
    customerName: String(order.customer_name ?? order.customerName ?? 'Guest'),
    status: String(order.status ?? 'Unknown'),
    total: String(order.total ?? '—'),
    createdAt: String(order.created_at ?? order.createdAt ?? ''),
  }));

  return NextResponse.json({ products, posts, orders, supabaseReady: true });
}
