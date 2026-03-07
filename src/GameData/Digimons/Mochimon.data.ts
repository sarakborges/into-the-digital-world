import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const MOCHIMON: DigimonType = {
  id: `MOCHIMON`,
  name: `Mochimon`,
  stage: DigimonStages.inTraining.id,
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

  composeRecipe: [
    {
      id: 'KOROMON_COMPOSE_FULL',

      cores: [
        {
          id: ALL_CORES.natureSpirits.id,
          type: 'family',
          quantity: 1
        },

        {
          id: ALL_CORES.metalEmpire.id,
          type: 'family',
          quantity: 1
        }
      ]
    },

    {
      id: 'KOROMON_COMPOSE_NSP',

      cores: [
        {
          id: ALL_CORES.natureSpirits.id,
          type: 'family',
          quantity: 5
        }
      ]
    },

    {
      id: 'KOROMON_COMPOSE_ME',

      cores: [
        {
          id: ALL_CORES.metalEmpire.id,
          type: 'family',
          quantity: 5
        }
      ]
    }
  ]
}
