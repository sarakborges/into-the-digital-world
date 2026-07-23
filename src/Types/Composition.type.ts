import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

export type CompositionType = {
  baseDigimon: BaseDigimonType
  completed?: number

  totalItems?: {
    [itemId: string]: number
  }

  optionalItems?: {
    [itemId: string]: number
  }
}
