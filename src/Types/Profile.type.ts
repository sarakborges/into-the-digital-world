import type { AvatarType } from '@/Types/Avatar.type'
import type { DigimonType } from '@/Types/Digimon.type'

export type ProfileType = {
  id: number
  name: string
  lastSave: string
  avatar?: AvatarType

  items: {
    [k: string]: {}
  }

  currentZone: {
    id: string
    x: number
    y: number
  }

  currentScene: string | null
  doneScenes: Array<string>

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
