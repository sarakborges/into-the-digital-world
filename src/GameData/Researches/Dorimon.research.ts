import type {ResearchType} from '@/Types/Research.type'

import {AllItems} from '@/GameData/Items'

export const DorimonResearch: ResearchType = {
  cost: {
    [AllItems.dorimonCore.id]: 25
  },

  requiredItems: {
    [AllItems.dorimonCore.id]: 25
  }
}
