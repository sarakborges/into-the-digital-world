import type { ResearchDefinitionType } from '@/Types/Research.type'

import { DorimonCoreItem } from '@/GameData/Items/DorimonCore.item'

export const DorimonResearch = {
  cost: {
    [DorimonCoreItem.id]: 25
  },

  requiredItems: {
    [DorimonCoreItem.id]: 25
  }
} satisfies ResearchDefinitionType
