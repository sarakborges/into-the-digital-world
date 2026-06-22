import type {BaseDigimonType} from './BaseDigimon.type'

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
