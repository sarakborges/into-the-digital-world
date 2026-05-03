import type { AvatarType } from '@/Types/Avatar.type'

export type ProfileType = {
  id: number
  name: string
  lastSave: string
  avatar?: AvatarType

  currentZone: {
    id: string
    x: number
    y: number
  }

  npcAcquintances: {
    [key: string]: {}
  }
}
