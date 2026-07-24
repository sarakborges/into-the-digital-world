import type { ResearchType } from '@/Types/Research.type'

import { DigimonDorimon } from '@/GameData/Digimons/Dorimon.digimon'
import { DigimonKoromon } from '@/GameData/Digimons/Koromon.digimon'
import { DorimonResearch } from '@/GameData/Researches/Dorimon.research'
import { KoromonResearch } from '@/GameData/Researches/Koromon.research'

const ResearchRegistry = {
  [DigimonKoromon.id]: KoromonResearch,
  [DigimonDorimon.id]: DorimonResearch
} satisfies Record<string, ResearchType>

export type ResearchId = Extract<keyof typeof ResearchRegistry, string>
type Research = (typeof ResearchRegistry)[ResearchId]

const ResearchAvailability = {
  jijimon: [DigimonKoromon.id, DigimonDorimon.id],
  culumon: []
} satisfies Record<string, ReadonlyArray<ResearchId>>

const isResearchId = (digimonId: string): digimonId is ResearchId => {
  return digimonId in ResearchRegistry
}

export const findResearch = (digimonId: string): Research | undefined => {
  return isResearchId(digimonId) ? ResearchRegistry[digimonId] : undefined
}

export const getResearch = (digimonId: string): Research => {
  const research = findResearch(digimonId)

  if (!research) {
    throw new Error(`Unknown research: ${digimonId}`)
  }

  return research
}

export const getResearchIds = (): ResearchId[] => {
  return Object.keys(ResearchRegistry).filter(isResearchId)
}

export const getResearchIdsAvailableAt = (
  providerId: string
): ResearchId[] => {
  const researchIds = Object.entries(ResearchAvailability).find(
    ([registeredProviderId]) => registeredProviderId === providerId
  )?.[1]

  if (!researchIds) {
    throw new Error(`Unknown research provider: ${providerId}`)
  }

  return [...researchIds]
}
