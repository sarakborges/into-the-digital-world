import { MapTypes, type MapType } from '@/Types/Map.type'

import {
  PRIMARY_VILLAGE_MERCHANT,
  PRIMARY_VILLAGE_QUEST_GIVER
} from '@/GameData/Npcs'

export const PRIMARY_VILLAGE: MapType = {
  id: `PRIMARY_VILLAGE`,
  name: `Primary Village`,
  type: [MapTypes.COMMERCE, MapTypes.QUEST],

  availableNpcs: [PRIMARY_VILLAGE_MERCHANT, PRIMARY_VILLAGE_QUEST_GIVER]
}
