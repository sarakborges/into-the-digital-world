import type { NpcType } from '@/Types/Npc.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { ProfileType } from '@/Types/Profile.type'

export type DialogType = {
  speaker?: (NpcType | BaseDigimonType | ProfileType) & {
    id: string
    isPlayer?: boolean
  }
  content: React.ReactNode
  options?: Array<{
    id: string
    text: string
    action: () => void
  }>
}
