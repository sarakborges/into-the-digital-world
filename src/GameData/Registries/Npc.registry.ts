import type { NpcType } from '@/Types/Npc.type'

import { NpcRegistry } from '@/GameData/Npcs'

export type NpcCategory = Extract<keyof typeof NpcRegistry, string>

type GetNpcParams = {
  category: string
  npcId: string
}

const isNpcCategory = (category: string): category is NpcCategory => {
  return category in NpcRegistry
}

const findNpcsByCategory = (
  category: string
): Record<string, NpcType> | undefined => {
  return Object.entries(NpcRegistry).find(
    ([registeredCategory]) => registeredCategory === category
  )?.[1]
}

export const getNpcCategories = (): NpcCategory[] => {
  return Object.keys(NpcRegistry).filter(isNpcCategory)
}

export const getNpcsByCategory = (
  category: string
): Record<string, NpcType> => {
  const npcs = findNpcsByCategory(category)

  if (!npcs) {
    throw new Error(`Unknown NPC category: ${category}`)
  }

  return npcs
}

export const findNpc = ({
  category,
  npcId
}: GetNpcParams): NpcType | undefined => {
  const npcs = findNpcsByCategory(category)

  return npcs?.[npcId]
}

export const getNpc = (params: GetNpcParams): NpcType => {
  const npc = findNpc(params)

  if (!npc) {
    throw new Error(`Unknown NPC: ${params.category}.${params.npcId}`)
  }

  return npc
}
