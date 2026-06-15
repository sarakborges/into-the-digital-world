import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { EquipmentType } from '@/Types/Equipment.type'

export type PartyDigimonType = BaseDigimonType & {
  party: 'allies' | 'enemies'
  index: number
  equipments: EquipmentType

  conditions?: {
    [conditionId: string]: number
  }
}
