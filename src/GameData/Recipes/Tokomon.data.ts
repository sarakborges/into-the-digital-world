import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TOKOMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'TOKOMON_RECIPE_FULL',

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
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

export const TOKOMON_RECIPE_WG: CompositionRecipeType = {
  id: 'TOKOMON_RECIPE_WG',

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const TOKOMON_RECIPE_VB: CompositionRecipeType = {
  id: 'TOKOMON_RECIPE_VB',

  ingredients: [
    {
      id: ALL_CORES.virusBusters.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const TOKOMON_RECIPES = [
  TOKOMON_RECIPE_FULL,
  TOKOMON_RECIPE_VB,
  TOKOMON_RECIPE_WG
]
