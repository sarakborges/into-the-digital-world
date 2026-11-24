import { create } from 'zustand'

import type { ProfileMeaningfulChoicesType } from '@/Types/ProfileMeaningfulChoices.type'

type ProfileMeaningfulChoicesStore = {
  profileMeaningfulChoices: ProfileMeaningfulChoicesType
  setProfileMeaningfulChoices: (
    profileMeaningfulChoices: ProfileMeaningfulChoicesType
  ) => void
}

export const useProfileMeaningfulChoicesStore =
  create<ProfileMeaningfulChoicesStore>((set) => ({
    profileMeaningfulChoices: {},
    setProfileMeaningfulChoices: (profileMeaningfulChoices) => {
      set({ profileMeaningfulChoices })
    }
  }))
