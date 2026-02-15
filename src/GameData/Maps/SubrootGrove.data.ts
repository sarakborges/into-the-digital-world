import { MapTypes, type MapType } from '@/Types/Map.type'

import {
  BUDMON,
  CHIBIMON,
  CHOCOMON,
  GUMMYMON,
  MINOMON,
  PAGUMON,
  POKOMON,
  POROMON,
  UPAMON
} from '@/GameData/Digimons'

export const SUBROOT_GROVE: MapType = {
  id: `SUBROOT_GROVE`,
  name: `Subroot Groove`,
  description: `Giant roots pierce soil and air alike, pulsing with natural energy. The space is dense, humid, and alive, as if the domain itself were trying to regenerate.`,
  types: [MapTypes.COMBAT],
  enemyLevelRange: {
    min: 2,
    max: 4
  },

  wildDigimons: [
    {
      id: `SUBROOT_GROVE_BUDMON`,
      baseDigimon: BUDMON.id
    },

    {
      id: `SUBROOT_GROVE_POKOMON`,
      baseDigimon: POKOMON.id
    },

    {
      id: `SUBROOT_GROVE_POROMON`,
      baseDigimon: POROMON.id
    },

    {
      id: `SUBROOT_GROVE_UPAMON`,
      baseDigimon: UPAMON.id
    },

    {
      id: `SUBROOT_GROVE_PAGUMON`,
      baseDigimon: PAGUMON.id
    },

    {
      id: `SUBROOT_GROVE_GUMMYMON`,
      baseDigimon: GUMMYMON.id
    },

    {
      id: `SUBROOT_GROVE_CHOCOMON`,
      baseDigimon: CHOCOMON.id
    },

    {
      id: `SUBROOT_GROVE_MINOMON`,
      baseDigimon: MINOMON.id
    }
  ]
}
