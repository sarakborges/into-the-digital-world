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
      id: `SUBROOT_GROVE_NYAROMON`,
      baseDigimon: `NYAROMON`
    },

    {
      id: `SUBROOT_GROVE_TANEMON`,
      baseDigimon: `TANEMON`
    },

    {
      id: `SUBROOT_GROVE_TUNOMON`,
      baseDigimon: `TUNOMON`
    },

    {
      id: `SUBROOT_GROVE_TOKOMON`,
      baseDigimon: `TUNOMON`
    },

    {
      id: `SUBROOT_GROVE_PYOCOMON`,
      baseDigimon: `PYOCOMON`
    }
  ]
}
