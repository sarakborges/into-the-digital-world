import { MapTypes, type MapType } from '@/Types/Map.type'

export const COCOON_NETWORK: MapType = {
  id: `COCOON_NETWORK`,
  name: `Cocoon Network`,
  description: `Threads, cocoons, and suspended structures dominate the scenery. Data in transformation drifts slowly, trapped in intermediate states between form and function.`,
  types: [MapTypes.COMBAT],
  enemyLevelRange: {
    min: 2,
    max: 4
  },

  wildDigimons: [
    {
      id: `COCOON_NETWORK_CHIBIMON`,
      baseDigimon: `CHIBIMON`
    },

    {
      id: `COCOON_NETWORK_GIGIMON`,
      baseDigimon: `GIGIMON`
    },

    {
      id: `COCOON_NETWORK_HOPMON`,
      baseDigimon: `HOPMON`
    },

    {
      id: `COCOON_NETWORK_DORIMON`,
      baseDigimon: `DORIMON`
    },

    {
      id: `COCOON_NETWORK_WANYAMON`,
      baseDigimon: `WANYAMON`
    },

    {
      id: `COCOON_NETWORK_KYOKYOMON`,
      baseDigimon: `KYOKYOMON`
    }
  ]
}
