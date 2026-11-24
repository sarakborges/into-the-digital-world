import { create } from 'zustand'

import type { ProfilePartnerDigimonsType } from '@/Types/ProfilePartnerDigimons.type'

type ProfilePartnerDigimonsStore = {
  profilePartnerDigimons: ProfilePartnerDigimonsType
  setProfilePartnerDigimons: (
    profilePartnerDigimons: ProfilePartnerDigimonsType
  ) => void
}

export const useProfilePartnerDigimonsStore =
  create<ProfilePartnerDigimonsStore>((set) => ({
    profilePartnerDigimons: {},
    setProfilePartnerDigimons: (profilePartnerDigimons) => {
      set({ profilePartnerDigimons })
    }
  }))
