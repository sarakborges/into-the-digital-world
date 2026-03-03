import { MapTypes, type MapType } from '@/Types/Map.type'

import { TSUMEMON } from '@/GameData/Digimons'

export const ROOT_CORE: MapType = {
  id: `ROOT_CORE`,
  name: `Root Core`,
  description: `The heart of the domain. A deep chamber where energy flows converge violently. The air vibrates with tension, as if the entire system were on the brink of collapse.`,
  types: [MapTypes.COMBAT, MapTypes.ELITE],

  enemyLevelRange: {
    min: 2,
    max: 4
  },

  eliteLevelRange: {
    min: 3,
    max: 5
  },

  enemyDigimons: [
    {
      id: `ROOT_CORE_TSUMEMON`,
      baseDigimon: TSUMEMON.id
    }
  ],

  eliteDigimons: [
    {
      id: `ROOT_CORE_TSUMEMON_ELITE`,
      baseDigimon: TSUMEMON.id,
      spawnChance: 30,
      extraStats: {
        hp: {
          type: 'fixed',
          value: 5
        }
      }
    }
  ]
}
