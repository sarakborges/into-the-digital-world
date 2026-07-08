import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { NpcType } from '@/Types/Npc.type'
import type { ProfileType } from '@/Types/Profile.type'

export type DialogType = {
  speaker?: (NpcType | BaseDigimonType | ProfileType) & {
    isPlayer?: boolean
  }
  content: React.ReactNode
  options?: Array<{
    id: string
    text: string
    disabled?: boolean
    action: () => void
  }>
}
