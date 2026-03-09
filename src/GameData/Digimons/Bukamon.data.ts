import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { BUKAMON_RECIPES } from '@/GameData/Recipes'

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

  composeRecipes: [...BUKAMON_RECIPES]
}
