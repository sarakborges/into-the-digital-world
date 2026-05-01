import type { NpcType } from '@/Types/Npc.type'

export type DialogType = {
  speaker?: NpcType
  content: React.ReactNode
  options?: Array<{
    text: string
    action: () => void
  }>
}
