import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

export const TOKOMON_COMPOSE_FULL: CompositionRecipeType = {
  id: 'TOKOMON_COMPOSE_FULL',

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
      type: 'family',
      quantity: 1
    },

    {
      id: ALL_CORES.virusBusters.id,
      type: 'family',
      quantity: 1
    }
  ]
}

export const TOKOMON_COMPOSE_WG: CompositionRecipeType = {
  id: 'TOKOMON_COMPOSE_WG',

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
      type: 'family',
      quantity: 5
    }
  ]
}

export const TOKOMON_COMPOSE_VB: CompositionRecipeType = {
  id: 'TOKOMON_COMPOSE_VB',

  ingredients: [
    {
      id: ALL_CORES.virusBusters.id,
      type: 'family',
      quantity: 5
    }
  ]
}

export const TOKOMON_RECIPES = [
  TOKOMON_COMPOSE_FULL,
  TOKOMON_COMPOSE_VB,
  TOKOMON_COMPOSE_WG
]
