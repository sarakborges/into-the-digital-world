import { MapTypes, type MapType } from '@/Types/Map.type'

export const RESIDUAL_SECTOR: MapType = {
  id: `RESIDUAL_SECTOR`,
  name: `Residual Sector`,
  type: [MapTypes.COMBAT],
  enemyLevelRange: {
    min: 2,
    max: 4
  },

  wildDigimons: [
    {
      id: `RESIDUAL_SECTOR_TSUMEMON`,
      baseDigimon: `TSUMEMON`
    },

    {
      id: `RESIDUAL_SECTOR_PETITMERAMON`,
      baseDigimon: `PETITMERAMON`
    },

    {
      id: `RESIDUAL_SECTOR_YARMON`,
      baseDigimon: `YARMON`
    }
  ]
}
