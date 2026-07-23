import type { ResearchType } from '@/Types/Research.type'

import { DorimonCoreItem } from '@/GameData/Items/DorimonCore.item'

export const DorimonResearch: ResearchType = {
  cost: {
    [DorimonCoreItem.id]: 25
  },

  requiredItems: {
    [DorimonCoreItem.id]: 25
  }
}
