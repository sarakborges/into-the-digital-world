import type { AvatarType } from '@/Types/Avatar.type'

export type ProfileType = {
  id: number
  name: string
  lastSave: string
  avatar?: AvatarType

  currentZone: string
  currentX: number
  currentY: number
}
