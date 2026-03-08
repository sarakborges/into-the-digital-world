import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { TANEMON_RECIPES } from '@/GameData/Recipes'

export const TANEMON: DigimonType = {
  id: `TANEMON`,
  name: `Tanemon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 19,
    sp: 14,
    atk: 12,
    def: 17,
    pow: 13,
    res: 17,
    spd: 8
  },

  composeRecipe: [...TANEMON_RECIPES]
}
