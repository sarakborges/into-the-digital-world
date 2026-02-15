import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const KOROMON: DigimonType = {
  id: `KOROMON`,
  name: `Koromon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
  families: [DigimonFamilies.dragonsRoar.id, DigimonFamilies.virusBusters.id],

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
          id: DigimonFamilies.dragonsRoar.id,
          type: 'family',
          quantity: 1
        },

        {
          id: DigimonFamilies.virusBusters.id,
          type: 'family',
          quantity: 1
        }
      ]
    },

    {
      id: 'KOROMON_COMPOSE_DR',

      cores: [
        {
          id: DigimonFamilies.dragonsRoar.id,
          type: 'family',
          quantity: 5
        }
      ]
    },

    {
      id: 'KOROMON_COMPOSE_VB',

      cores: [
        {
          id: DigimonFamilies.virusBusters.id,
          type: 'family',
          quantity: 5
        }
      ]
    }
  ]
}
