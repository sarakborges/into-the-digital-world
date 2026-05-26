import { create } from 'zustand'

import type { ProfileType } from '@/Types/Profile.type'

import { loadSession } from '@/Helpers/loadSession.helper'

type ProfileStore = {
  profile: ProfileType | null
  setProfile: (profile: ProfileType | null) => void
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: loadSession({ key: 'profile' }),

  setProfile: (profile) => {
    set({ profile })
  }
}))
