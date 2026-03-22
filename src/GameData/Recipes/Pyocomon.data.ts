import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'
import { PYOCOMON } from '@/GameData/Digimons'

export const PYOCOMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'PYOCOMON_RECIPE_FULL',
  digimon: PYOCOMON.id,

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
      type: 'core',
      quantity: 1
    },

    {
      id: ALL_CORES.jungleTroopers.id,
      type: 'core',
      quantity: 1
    }
  ]
}

export const PYOCOMON_RECIPE_WG: CompositionRecipeType = {
  id: 'PYOCOMON_COMPOSE_WG',
  digimon: PYOCOMON.id,

  ingredients: [
    {
      id: ALL_CORES.windGuardians.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const PYOCOMON_RECIPE_JT: CompositionRecipeType = {
  id: 'PYOCOMON_COMPOSE_JT',
  digimon: PYOCOMON.id,

  ingredients: [
    {
      id: ALL_CORES.jungleTroopers.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const PYOCOMON_RECIPES = [
  PYOCOMON_RECIPE_FULL,
  PYOCOMON_RECIPE_WG,
  PYOCOMON_RECIPE_JT
]
