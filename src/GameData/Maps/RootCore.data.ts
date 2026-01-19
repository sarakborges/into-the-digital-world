import { MapTypes, type MapType } from '@/Types/Map.type'

export const ROOT_CORE: MapType = {
  id: `ROOT_CORE`,
  name: `Root Core`,
  description: `The heart of the domain. A deep chamber where energy flows converge violently. The air vibrates with tension, as if the entire system were on the brink of collapse.`,
  types: [MapTypes.BOSS],
  bossLevel: 5,

  wildDigimons: [
    {
      id: `ROOT_CORE_PAGUMON`,
      baseDigimon: `PAGUMON`,
      extraStats: {
        atk: {
          type: 'fixed',
          value: 5
        }
      }
    }
  ]
}
