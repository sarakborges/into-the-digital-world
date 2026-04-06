import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const KOROMON: DigimonType = {
  id: `KOROMON`,
  name: `Koromon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.dragonsRoar.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 17,
    sp: 14,
    atk: 16,
    def: 15,
    pow: 15,
    res: 12,
    spd: 11
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'KOROMON',
        weight: 50
      },

      {
        id: ALL_CORES.noAttribute.id,
        weight: 25
      },

      {
        id: ALL_CORES.dragonsRoar.id,
        weight: 25
      },

      {
        id: ALL_CORES.virusBusters.id,
        weight: 25
      }
    ]
  }
}
