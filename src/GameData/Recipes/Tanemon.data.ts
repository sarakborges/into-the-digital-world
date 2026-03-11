import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TANEMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'TANEMON_RECIPE_FULL',

  ingredients: [
    {
      id: ALL_CORES.jungleTroopers.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const TANEMON_RECIPES = [TANEMON_RECIPE_FULL]
