import { InteractionTypes, type NpcType } from '@/Types/Npc.type'
import { CORE_DISTURBANCE } from '@/GameData/Quests'

export const PRIMARY_VILLAGE_QUEST_GIVER: NpcType = {
  id: `PRIMARY_VILLAGE_QUEST_GIVER`,
  name: `Tokomon`,
  types: [InteractionTypes.QUEST],
  interactionsPerZone: {},
  questsOffered: [CORE_DISTURBANCE]
}
