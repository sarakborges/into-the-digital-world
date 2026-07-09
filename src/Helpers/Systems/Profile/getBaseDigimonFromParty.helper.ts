import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'

export const getBaseDigimonFromParty = (
  digimonId: number,
  partnerDigimons: Record<number, PartnerDigimonType>
): BaseDigimonType | undefined => {
  const partner = partnerDigimons[digimonId]

  if (!partner) {
    return undefined
  }

  return AllDigimons[partner.baseDigimon] as BaseDigimonType | undefined
}
