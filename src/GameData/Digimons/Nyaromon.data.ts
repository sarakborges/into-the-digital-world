import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const NYAROMON: DigimonType = {
  id: `NYAROMON`,
  name: `Nyaromon`,
  stage: DigimonStages.inTraining.id,
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

  composeRecipe: [
    {
      id: 'KOROMON_COMPOSE_FULL',

      ingredients: [
        {
          id: ALL_CORES.natureSpirits.id,
          type: 'family',
          quantity: 1
        },

        {
          id: ALL_CORES.virusBusters.id,
          type: 'family',
          quantity: 1
        }
      ]
    },

    {
      id: 'KOROMON_COMPOSE_NSP',

      ingredients: [
        {
          id: ALL_CORES.natureSpirits.id,
          type: 'family',
          quantity: 5
        }
      ]
    },

    {
      id: 'KOROMON_COMPOSE_VB',

      ingredients: [
        {
          id: ALL_CORES.virusBusters.id,
          type: 'family',
          quantity: 5
        }
      ]
    }
  ]
}
