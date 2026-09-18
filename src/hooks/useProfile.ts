import { useEffect, useState } from 'react';
import { profileService } from '../services/profileService';
import type { Profile } from '../types/auth';

export function useProfile(): { profile: Profile | null; loading: boolean; refresh: () => Promise<void> } {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = async () => {
    setLoading(true);
    try {
      const data = await profileService.getCurrentProfile();
      setProfile(data);
    } catch {
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return { profile, loading, refresh: loadProfile };
}