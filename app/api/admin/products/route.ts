import { NextResponse } from 'next/server';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: 'Supabase is not configured.' }, { status: 500 });
  }

  const payload = await request.json();
  const { name, subtitle, price, image } = payload;

  const { data, error } = await supabaseAdmin
    .from('products')
    .insert([{ name, subtitle, price, image }])
    .select()
    .single();

  if (error || !data) {
    return NextResponse.json({ error: error?.message ?? 'Unable to create product.' }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
