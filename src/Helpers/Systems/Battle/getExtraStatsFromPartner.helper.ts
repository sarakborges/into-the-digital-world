import { calcExtraStats } from '@/Helpers/Systems/Battle'

import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

export const getExtraStatsFromPartner = (
  partner: PartnerDigimonType,
  stat: string
): number => {
  return calcExtraStats({ digimon: partner, stat })
}
