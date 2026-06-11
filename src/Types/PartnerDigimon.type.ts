export type PartnerDigimonType = {
  id: number
  name?: string
  baseDigimon: string
  isFavorite?: boolean
  isStarter?: boolean

  equipments: {
    [equipmentId: number]:
      | {
          equipmentId?: string
        }
      | undefined
  }
}
