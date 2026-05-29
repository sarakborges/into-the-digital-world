import type { AvatarType } from '@/Types/Avatar.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

export type ProfileType = {
  id: number
  name: string
  lastSave: string
  avatar?: AvatarType
  currency?: number
  currentTitle: string
  currentParty: Array<number>
  currentScene: string | null
  doneScenes: Array<string>
  titles: Array<string>
  researches: Array<string>

  items: {
    [itemId: string]: number
  }

  currentZone: {
    id: string
    map: string
    x: number
    y: number
  }

  partnerDigimons: {
    [key: string]: PartnerDigimonType
  }

  npcAcquintances: {
    [key: string]: {}
  }

  meaningfulChoices: {
    [key: string]: string
  }
}
