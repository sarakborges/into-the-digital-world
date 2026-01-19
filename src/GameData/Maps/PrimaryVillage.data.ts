import { MapTypes, type MapType } from '@/Types/Map.type'

import {
  PRIMARY_VILLAGE_MERCHANT,
  PRIMARY_VILLAGE_QUEST_GIVER
} from '@/GameData/Npcs'

export const PRIMARY_VILLAGE: MapType = {
  id: `PRIMARY_VILLAGE`,
  name: `Primary Village`,
  description: `The first stable point of the Root Domain. Simple living data structures form houses, while glowing streams connect everything in harmony. Here, the system breathes in peace.`,
  types: [MapTypes.COMMERCE, MapTypes.QUEST],

  availableNpcs: [PRIMARY_VILLAGE_MERCHANT, PRIMARY_VILLAGE_QUEST_GIVER]
}
