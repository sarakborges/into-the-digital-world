import { create } from 'zustand'

import type { ProfileTitlesType } from '@/Types/ProfileTitles.type'

type ProfileTitlesStore = {
  profileTitles: ProfileTitlesType
  setProfileTitles: (profileTitles: ProfileTitlesType) => void
}

export const useProfileTitlesStore = create<ProfileTitlesStore>((set) => ({
  profileTitles: [],
  setProfileTitles: (profileTitles) => {
    set({ profileTitles })
  }
}))
