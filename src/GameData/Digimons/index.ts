import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import { DigimonKoromon } from './Koromon.digimon'
import { DigimonDorimon } from './Dorimon.digimon'

export const AllDigimons: Record<string, BaseDigimonType> = {
  dorimon: DigimonDorimon,
  koromon: DigimonKoromon
}
