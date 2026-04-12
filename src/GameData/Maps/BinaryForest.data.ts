import { MapTypes, type MapType } from '@/Types/Map.type'

import { BINARY_FOREST_KOROMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Koromon.data'
import { BINARY_FOREST_TUNOMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Tunomon.data'
import { BINARY_FOREST_MOCHIMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Mochimon.data'
import { BINARY_FOREST_PYOCOMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Pyocomon.data'
import { BINARY_FOREST_TANEMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Tanemon.data'
import { BINARY_FOREST_BUKAMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Bukamon.data'
import { BINARY_FOREST_TOKOMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Tokomon.data'
import { BINARY_FOREST_NYAROMON_LOOT_TABLE } from '@/GameData/LootTables/BinaryForest/Nyaromon.data'

export const BINARY_FOREST: MapType = {
  id: `BINARY_FOREST`,
  name: `Binary Forest`,
  description: `Geometric trees grow in binary patterns, their leaves flickering between zeros and ones. The environment is calm yet unstable — the place where the domain begins to fracture.`,

  types: [MapTypes.COMBAT],
  maxEnemiesPerEncounter: 1,

  enemyDigimons: [
    {
      id: `BINARY_FOREST_KOROMON`,
      baseDigimon: 'KOROMON',
      lootTable: BINARY_FOREST_KOROMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_TUNOMON`,
      baseDigimon: 'TUNOMON',
      lootTable: BINARY_FOREST_TUNOMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_MOCHIMON`,
      baseDigimon: 'MOCHIMON',
      lootTable: BINARY_FOREST_MOCHIMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_NYAROMON`,
      baseDigimon: 'NYAROMON',
      lootTable: BINARY_FOREST_NYAROMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_TOKOMON`,
      baseDigimon: 'TOKOMON',
      lootTable: BINARY_FOREST_TOKOMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_TANEMON`,
      baseDigimon: 'TANEMON',
      lootTable: BINARY_FOREST_TANEMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_BUKAMON`,
      baseDigimon: 'BUKAMON',
      lootTable: BINARY_FOREST_BUKAMON_LOOT_TABLE
    },

    {
      id: `BINARY_FOREST_PYOCOMON`,
      baseDigimon: 'PYOCOMON',
      lootTable: BINARY_FOREST_PYOCOMON_LOOT_TABLE
    }
  ]
}
