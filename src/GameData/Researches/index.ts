import type { ResearchType } from '@/Types/Research.type'

import { AllDigimons } from '@/GameData/Digimons'

import { KoromonResearch } from './Koromon.research'
import { DorimonResearch } from './Dorimon.research'

export const AllResearches: {
  [digimonId: string]: ResearchType
} = {
  [AllDigimons.koromon.id]: KoromonResearch,
  [AllDigimons.dorimon.id]: DorimonResearch
}
