import { supabase } from '../lib/supabase';
import type { AuthResult, AuthError, AuthSession } from '../types/auth';

const isDemoMode = !import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL.includes('dummy');

let demoListener: ((_event: string, session: AuthSession | null) => void) | null = null;

const errorMessages: Record<string, string> = {
  invalid_credentials: 'Invalid email or password.',
  email_not_confirmed: 'Please confirm your email address first.',
  user_already_exists: 'An account with this email already exists.',
  weak_password: 'Password is too weak. Use at least 8 characters.',
  user_not_found: 'No account found with this email.',
  expired_token: 'This link has expired. Please request a new one.',
  access_denied: 'Access denied. Please try again.',
  network_error: 'Network error. Please check your connection.',
};

function mapError(error: { message: string; code?: string } | null): AuthError | null {
  if (!error) return null;
  const code = (error as { code?: string }).code;
  if (code && errorMessages[code]) return { message: errorMessages[code] };
  const msg = error.message.toLowerCase();
  if (msg.includes('invalid login credentials') || msg.includes('invalid credentials')) return { message: errorMessages.invalid_credentials };
  if (msg.includes('email not confirmed')) return { message: errorMessages.email_not_confirmed };
  if (msg.includes('already registered') || msg.includes('already exists')) return { message: errorMessages.user_already_exists };
  if (msg.includes('weak password') || msg.includes('password should be at least')) return { message: errorMessages.weak_password };
  if (msg.includes('user not found')) return { message: errorMessages.user_not_found };
  if (msg.includes('expired') || msg.includes('invalid token')) return { message: errorMessages.expired_token };
  return { message: error.message || 'An unexpected error occurred.' };
}

function toResult(error: { message: string; code?: string } | null, sessionExists?: boolean): AuthResult {
  return { error: mapError(error), sessionExists };
}

function createDemoSession(email: string, displayName?: string): AuthSession {
  return {
    access_token: 'demo-token',
    token_type: 'bearer',
    expires_in: 3600,
    refresh_token: 'demo-refresh',
    user: { id: 'demo-user-id', email, user_metadata: { display_name: displayName ?? email.split('@')[0] }, app_metadata: {}, aud: 'authenticated', created_at: new Date().toISOString() },
  };
}

function triggerDemoListener(session: AuthSession | null) {
  if (demoListener) {
    setTimeout(() => demoListener?.('SIGNED_IN', session), 0);
  }
}

export const authService = {
  getSession: () => isDemoMode ? Promise.resolve({ data: { session: null }, error: null }) : supabase.auth.getSession(),
  onAuthStateChange: (listener: Parameters<typeof supabase.auth.onAuthStateChange>[0]) => {
    if (isDemoMode) {
      demoListener = listener;
      return { data: { subscription: { unsubscribe: () => { demoListener = null; } } } };
    }
    return supabase.auth.onAuthStateChange(listener);
  },
  async signIn(email: string, password: string): Promise<AuthResult> {
    if (isDemoMode) {
      if (password === 'error') return toResult({ message: errorMessages.invalid_credentials });
      const session = createDemoSession(email);
      triggerDemoListener(session);
      return toResult(null, true);
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return toResult(error);
  },
  async signUp(email: string, password: string, displayName?: string): Promise<AuthResult> {
    if (isDemoMode) {
      if (password === 'error') return toResult({ message: errorMessages.user_already_exists });
      const session = createDemoSession(email, displayName);
      triggerDemoListener(session);
      return toResult(null, true);
    }
    const { error, data } = await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName ?? '' } } });
    return toResult(error, !!data?.session);
  },
  async signOut(): Promise<AuthResult> {
    if (isDemoMode) {
      triggerDemoListener(null);
      return toResult(null);
    }
    const { error } = await supabase.auth.signOut();
    return toResult(error);
  },
  async signInWithGoogle(): Promise<AuthResult> {
    if (isDemoMode) {
      const session = createDemoSession('google-user@example.com', 'Google User');
      triggerDemoListener(session);
      return toResult(null, true);
    }
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/dashboard` } }); return toResult(error);
  },
  async resetPassword(email: string): Promise<AuthResult> {
    if (isDemoMode) return toResult(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` }); return toResult(error);
  },
  async updatePassword(password: string): Promise<AuthResult> {
    if (isDemoMode) return toResult(null);
    const { error } = await supabase.auth.updateUser({ password }); return toResult(error);
  },
};
