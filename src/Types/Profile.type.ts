import type { AvatarType } from '@/Types/Avatar.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

export type ProfileType = {
  id: number
  name: string
  lastSave: Date
  avatar?: AvatarType
  currency?: number
  currentTitle: string
  currentScene: string | null
  party: Array<number>
  titles: Array<string>
  dungeonsFound: Array<string>
  researchesFound: Array<string>
  researches: Array<string>

  quests: {
    [questId: string]: {
      objectives: {
        [objectiveId: string]: number | boolean
      }
    }
  }

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

  npcAcquaintances: {
    [key: string]: unknown
  }

  meaningfulChoices: {
    [key: string]: string
  }
}
