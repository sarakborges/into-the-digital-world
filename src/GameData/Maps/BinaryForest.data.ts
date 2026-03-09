import { MapTypes, type MapType } from '@/Types/Map.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import {
  BUKAMON,
  KOROMON,
  MOCHIMON,
  NYAROMON,
  PYOCOMON,
  TANEMON,
  TOKOMON,
  TUNOMON
} from '@/GameData/Digimons'
import { KOROMON_RECIPE_FULL } from '@/GameData/Recipes/Koromon.data'

export const BINARY_FOREST: MapType = {
  id: `BINARY_FOREST`,
  name: `Binary Forest`,
  description: `Geometric trees grow in binary patterns, their leaves flickering between zeros and ones. The environment is calm yet unstable — the place where the domain begins to fracture.`,
  types: [MapTypes.COMBAT],
  maxEnemiesPerEncounter: 1,
  enemyLevelRange: {
    min: 1,
    max: 1
  },

  enemyDigimons: [
    {
      id: `BINARY_FOREST_KOROMON`,
      baseDigimon: KOROMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.dragonsRoar.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'families',
          id: ALL_CORES.virusBusters.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'digimon',
          id: KOROMON.id,
          dropChance: 3,
          maxQuantity: 1
        },

        {
          type: 'research',
          id: KOROMON_RECIPE_FULL.id,
          dropChance: 5,
          maxQuantity: 1
        }
      ]
    },

    {
      id: `BINARY_FOREST_TUNOMON`,
      baseDigimon: TUNOMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.natureSpirits.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    },

    {
      id: `BINARY_FOREST_MOCHIMON`,
      baseDigimon: MOCHIMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.metalEmpire.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    },

    {
      id: `BINARY_FOREST_NYAROMON`,
      baseDigimon: NYAROMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.natureSpirits.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'families',
          id: ALL_CORES.virusBusters.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    },

    {
      id: `BINARY_FOREST_TOKOMON`,
      baseDigimon: TOKOMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.windGuardians.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'families',
          id: ALL_CORES.virusBusters.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    },

    {
      id: `BINARY_FOREST_TANEMON`,
      baseDigimon: TANEMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.jungleTroopers.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    },

    {
      id: `BINARY_FOREST_BUKAMON`,
      baseDigimon: BUKAMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.deepSavers.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    },

    {
      id: `BINARY_FOREST_PYOCOMON`,
      baseDigimon: PYOCOMON.id,

      lootTable: [
        {
          type: 'families',
          id: ALL_CORES.windGuardians.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'families',
          id: ALL_CORES.jungleTroopers.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    }
  ]
}
