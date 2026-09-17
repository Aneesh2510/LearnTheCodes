import { supabase } from '../lib/supabase';
import type { AuthResult } from '../types/auth';

function toResult(error: { message: string } | null): AuthResult { return { error: error ? { message: error.message } : null }; }

export const authService = {
  getSession: () => supabase.auth.getSession(),
  onAuthStateChange: (listener: Parameters<typeof supabase.auth.onAuthStateChange>[0]) => supabase.auth.onAuthStateChange(listener),
  async signIn(email: string, password: string): Promise<AuthResult> {
    const { error } = await supabase.auth.signInWithPassword({ email, password }); return toResult(error);
  },
  async signUp(email: string, password: string, displayName?: string): Promise<AuthResult> {
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName ?? '' } } }); return toResult(error);
  },
  async signOut(): Promise<AuthResult> { const { error } = await supabase.auth.signOut(); return toResult(error); },
  async signInWithGoogle(): Promise<AuthResult> {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/dashboard` } }); return toResult(error);
  },
  async resetPassword(email: string): Promise<AuthResult> {
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` }); return toResult(error);
  },
  async updatePassword(password: string): Promise<AuthResult> { const { error } = await supabase.auth.updateUser({ password }); return toResult(error); },
};
