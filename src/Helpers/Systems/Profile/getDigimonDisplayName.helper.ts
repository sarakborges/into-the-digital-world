import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

export const getDigimonDisplayName = (
  digimonId: number,
  partnerDigimons: Record<number, PartnerDigimonType>,
  baseDigimon: BaseDigimonType | undefined
): string => {
  if (!baseDigimon) {
    return ''
  }

  return partnerDigimons[digimonId]?.name || baseDigimon.name
}
