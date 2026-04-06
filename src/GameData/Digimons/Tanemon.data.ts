import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TANEMON: DigimonType = {
  id: `TANEMON`,
  name: `Tanemon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 19,
    sp: 14,
    atk: 12,
    def: 17,
    pow: 13,
    res: 17,
    spd: 8
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'TANEMON',
        weight: 50
      },

      {
        id: ALL_CORES.noAttribute.id,
        weight: 25
      },

      {
        id: ALL_CORES.jungleTroopers.id,
        weight: 25
      }
    ]
  }
}
