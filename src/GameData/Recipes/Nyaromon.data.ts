import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { NYAROMON } from '@/GameData/Digimons'

export const NYAROMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'NYAROMON_RECIPE_FULL',
  digimon: NYAROMON.id,

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
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

export const NYAROMON_RECIPE_NSP: CompositionRecipeType = {
  id: 'NYAROMON_COMPOSE_NSP',
  digimon: NYAROMON.id,

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const NYAROMON_RECIPE_VB: CompositionRecipeType = {
  id: 'NYAROMON_COMPOSE_VB',
  digimon: NYAROMON.id,

  ingredients: [
    {
      id: ALL_CORES.virusBusters.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const NYAROMON_RECIPES = [
  NYAROMON_RECIPE_FULL,
  NYAROMON_RECIPE_NSP,
  NYAROMON_RECIPE_VB
]
