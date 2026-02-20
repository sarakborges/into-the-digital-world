import { ALL_CORES } from '@/Types/Cores.type'
import { MapTypes, type MapType } from '@/Types/Map.type'

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

  wildDigimons: [
    {
      id: `BINARY_FOREST_KOROMON`,
      baseDigimon: KOROMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.dragonsRoar.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.virusBusters.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_TUNOMON`,
      baseDigimon: TUNOMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.natureSpirits.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_MOCHIMON`,
      baseDigimon: MOCHIMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.metalEmpire.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_NYAROMON`,
      baseDigimon: NYAROMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.natureSpirits.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.virusBusters.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_TOKOMON`,
      baseDigimon: TOKOMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.windGuardians.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.virusBusters.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_TANEMON`,
      baseDigimon: TANEMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.jungleTroopers.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_BUKAMON`,
      baseDigimon: BUKAMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.deepSavers.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    },

    {
      id: `BINARY_FOREST_PYOCOMON`,
      baseDigimon: PYOCOMON.id,

      lootTable: [
        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.windGuardians.id,
          quantity: {
            min: 0,
            max: 3
          }
        },

        {
          type: 'core',
          coreType: 'families',
          coreId: ALL_CORES.jungleTroopers.id,
          quantity: {
            min: 0,
            max: 3
          }
        }
      ]
    }
  ]
}
