import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'

export const getBaseDigimonFromParty = (
  digimonId: number
): BaseDigimonType | undefined => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return undefined
  }

  const partner = profile.partnerDigimons[digimonId]

  if (!partner) {
    return undefined
  }

  return AllDigimons[partner.baseDigimon] as BaseDigimonType | undefined
}
