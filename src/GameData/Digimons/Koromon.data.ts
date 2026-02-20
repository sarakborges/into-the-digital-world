import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const KOROMON: DigimonType = {
  id: `KOROMON`,
  name: `Koromon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.dragonsRoar.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 22,
    sp: 10,
    atk: 24,
    def: 12,
    int: 6,
    res: 6,
    spd: 20
  },

  composeRecipe: [
    {
      id: 'KOROMON_COMPOSE_FULL',

      cores: [
        {
          id: ALL_CORES.dragonsRoar.id,
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
      id: 'KOROMON_COMPOSE_DR',

      cores: [
        {
          id: ALL_CORES.dragonsRoar.id,
          type: 'family',
          quantity: 5
        }
      ]
    },

    {
      id: 'KOROMON_COMPOSE_VB',

      cores: [
        {
          id: ALL_CORES.virusBusters.id,
          type: 'family',
          quantity: 5
        }
      ]
    }
  ]
}
