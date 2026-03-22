import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { TUNOMON } from '@/GameData/Digimons'

export const TUNOMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'TUNOMON_RECIPE_FULL',
  digimon: TUNOMON.id,

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const TUNOMON_RECIPES = [TUNOMON_RECIPE_FULL]
