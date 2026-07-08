import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { calcExtraStats } from '@/Helpers/Systems/Battle'

export const getExtraStatsFromPartner = (
  partner: PartnerDigimonType,
  stat: string
): number => {
  return calcExtraStats({ digimon: partner, stat })
}
