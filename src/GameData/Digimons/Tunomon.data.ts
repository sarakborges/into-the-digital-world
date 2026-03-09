import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { TUNOMON_RECIPES } from '@/GameData/Recipes'

export const TUNOMON: DigimonType = {
  id: `TUNOMON`,
  name: `Tunomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id],

  stats: {
    hp: 17,
    sp: 12,
    atk: 17,
    def: 15,
    pow: 14,
    res: 13,
    spd: 12
  },

  composeRecipes: [...TUNOMON_RECIPES]
}
