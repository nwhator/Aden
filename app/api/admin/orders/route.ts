import { NextResponse } from 'next/server';
import { supabaseAdmin, isSupabaseConfigured } from '@/lib/supabaseClient';

export async function GET() {
  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: 'Supabase is not configured.' }, { status: 500 });
  }

  const { data, error } = await supabaseAdmin
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}
