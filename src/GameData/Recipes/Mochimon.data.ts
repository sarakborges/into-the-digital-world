import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const MOCHIMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'MOCHIMON_COMPOSE_FULL',

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'family',
      quantity: 1
    },

    {
      id: ALL_CORES.metalEmpire.id,
      type: 'family',
      quantity: 1
    }
  ]
}

export const MOCHIMON_RECIPE_NSP: CompositionRecipeType = {
  id: 'MOCHIMON_COMPOSE_NSP',

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'family',
      quantity: 5
    }
  ]
}

export const MOCHIMON_RECIPE_ME: CompositionRecipeType = {
  id: 'MOCHIMON_COMPOSE_ME',

  ingredients: [
    {
      id: ALL_CORES.metalEmpire.id,
      type: 'family',
      quantity: 5
    }
  ]
}

export const MOCHIMON_RECIPES = [
  MOCHIMON_RECIPE_FULL,
  MOCHIMON_RECIPE_NSP,
  MOCHIMON_RECIPE_ME
]
