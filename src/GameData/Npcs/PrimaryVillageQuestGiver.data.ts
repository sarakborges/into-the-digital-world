import { InteractionsTypes, type NpcType } from '@/Types/Npc.type'

export const PRIMARY_VILLAGE_QUEST_GIVER: NpcType = {
  id: `PRIMARY_VILLAGE_QUEST_GIVER`,
  name: `Tokomon`,
  types: [InteractionsTypes.QUEST],

  interactions: [
    {
      id: 'QUEST_CORE_DISTURBANCE',
      type: 'QUEST',
      questId: 'CORE_DISTURBANCE'
    }
  ]
}
