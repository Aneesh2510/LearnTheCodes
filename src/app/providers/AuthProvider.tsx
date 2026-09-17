import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { AuthSession, AuthUser } from '../../types/auth';
import { authService } from '../../services/authService';

interface AuthContextValue {
  user: AuthUser | null;
  session: AuthSession | null;
  loading: boolean;
  signIn: (email: string, password: string) => ReturnType<typeof authService.signIn>;
  signUp: (email: string, password: string, displayName?: string) => ReturnType<typeof authService.signUp>;
  signOut: () => ReturnType<typeof authService.signOut>;
  signInWithGoogle: () => ReturnType<typeof authService.signInWithGoogle>;
  resetPassword: (email: string) => ReturnType<typeof authService.resetPassword>;
}
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    authService.getSession().then(({ data }) => { if (active) { setSession(data.session); setLoading(false); } });
    const { data: { subscription } } = authService.onAuthStateChange((_event, nextSession) => { setSession(nextSession); setLoading(false); });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);
  const value = useMemo(() => ({ user: session?.user ?? null, session, loading, signIn: authService.signIn, signUp: authService.signUp, signOut: authService.signOut, signInWithGoogle: authService.signInWithGoogle, resetPassword: authService.resetPassword }), [loading, session]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider.');
  return context;
}
