import type { AvatarType } from '@/Types/Avatar.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

export type ProfileType = {
  id: number
  name: string
  lastSave: string
  avatar?: AvatarType
  currency?: number
  currentTitle: string
  currentScene: string | null
  party: Array<number>
  titles: Array<string>
  researches: Array<string>
  doneScenes: Array<string>

  quests: {
    current: {
      [questId: string]: {}
    }

    done: {
      [questId: string]: {}
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

  npcAcquintances: {
    [key: string]: {}
  }

  meaningfulChoices: {
    [key: string]: string
  }
}
