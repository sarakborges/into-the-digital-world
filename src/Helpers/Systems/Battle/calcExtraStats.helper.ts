import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { findItem } from '@/GameData/Registries/Item.registry'

export const calcExtraStats = ({
  digimon,
  stat
}: {
  digimon: PartyDigimonType | PartnerDigimonType
  stat: string
}): number => {
  const equipments = digimon.equipments

  return Object.values(equipments ?? {}).reduce((total, equipment) => {
    if (!equipment?.equipmentId) {
      return total
    }

    const statBonus = findItem(equipment.equipmentId)?.equipmentBonuses
      ?.stats?.[stat]

    return statBonus?.type === 'fixed' ? total + statBonus.amount : total
  }, 0)
}
