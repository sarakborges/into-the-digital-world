import { create } from 'zustand'

import type { ProfilePartyType } from '@/Types/ProfileParty.type'

type ProfilePartyStore = {
  profileParty: ProfilePartyType
  setProfileParty: (profileParty: ProfilePartyType) => void
}

export const useProfilePartyStore = create<ProfilePartyStore>((set) => ({
  profileParty: [],
  setProfileParty: (profileParty) => {
    set({ profileParty })
  }
}))
