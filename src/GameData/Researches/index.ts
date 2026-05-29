import { AllDigimons } from '@/GameData/Digimons'

import { KoromonResearch } from './Koromon.research'
import { DorimonResearch } from './Dorimon.research'

export const AllResearches: {
  [digimonId: string]: {
    cost: {
      [itemId: string]: number
    }
  }
} = {
  [AllDigimons.koromon.id]: KoromonResearch,
  [AllDigimons.dorimon.id]: DorimonResearch
}
