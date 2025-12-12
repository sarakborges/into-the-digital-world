import type { PartnerDigimonType } from './Digimon.type'
import type { ItemType } from './Item.type'

export type ProfileType = {
  name?: string
  money?: number
  experience?: number
  level?: number
  avatar?: string

  partners?: PartnerDigimonType[]
  party?: number[]
  items?: ItemType[]
  completedQuests?: string[]
  seenDigimon?: string[]

  activeQuests?: [
    {
      questId: string
      progress: {
        enemiesDefeated?: []
        itemsLooted?: []
        coresAcquired?: []
      }
    }
  ]

  cores?: {
    digimon?: {
      digimonId: string
      value: number
    }[]

    family?: {
      familyId: string
      value: number
    }[]

    type?: {
      typeId: string
      value: number
    }[]

    element?: {
      elementId: string
      value: number
    }[]
  }
}
