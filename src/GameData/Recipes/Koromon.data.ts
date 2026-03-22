import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { KOROMON } from '@/GameData/Digimons'

export const KOROMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'KOROMON_RECIPE_FULL',
  digimon: KOROMON.id,

  ingredients: [
    {
      id: ALL_CORES.dragonsRoar.id,
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

export const KOROMON_RECIPE_DR: CompositionRecipeType = {
  id: 'KOROMON_RECIPE_DR',
  digimon: KOROMON.id,

  ingredients: [
    {
      id: ALL_CORES.dragonsRoar.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const KOROMON_RECIPE_VB: CompositionRecipeType = {
  id: 'KOROMON_RECIPE_VB',
  digimon: KOROMON.id,

  ingredients: [
    {
      id: ALL_CORES.virusBusters.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const KOROMON_RECIPE_CORE: CompositionRecipeType = {
  id: 'KOROMON_RECIPE_CORE',
  digimon: KOROMON.id,

  ingredients: [
    {
      id: KOROMON.id,
      type: 'core',
      quantity: 1
    }
  ]
}

export const KOROMON_RECIPES = [
  KOROMON_RECIPE_FULL,
  KOROMON_RECIPE_DR,
  KOROMON_RECIPE_VB,
  KOROMON_RECIPE_CORE
]
