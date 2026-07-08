import type { ProfileType } from '@/Types/Profile.type'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

export const getSavedProfiles = (): ProfileType[] => {
  const savedProfiles = useSavedProfilesStore.getState().savedProfiles

  return [...(savedProfiles ?? [])].sort((a, b) =>
    a.lastSave > b.lastSave ? -1 : 1
  )
}
