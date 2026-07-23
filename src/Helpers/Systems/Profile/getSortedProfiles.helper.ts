import type { ProfileType } from '@/Types/Profile.type'

export const getSortedProfiles = (
  profiles: Array<ProfileType>
): Array<ProfileType> => {
  return [...profiles].sort((a, b) => b.lastSave.localeCompare(a.lastSave))
}
