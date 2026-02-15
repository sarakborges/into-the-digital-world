import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonAttributes, DigimonFamilies } from '@/Types/Cores.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

export const TUNOMON: DigimonType = {
  id: `TUNOMON`,
  name: `Tunomon`,
  stage: DigimonStages.inTraining.id,
  attribute: DigimonAttributes.noAttribute.id,
  families: [DigimonFamilies.natureSpirits.id],

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
          id: DigimonFamilies.natureSpirits.id,
          type: 'family',
          quantity: 5
        }
      ]
    }
  ]
}
