import type { ProfileType } from '@/Types/Profile.type'

export const getSavedProfiles = (savedProfiles: ProfileType[] | null) =>
  [...(savedProfiles ?? [])].sort((a, b) => (a.lastSave > b.lastSave ? -1 : 1))
