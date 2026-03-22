import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { TANEMON } from '@/GameData/Digimons'

export const TANEMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'TANEMON_RECIPE_FULL',
  digimon: TANEMON.id,

  ingredients: [
    {
      id: ALL_CORES.jungleTroopers.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const TANEMON_RECIPES = [TANEMON_RECIPE_FULL]
