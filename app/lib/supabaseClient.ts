import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables. Please check your .env.local or Vercel Environment Variables settings.");
}

export const supabase = createClient(supabaseUrl as string, supabaseKey as string);
