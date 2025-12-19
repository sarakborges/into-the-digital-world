import { MapTypes, type MapType } from '@/Types/Map.type'

export const SUBROOT_GROVE: MapType = {
  id: `SUBROOT_GROVE`,
  name: `Subroot Groove`,
  type: [MapTypes.COMBAT],
  enemyLevelRange: {
    min: 2,
    max: 4
  },

  wildDigimons: [
    {
      id: `SUBROOT_GROVE_BUDMON`,
      baseDigimon: `BUDMON`
    },

    {
      id: `SUBROOT_GROVE_POKOMON`,
      baseDigimon: `POKOMON`
    },

    {
      id: `SUBROOT_GROVE_POROMON`,
      baseDigimon: `POROMON`
    },

    {
      id: `SUBROOT_GROVE_UPAMON`,
      baseDigimon: `UPAMON`
    },

    {
      id: `SUBROOT_GROVE_PAGUMON`,
      baseDigimon: `PAGUMON`
    },

    {
      id: `SUBROOT_GROVE_GUMMYMON`,
      baseDigimon: `GUMMYMON`
    },

    {
      id: `SUBROOT_GROVE_CHOCOMON`,
      baseDigimon: `CHOCOMON`
    },

    {
      id: `SUBROOT_GROVE_MINOMON`,
      baseDigimon: `MINOMON`
    }
  ]
}
