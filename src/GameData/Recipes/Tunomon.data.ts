import type { CompositionRecipeType } from '@/Types/Composition.type'
import { ALL_CORES } from '@/Consts/Cores.const'

export const TUNOMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'TUNOMON_RECIPE_FULL',

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const TUNOMON_RECIPES = [TUNOMON_RECIPE_FULL]
