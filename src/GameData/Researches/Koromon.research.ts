import type { ResearchDefinitionType } from '@/Types/Research.type'

import { DragonsRoarCoreItem } from '@/GameData/Items/DragonsRoarCore.item'
import { KoromonCoreItem } from '@/GameData/Items/KoromonCore.item'
import { VirusBustersCoreItem } from '@/GameData/Items/VirusBustersCore.item'

export const KoromonResearch = {
  cost: {
    [KoromonCoreItem.id]: 10
  },

  requiredItems: {
    [KoromonCoreItem.id]: 5
  },

  optionalItems: {
    [DragonsRoarCoreItem.id]: 5,
    [VirusBustersCoreItem.id]: 5
  }
} satisfies ResearchDefinitionType
