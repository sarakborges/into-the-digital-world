import { MapTypes, type MapType } from '@/Types/Map.type'

import { HP_REGEN_SM, SP_REGEN_SM } from '@/GameData/Items'
import { ITS_JUST_A_PRANK_BRO } from '@/GameData/Quests'
import {
  PRIMARY_VILLAGE_MERCHANT,
  PRIMARY_VILLAGE_QUEST_GIVER
} from '@/GameData/Npcs'

export const PRIMARY_VILLAGE: MapType = {
  id: `PRIMARY_VILLAGE`,
  name: `Primary Village`,

  type: [MapTypes.COMMERCE, MapTypes.QUEST],

  itemsSold: [HP_REGEN_SM, SP_REGEN_SM],

  questsOffered: [ITS_JUST_A_PRANK_BRO],

  availableNpcs: [PRIMARY_VILLAGE_MERCHANT, PRIMARY_VILLAGE_QUEST_GIVER]
}
