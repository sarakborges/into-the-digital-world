import { MapTypes, type MapType } from '@/Types/Map.type'

export const BINARY_FOREST: MapType = {
  id: `BINARY_FOREST`,
  name: `Binary Forest`,
  type: [MapTypes.COMBAT],
  maxEnemiesPerEncounter: 1,
  enemyLevelRange: {
    min: 1,
    max: 1
  },

  wildDigimons: [
    {
      id: `BINARY_FOREST_KOROMON`,
      baseDigimon: `KOROMON`
    },

    {
      id: `BINARY_FOREST_TUNOMON`,
      baseDigimon: `TUNOMON`
    },

    {
      id: `BINARY_FOREST_MOCHIMON`,
      baseDigimon: `MOCHIMON`
    },

    {
      id: `BINARY_FOREST_NYAROMON`,
      baseDigimon: `NYAROMON`
    },

    {
      id: `BINARY_FOREST_TOKOMON`,
      baseDigimon: `TOKOMON`
    },

    {
      id: `BINARY_FOREST_TANEMON`,
      baseDigimon: `TANEMON`
    },

    {
      id: `BINARY_FOREST_BUKAMON`,
      baseDigimon: `BUKAMON`
    },

    {
      id: `BINARY_FOREST_PYOCOMON`,
      baseDigimon: `PYOCOMON`
    }
  ]
}
