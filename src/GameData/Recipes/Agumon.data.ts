import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const AGUMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'AGUMON_RECIPE_FULL',

  ingredients: [
    {
      id: 'KOROMON',
      type: 'digimon',
      quantity: 1
    },

    {
      id: ALL_CORES.dragonsRoar.id,
      type: 'families',
      quantity: 1
    },

    {
      id: ALL_CORES.virusBusters.id,
      type: 'families',
      quantity: 1
    }
  ]
}

export const AGUMON_RECIPES = [AGUMON_RECIPE_FULL]
