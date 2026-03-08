import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'
import { TOKOMON_RECIPES } from '@/GameData/Recipes'

export const TOKOMON: DigimonType = {
  id: `TOKOMON`,
  name: `Tokomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 18,
    sp: 14,
    atk: 13,
    def: 19,
    pow: 12,
    res: 18,
    spd: 6
  },

  composeRecipe: [...TOKOMON_RECIPES]
}
