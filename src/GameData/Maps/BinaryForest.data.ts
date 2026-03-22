import { MapTypes, type MapType } from '@/Types/Map.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { RESEARCH_TANEMON_RECIPE_FULL } from '@/GameData/Researches'

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
import { BINARY_FOREST_KOROMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Koromon.data'

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
      lootTable: BINARY_FOREST_KOROMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_TUNOMON`,
      baseDigimon: TUNOMON.id,

      lootTable: [
        {
          type: 'core',
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
          type: 'core',
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
          type: 'core',
          id: ALL_CORES.natureSpirits.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'core',
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
          type: 'core',
          id: ALL_CORES.windGuardians.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'core',
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
          type: 'core',
          id: ALL_CORES.jungleTroopers.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'research',
          id: RESEARCH_TANEMON_RECIPE_FULL.id,
          maxQuantity: 1,
          dropChance: 100
        }
      ]
    },

    {
      id: `BINARY_FOREST_BUKAMON`,
      baseDigimon: BUKAMON.id,

      lootTable: [
        {
          type: 'core',
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
          type: 'core',
          id: ALL_CORES.windGuardians.id,
          maxQuantity: 1,
          dropChance: 30
        },

        {
          type: 'core',
          id: ALL_CORES.jungleTroopers.id,
          maxQuantity: 1,
          dropChance: 30
        }
      ]
    }
  ]
}
