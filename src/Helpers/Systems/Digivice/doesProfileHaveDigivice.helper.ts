import type { ProfileType } from '@/Types/Profile.type'

export const doesProfileHaveDigivice = (
  profile: ProfileType | null
): boolean => {
  if (!profile) {
    return false
  }

  return Object.keys(profile.items || {}).includes('digivice')
}
