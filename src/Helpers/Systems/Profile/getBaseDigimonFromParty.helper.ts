import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { findDigimon } from '@/GameData/Registries/Digimon.registry'

type GetBaseDigimonFromPartyParams = {
  digimonId: number
  partnerDigimons: Record<number, PartnerDigimonType>
}

export const getBaseDigimonFromParty = ({
  digimonId,
  partnerDigimons
}: GetBaseDigimonFromPartyParams): BaseDigimonType | undefined => {
  const partner = partnerDigimons[digimonId]

  if (!partner) {
    return undefined
  }

  return findDigimon(partner.baseDigimon)
}
