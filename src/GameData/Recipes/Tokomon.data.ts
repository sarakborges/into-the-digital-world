import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { TOKOMON } from '@/GameData/Digimons'

export const TOKOMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'TOKOMON_RECIPE_FULL',
  digimon: TOKOMON.id,

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
      type: 'core',
      quantity: 1
    },

    {
      id: ALL_CORES.virusBusters.id,
      type: 'core',
      quantity: 1
    }
  ]
}

export const TOKOMON_RECIPE_WG: CompositionRecipeType = {
  id: 'TOKOMON_RECIPE_WG',
  digimon: TOKOMON.id,

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const TOKOMON_RECIPE_VB: CompositionRecipeType = {
  id: 'TOKOMON_RECIPE_VB',
  digimon: TOKOMON.id,

  ingredients: [
    {
      id: ALL_CORES.virusBusters.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const TOKOMON_RECIPES = [
  TOKOMON_RECIPE_FULL,
  TOKOMON_RECIPE_VB,
  TOKOMON_RECIPE_WG
]
