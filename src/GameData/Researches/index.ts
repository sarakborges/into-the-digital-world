import { DorimonResearch } from './Dorimon.research'
import { KoromonResearch } from './Koromon.research'

import type { ResearchType } from '@/Types/Research.type'

import { DigimonDorimon } from '@/GameData/Digimons/Dorimon.digimon'
import { DigimonKoromon } from '@/GameData/Digimons/Koromon.digimon'

export const AllResearches: {
  [digimonId: string]: ResearchType
} = {
  [DigimonKoromon.id]: KoromonResearch,
  [DigimonDorimon.id]: DorimonResearch
}

export const AvailableResearchesAtJijimon = {
  [DigimonKoromon.id]: KoromonResearch,
  [DigimonDorimon.id]: DorimonResearch
}

export const AvailableResearchesAtCulumon = {}
