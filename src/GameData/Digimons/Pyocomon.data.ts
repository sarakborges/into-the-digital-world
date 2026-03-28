import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const PYOCOMON: DigimonType = {
  id: `PYOCOMON`,
  name: `Pyocomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id, ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 15,
    sp: 15,
    atk: 14,
    def: 13,
    pow: 14,
    res: 13,
    spd: 16
  },

  researchCost: 1000,
  compositionTemplate: {
    data: [
      {
        id: 'PYOCOMON',
        weight: 50
      },

      {
        id: ALL_CORES.jungleTroopers.id,
        weight: 25
      },

      {
        id: ALL_CORES.windGuardians.id,
        weight: 25
      }
    ]
  }
}
