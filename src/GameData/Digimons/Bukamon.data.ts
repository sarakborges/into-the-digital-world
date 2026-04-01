import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const BUKAMON: DigimonType = {
  id: `BUKAMON`,
  name: `Bukamon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.deepSavers.id],

  stats: {
    hp: 14,
    sp: 15,
    atk: 12,
    def: 12,
    pow: 14,
    res: 13,
    spd: 20
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'BUKAMON',
        weight: 50
      },

      {
        id: ALL_CORES.deepSavers.id,
        weight: 25
      }
    ]
  }
}
