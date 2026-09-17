import { supabase } from '../lib/supabase';
import type { Profile } from '../types/auth';

export const profileService = {
  async getCurrentProfile(): Promise<Profile | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data, error } = await supabase.from('profiles').select('*').eq('user_id', user.id).maybeSingle();
    if (error) throw new Error('Unable to load profile.');
    return data as Profile | null;
  },
  async updateCurrentProfile(values: Pick<Profile, 'display_name' | 'avatar_url'>): Promise<Profile> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('You must be signed in to update your profile.');
    const { data, error } = await supabase.from('profiles').update(values).eq('user_id', user.id).select().single();
    if (error) throw new Error('Unable to update profile.');
    return data as Profile;
  },
};
