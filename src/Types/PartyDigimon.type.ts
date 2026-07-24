import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { ConditionId } from '@/Types/Condition.type'
import type { EquipmentType } from '@/Types/Equipment.type'

export type PartyDigimonType = BaseDigimonType & {
  party: 'allies' | 'enemies'
  index: number
  equipments: EquipmentType

  conditions?: Partial<Record<ConditionId, number>>
}
