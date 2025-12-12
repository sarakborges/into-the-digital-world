import { MapTypes, type MapType } from '@/Types/Map.type'

export const KERNEL_LAKE: MapType = {
  id: `KERNEL_LAKE`,
  name: `Kernel Lake`,
  type: [MapTypes.COMBAT],
  enemyLevelRange: {
    min: 2,
    max: 4
  },

  wildDigimons: [
    {
      id: `KERNEL_LAKE_BUKAMON`,
      baseDigimon: `BUKAMON`
    },

    {
      id: `KERNEL_LAKE_KOROMON`,
      baseDigimon: `KOROMON`
    },

    {
      id: `KERNEL_LAKE_MOCHIMON`,
      baseDigimon: `MOCHIMON`
    }
  ]
}
