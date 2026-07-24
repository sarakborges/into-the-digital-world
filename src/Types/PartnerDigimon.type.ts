import type { EquipmentType } from '@/Types/Equipment.type'

export type PartnerDigimonType = {
  id: number
  name?: string | undefined
  baseDigimon: string
  isFavorite?: boolean | undefined
  isStarter?: boolean | undefined

  equipments: EquipmentType
}
