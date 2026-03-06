import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TOKOMON: DigimonType = {
  id: `TOKOMON`,
  name: `Tokomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 22,
    sp: 14,
    atk: 26,
    def: 10,
    pow: 6,
    res: 6,
    spd: 16
  },

  composeRecipe: [
    {
      id: 'KOROMON_COMPOSE_FULL',

      cores: [
        {
          id: ALL_CORES.windGuardians.id,
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
      id: 'KOROMON_COMPOSE_DG',

      cores: [
        {
          id: ALL_CORES.windGuardians.id,
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
