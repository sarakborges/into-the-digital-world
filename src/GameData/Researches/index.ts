import { DorimonResearch } from './Dorimon.research'
import { KoromonResearch } from './Koromon.research'

import type { ResearchType } from '@/Types/Research.type'

import { AllDigimons } from '@/GameData/Digimons'

export const AllResearches: {
  [digimonId: string]: ResearchType
} = {
  [AllDigimons.koromon.id]: KoromonResearch,
  [AllDigimons.dorimon.id]: DorimonResearch
}

export const AvailableResearchesAtJijimon = {
  [AllDigimons.koromon.id]: KoromonResearch,
  [AllDigimons.dorimon.id]: DorimonResearch
}

export const AvailableResearchesAtCulumon = {}
