import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { DigimonDorimon } from '@/GameData/Digimons/Dorimon.digimon'
import { DigimonKoromon } from '@/GameData/Digimons/Koromon.digimon'

const DigimonRegistry = {
  dorimon: DigimonDorimon,
  koromon: DigimonKoromon
} satisfies Record<string, BaseDigimonType>

export type DigimonId = Extract<keyof typeof DigimonRegistry, string>

export const findDigimon = (digimonId: string): BaseDigimonType | undefined => {
  return Object.values(DigimonRegistry).find(
    (digimon) => digimon.id === digimonId
  )
}

export const getDigimon = (digimonId: string): BaseDigimonType => {
  const digimon = findDigimon(digimonId)

  if (!digimon) {
    throw new Error(`Unknown Digimon: ${digimonId}`)
  }

  return digimon
}

export const getDigimonIds = (): string[] => {
  return Object.values(DigimonRegistry).map((digimon) => digimon.id)
}
