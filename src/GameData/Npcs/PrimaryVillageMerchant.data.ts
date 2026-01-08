import { InteractionTypes, type NpcType } from '@/Types/Npc.type'

import { HP_REGEN_SM, SP_REGEN_SM } from '@/GameData/Items'

export const PRIMARY_VILLAGE_MERCHANT: NpcType = {
  id: `PRIMARY_VILLAGE_MERCHANT`,
  name: `Chibimon`,
  types: [InteractionTypes.COMMERCE],
  interactionsPerZone: {},
  itemsSold: [HP_REGEN_SM, SP_REGEN_SM]
}
