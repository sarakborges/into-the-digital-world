import type { AvatarType } from '@/Types/Avatar.type'

export type ProfileType = {
  id?: number
  name: string
  avatar: AvatarType | null
  lastSave: Date

  currentTitle: string
  currentDialog: string | null
  currentScene: string | null
}
