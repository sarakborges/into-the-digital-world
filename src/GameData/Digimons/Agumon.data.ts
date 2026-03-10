import type { DigimonType } from '@/Types/Digimon.type'
import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { AGUMON_RECIPES } from '@/GameData/Recipes'

export const AGUMON: DigimonType = {
  id: `AGUMON`,
  name: `Agumon`,
  stage: DigimonStages.rookie.id,
  attribute: ALL_CORES.vaccine.id,
  families: [
    ALL_CORES.dragonsRoar.id,
    ALL_CORES.virusBusters.id,
    ALL_CORES.natureSpirits.id,
    ALL_CORES.metalEmpire.id
  ],

  stats: {
    hp: 34,
    sp: 28,
    atk: 32,
    def: 30,
    pow: 30,
    res: 24,
    spd: 22
  },

  composeRecipes: [...AGUMON_RECIPES]
}
