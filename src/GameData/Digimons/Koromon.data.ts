import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { KOROMON_RECIPES } from '@/GameData/Recipes'

export const KOROMON: DigimonType = {
  id: `KOROMON`,
  name: `Koromon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.dragonsRoar.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 17,
    sp: 14,
    atk: 16,
    def: 15,
    pow: 15,
    res: 12,
    spd: 11
  },

  composeRecipe: [...KOROMON_RECIPES]
}
