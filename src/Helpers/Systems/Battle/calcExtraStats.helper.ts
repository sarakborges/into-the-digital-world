import type {PartnerDigimonType} from '@/Types/PartnerDigimon.type'
import type {PartyDigimonType} from '@/Types/PartyDigimon.type'

import {AllItems} from '@/GameData/Items'

export const calcExtraStats = ({
  digimon,
  stat
}: {
  digimon: PartyDigimonType | PartnerDigimonType
  stat: string
}) => {
  const equipments = digimon.equipments

  const equipmentsBoostingStat = Object.values(equipments ?? {})
    .filter((item) => {
      if (!item?.equipmentId) {
        return false
      }

      return Object.keys(
        AllItems[item.equipmentId].equipmentBonuses?.stats ?? {}
      ).includes(stat)
    })
    .map((item) => AllItems[item!.equipmentId!].equipmentBonuses?.stats)

  return equipmentsBoostingStat.reduce((acc, cur) => {
    if (cur![stat].type === 'fixed') {
      return acc + cur![stat].amount
    }

    return 0
  }, 0)
}
