import { create } from 'zustand'

import { loadData } from '@/Helpers/loadData.helper'

import type { ProfileType } from '@/Types/Profile.type'

type SavedProfilesStore = {
  savedProfiles: Array<ProfileType> | null
  setSavedProfiles: (savedProfiles: Array<ProfileType> | null) => void
}

export const useSavedProfilesStore = create<SavedProfilesStore>((set) => ({
  savedProfiles: null,
  setSavedProfiles: (savedProfiles) => {
    set({ savedProfiles })
  }
}))
