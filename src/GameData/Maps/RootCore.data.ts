import { MapTypes, type MapType } from '@/Types/Map.type'

export const ROOT_CORE: MapType = {
  id: `ROOT_CORE`,
  name: `Root Core`,
  type: [MapTypes.BOSS],
  bossLevel: 5,

  wildDigimons: [
    {
      id: `ROOT_CORE_KOROMON`,
      baseDigimon: `KOROMON`,
      extraStats: {
        atk: {
          type: 'fixed',
          value: 5
        }
      }
    }
  ]
}
