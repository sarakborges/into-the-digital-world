import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

type GetDigimonDisplayNameParams = {
  digimonId: number
  partnerDigimons: Record<number, PartnerDigimonType>
  baseDigimon: BaseDigimonType | undefined
}

export const getDigimonDisplayName = ({
  digimonId,
  partnerDigimons,
  baseDigimon
}: GetDigimonDisplayNameParams): string => {
  if (!baseDigimon) {
    return ''
  }

  return partnerDigimons[digimonId]?.name || baseDigimon.name
}
