import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { findDigimon } from '@/GameData/Registries/Digimon.registry'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentDigimon = (): BaseDigimonType | undefined => {
  const { profile } = useProfileStore.getState()
  const { digivice } = useDigiviceStore.getState()

  if (!profile || !digivice?.currentDetails) {
    return undefined
  }

  const partner = profile.partnerDigimons[digivice.currentDetails]

  if (!partner) {
    return undefined
  }

  return findDigimon(partner.baseDigimon)
}
