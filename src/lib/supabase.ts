import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const isDemoMode = !url || !anonKey || url.includes('dummy');

export const supabase = isDemoMode
  ? createClient('https://demo.supabase.co', 'demo-key', { auth: { persistSession: false } })
  : createClient(url, anonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
