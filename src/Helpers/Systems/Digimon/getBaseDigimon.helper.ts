import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { findDigimon } from '@/GameData/Registries/Digimon.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getBaseDigimon = (
  digimonId: number | string
): BaseDigimonType | undefined => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return undefined
  }

  const partner = profile.partnerDigimons[digimonId]

  if (!partner) {
    return undefined
  }

  return findDigimon(partner.baseDigimon)
}
