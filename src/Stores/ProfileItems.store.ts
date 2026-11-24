import { create } from 'zustand'

import type { ProfileItemsType } from '@/Types/ProfileItems.type'

type ProfileItemsStore = {
  profileItems: ProfileItemsType
  setProfileItems: (profileItems: ProfileItemsType) => void
}

export const useProfileItemsStore = create<ProfileItemsStore>((set) => ({
  profileItems: {},
  setProfileItems: (profileItems) => {
    set({ profileItems })
  }
}))
