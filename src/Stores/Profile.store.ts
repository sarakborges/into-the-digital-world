import type { ProfileType } from '@/Types/Profile.type'

import { create } from 'zustand'

type ProfileStore = {
  profile: ProfileType | null
  setProfile: (profile: ProfileType | null) => void
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,

  setProfile: (profile) => {
    set({ profile })
  }
}))
