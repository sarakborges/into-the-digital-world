import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TUNOMON: DigimonType = {
  id: `TUNOMON`,
  name: `Tunomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id],

  stats: {
    hp: 18,
    sp: 14,
    atk: 16,
    def: 10,
    int: 20,
    res: 10,
    spd: 12
  },

  composeRecipe: [
    {
      id: 'TUNOMON_COMPOSE_FULL',

      cores: [
        {
          id: ALL_CORES.natureSpirits.id,
          type: 'family',
          quantity: 5
        }
      ]
    }
  ]
}
