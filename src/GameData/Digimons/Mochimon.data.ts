import type { DigimonType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const MOCHIMON: DigimonType = {
  id: `MOCHIMON`,
  name: `Mochimon`,

  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id, ALL_CORES.metalEmpire.id],

  stats: {
    hp: 19,
    sp: 13,
    atk: 12,
    def: 18,
    pow: 12,
    res: 17,
    spd: 9
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'MOCHIMON',
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
        id: ALL_CORES.metalEmpire.id,
        weight: 25
      }
    ]
  }
}
