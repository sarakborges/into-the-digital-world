import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { BUKAMON } from '@/GameData/Digimons'

export const BUKAMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'BUKAMON_RECIPE_FULL',
  digimon: BUKAMON.id,

  ingredients: [
    {
      id: ALL_CORES.deepSavers.id,
      type: 'core',
      quantity: 1
    }
  ]
}

export const BUKAMON_RECIPES = [BUKAMON_RECIPE_FULL]
