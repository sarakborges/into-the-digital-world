import type { ResearchType } from '@/Types/Research.type'

import { DigimonDorimon } from '@/GameData/Digimons/Dorimon.digimon'
import { DigimonKoromon } from '@/GameData/Digimons/Koromon.digimon'
import { DorimonResearch } from '@/GameData/Researches/Dorimon.research'
import { KoromonResearch } from '@/GameData/Researches/Koromon.research'

const ResearchRegistry = {
  [DigimonKoromon.id]: KoromonResearch,
  [DigimonDorimon.id]: DorimonResearch
} satisfies Record<string, ResearchType>

const ResearchAvailability = {
  jijimon: [DigimonKoromon.id, DigimonDorimon.id],
  culumon: []
} satisfies Record<string, string[]>

export const findResearch = (digimonId: string): ResearchType | undefined => {
  return Object.entries(ResearchRegistry).find(
    ([registeredDigimonId]) => registeredDigimonId === digimonId
  )?.[1]
}

export const getResearch = (digimonId: string): ResearchType => {
  const research = findResearch(digimonId)

  if (!research) {
    throw new Error(`Unknown research: ${digimonId}`)
  }

  return research
}

export const getResearchIds = (): string[] => {
  return Object.keys(ResearchRegistry)
}

export const getResearchIdsAvailableAt = (providerId: string): string[] => {
  const researchIds = Object.entries(ResearchAvailability).find(
    ([registeredProviderId]) => registeredProviderId === providerId
  )?.[1]

  if (!researchIds) {
    throw new Error(`Unknown research provider: ${providerId}`)
  }

  return [...researchIds]
}
