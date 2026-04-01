import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TUNOMON: DigimonType = {
  id: `TUNOMON`,
  name: `Tunomon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id],

  stats: {
    hp: 17,
    sp: 12,
    atk: 17,
    def: 15,
    pow: 14,
    res: 13,
    spd: 12
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'TUNOMON',
        weight: 50
      },

      {
        id: ALL_CORES.natureSpirits.id,
        weight: 25
      }
    ]
  }
}
