import type { AvatarType } from '@/Types/Avatar.type'

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

  npcAcquintances: {
    [key: string]: {}
  }
}
