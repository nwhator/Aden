import { NextResponse } from 'next/server';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: 'Supabase is not configured.' }, { status: 500 });
  }

  const payload = await request.json();
  const { title, excerpt } = payload;

  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .insert([{ title, excerpt, published_at: new Date().toISOString() }])
    .select()
    .single();

  if (error || !data) {
    return NextResponse.json({ error: error?.message ?? 'Unable to publish blog post.' }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
