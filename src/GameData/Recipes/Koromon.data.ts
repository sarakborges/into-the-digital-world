import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const KOROMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'KOROMON_RECIPE_FULL',

  ingredients: [
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

export const KOROMON_RECIPE_DR: CompositionRecipeType = {
  id: 'KOROMON_RECIPE_DR',

  ingredients: [
    {
      id: ALL_CORES.dragonsRoar.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const KOROMON_RECIPE_VB: CompositionRecipeType = {
  id: 'KOROMON_RECIPE_VB',

  ingredients: [
    {
      id: ALL_CORES.virusBusters.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const KOROMON_RECIPES = [
  KOROMON_RECIPE_FULL,
  KOROMON_RECIPE_DR,
  KOROMON_RECIPE_VB
]
