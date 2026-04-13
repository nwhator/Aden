import AdminDashboard from '@/components/admin/AdminDashboard';
import { isSupabaseConfigured, supabaseAdmin } from '@/lib/supabaseClient';
import type { BlogPost, Order, Product } from '@/lib/types';

const sampleProducts: Product[] = [
  { id: 'obsidian-oxford', name: 'The Obsidian Oxford', subtitle: 'Signature Collection', price: '$1,250', image: '' },
];

const samplePosts: BlogPost[] = [
  { id: 'intro-to-bespoke', title: 'The Craft of Bespoke', excerpt: 'Explore the rituals and detail that define every ADEN shoe.', published_at: new Date().toISOString() },
];

const sampleOrders: Order[] = [
  { id: '001', customerName: 'Julian V. Rothschild', status: 'Processing', total: '$1,450', createdAt: '2026-04-05' },
];

async function fetchAdminData() {
  if (!isSupabaseConfigured) {
    return { products: sampleProducts, posts: samplePosts, orders: sampleOrders };
  }

  const [productsRes, postsRes, ordersRes] = await Promise.all([
    supabaseAdmin.from('products').select('*').limit(20),
    supabaseAdmin.from('blog_posts').select('*').order('published_at', { ascending: false }).limit(20),
    supabaseAdmin.from('orders').select('*').order('created_at', { ascending: false }).limit(20),
  ]);

  const products = productsRes.error ? sampleProducts : (productsRes.data as Product[]);
  const posts = postsRes.error ? samplePosts : (postsRes.data as BlogPost[]);
  const orders = ordersRes.error ? sampleOrders :
    (ordersRes.data as Array<Record<string, unknown>>).map((order) => ({
      id: String(order.id ?? 'unknown'),
      customerName: String(order.customer_name ?? order.customerName ?? 'Guest'),
      status: String(order.status ?? 'Unknown'),
      total: String(order.total ?? '—'),
      createdAt: String(order.created_at ?? order.createdAt ?? ''),
    }));

  return { products, posts, orders };
}

export default async function AdminPage() {
  const { products, posts, orders } = await fetchAdminData();

  return (
    <main className="pt-28 bg-surface text-onSurface">
      <AdminDashboard
        initialProducts={products}
        initialPosts={posts}
        initialOrders={orders}
        supabaseReady={isSupabaseConfigured}
      />
    </main>
  );
}
