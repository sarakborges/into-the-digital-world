import { create } from 'zustand'

import type { ProfileType } from '@/Types/Profile.type'

type SavedProfilesStore = {
  savedProfiles: Array<ProfileType>
  setSavedProfiles: (savedProfiles: Array<ProfileType>) => void
}

export const useSavedProfilesStore = create<SavedProfilesStore>((set) => ({
  savedProfiles: [],
  setSavedProfiles: (savedProfiles) => {
    set({ savedProfiles })
  }
}))