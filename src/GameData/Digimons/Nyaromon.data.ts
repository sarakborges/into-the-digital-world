import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { NYAROMON_RECIPES } from '@/GameData/Recipes'

export const NYAROMON: DigimonType = {
  id: `NYAROMON`,
  name: `Nyaromon`,
  stage: DigimonStages.inTraining.id,
  attribute: ALL_CORES.noAttribute.id,
  families: [ALL_CORES.natureSpirits.id, ALL_CORES.virusBusters.id],

  stats: {
    hp: 13,
    sp: 15,
    atk: 14,
    def: 10,
    pow: 15,
    res: 11,
    spd: 22
  },

  composeRecipes: [...NYAROMON_RECIPES]
}
