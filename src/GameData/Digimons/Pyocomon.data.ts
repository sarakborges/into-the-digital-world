import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { PYOCOMON_RECIPES } from '@/GameData/Recipes'

export const PYOCOMON: DigimonType = {
  id: `PYOCOMON`,
  name: `Pyocomon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.windGuardians.id, ALL_CORES.jungleTroopers.id],

  stats: {
    hp: 15,
    sp: 15,
    atk: 14,
    def: 13,
    pow: 14,
    res: 13,
    spd: 16
  },

  composeRecipes: [...PYOCOMON_RECIPES]
}
