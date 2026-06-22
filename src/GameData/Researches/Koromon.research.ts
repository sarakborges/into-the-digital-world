import type {ResearchType} from '@/Types/Research.type'

import {AllItems} from '@/GameData/Items'

export const KoromonResearch: ResearchType = {
  cost: {
    [AllItems.koromonCore.id]: 10
  },

  requiredItems: {
    [AllItems.koromonCore.id]: 5
  },

  optionalItems: {
    [AllItems.dragonsRoarCore.id]: 5,
    [AllItems.virusBustersCore.id]: 5
  }
}
