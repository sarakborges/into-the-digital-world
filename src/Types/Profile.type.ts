import type { AvatarType } from '@/Types/Avatar.type'
import type { DigimonType } from '@/Types/Digimon.type'
import type { ItemType } from '@/Types/Item.type'

export type ProfileType = {
  id: number
  name: string
  lastSave: string
  avatar?: AvatarType
  currency?: number
  currentlyInBattle?: boolean
  currentTitle: string
  currentParty: Array<number>
  currentScene: string | null
  doneScenes: Array<string>
  titles: Array<string>

  items: {
    [itemId: string]: ItemType
  }

  currentZone: {
    id: string
    x: number
    y: number
  }

  partnerDigimons: {
    [key: string]: DigimonType
  }

  npcAcquintances: {
    [key: string]: {}
  }

  meaningfulChoices: {
    [key: string]: string
  }
}
