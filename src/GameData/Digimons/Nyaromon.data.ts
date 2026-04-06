import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const NYAROMON: DigimonType = {
  id: `NYAROMON`,
  name: `Nyaromon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 13,
    sp: 15,
    atk: 14,
    def: 10,
    pow: 15,
    res: 11,
    spd: 22
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'NYAROMON',
        weight: 50
      },

      {
        id: ALL_CORES.noAttribute.id,
        weight: 25
      },

      {
        id: ALL_CORES.natureSpirits.id,
        weight: 25
      },

      {
        id: ALL_CORES.virusBusters.id,
        weight: 25
      }
    ]
  }
}
