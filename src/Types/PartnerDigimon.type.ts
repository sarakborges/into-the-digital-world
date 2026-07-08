import type { EquipmentType } from '@/Types/Equipment.type'

export type PartnerDigimonType = {
  id: number
  name?: string
  baseDigimon: string
  isFavorite?: boolean
  isStarter?: boolean

  equipments: EquipmentType
}
