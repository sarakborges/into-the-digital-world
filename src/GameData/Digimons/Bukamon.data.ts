import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const BUKAMON: DigimonType = {
  id: `BUKAMON`,
  name: `Bukamon`,
  stage: DigimonStages.inTraining.id,
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

  composeRecipe: [
    {
      id: 'KOROMON_COMPOSE_FULL',

      cores: [
        {
          id: ALL_CORES.deepSavers.id,
          type: 'family',
          quantity: 1
        }
      ]
    }
  ]
}
