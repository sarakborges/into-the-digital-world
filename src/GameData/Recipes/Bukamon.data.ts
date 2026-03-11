import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const BUKAMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'BUKAMON_RECIPE_FULL',

  ingredients: [
    {
      id: ALL_CORES.deepSavers.id,
      type: 'families',
      quantity: 1
    }
  ]
}

export const BUKAMON_RECIPES = [BUKAMON_RECIPE_FULL]
