import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentDigimon = (): BaseDigimonType | undefined => {
  const { profile } = useProfileStore.getState()
  const { digivice } = useDigiviceStore.getState()

  if (!profile || !digivice?.currentDetails) {
    return undefined
  }

  const partner = profile.partnerDigimons[digivice.currentDetails] as
    PartnerDigimonType | undefined

  if (!partner) {
    return undefined
  }

  return AllDigimons[partner.baseDigimon] as BaseDigimonType | undefined
}
