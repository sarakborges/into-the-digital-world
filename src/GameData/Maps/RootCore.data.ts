import { MapTypes, type MapType } from '@/Types/Map.type'

import { TSUMEMON } from '@/GameData/Digimons'

export const ROOT_CORE: MapType = {
  id: `ROOT_CORE`,
  name: `Root Core`,
  description: `The heart of the domain. A deep chamber where energy flows converge violently. The air vibrates with tension, as if the entire system were on the brink of collapse.`,
  types: [MapTypes.BOSS],
  bossLevel: 1,

  wildDigimons: [
    {
      id: `ROOT_CORE_TSUMEMON_ELITE`,
      baseDigimon: TSUMEMON.id,
      extraStats: {
        atk: {
          type: 'fixed',
          value: -5
        }
      }
    }
  ]
}
