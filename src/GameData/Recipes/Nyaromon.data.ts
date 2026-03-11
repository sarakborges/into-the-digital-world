import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const NYAROMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'NYAROMON_RECIPE_FULL',

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
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

export const NYAROMON_RECIPE_NSP: CompositionRecipeType = {
  id: 'NYAROMON_COMPOSE_NSP',

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const NYAROMON_RECIPE_VB: CompositionRecipeType = {
  id: 'NYAROMON_COMPOSE_VB',

  ingredients: [
    {
      id: ALL_CORES.virusBusters.id,
      type: 'families',
      quantity: 5
    }
  ]
}

export const NYAROMON_RECIPES = [
  NYAROMON_RECIPE_FULL,
  NYAROMON_RECIPE_NSP,
  NYAROMON_RECIPE_VB
]
