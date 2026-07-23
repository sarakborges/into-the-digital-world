import type { NpcType } from '@/Types/Npc.type'

import { NpcRegistry } from '@/GameData/Npcs'

export type NpcCategory = Extract<keyof typeof NpcRegistry, string>

type GetNpcParams = {
  category: string
  npcId: string
}

export const getNpcCategories = (): NpcCategory[] => {
  return Object.keys(NpcRegistry) as NpcCategory[]
}

export const getNpcsByCategory = (
  category: string
): Record<string, NpcType> => {
  const npcs = NpcRegistry[category as NpcCategory] as
    Record<string, NpcType> | undefined

  if (!npcs) {
    throw new Error(`Unknown NPC category: ${category}`)
  }

  return npcs
}

export const findNpc = ({
  category,
  npcId
}: GetNpcParams): NpcType | undefined => {
  const npcs = NpcRegistry[category as NpcCategory] as
    Record<string, NpcType> | undefined

  return npcs?.[npcId]
}

export const getNpc = (params: GetNpcParams): NpcType => {
  const npc = findNpc(params)

  if (!npc) {
    throw new Error(`Unknown NPC: ${params.category}.${params.npcId}`)
  }

  return npc
}
