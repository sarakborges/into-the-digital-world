import { create } from 'zustand'

import type { ProfileQuestsType } from '@/Types/ProfileQuests.type'

type ProfileQuestsStore = {
  profileQuests: ProfileQuestsType
  setProfileQuests: (profileQuests: ProfileQuestsType) => void
}

export const useProfileQuestsStore = create<ProfileQuestsStore>((set) => ({
  profileQuests: {},
  setProfileQuests: (profileQuests) => {
    set({ profileQuests })
  }
}))
