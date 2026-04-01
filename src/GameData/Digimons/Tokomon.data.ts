import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TOKOMON: DigimonType = {
  id: `TOKOMON`,
  name: `Tokomon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 18,
    sp: 14,
    atk: 13,
    def: 19,
    pow: 12,
    res: 18,
    spd: 6
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'TOKOMON',
        weight: 50
      },

      {
        id: ALL_CORES.windGuardians.id,
        weight: 25
      },

      {
        id: ALL_CORES.virusBusters.id,
        weight: 25
      }
    ]
  }
}
