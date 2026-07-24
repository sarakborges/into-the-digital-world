import type { NpcType } from '@/Types/Npc.type'

import { NpcRegistry } from '@/GameData/Npcs'

export type NpcCategory = Extract<keyof typeof NpcRegistry, string>

export type NpcId<TCategory extends NpcCategory = NpcCategory> =
  TCategory extends NpcCategory
    ? Extract<keyof (typeof NpcRegistry)[TCategory], string>
    : never

type DynamicNpcParams = {
  category: string
  npcId: string
}

type GetNpcParams<
  TCategory extends string,
  TNpcId extends string
> = string extends TCategory | TNpcId
  ? {
      category: TCategory
      npcId: TNpcId
    }
  : TCategory extends NpcCategory
    ? TNpcId extends NpcId<TCategory>
      ? {
          category: TCategory
          npcId: TNpcId
        }
      : never
    : never

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
}: DynamicNpcParams): NpcType | undefined => {
  const npcs = findNpcsByCategory(category)

  return npcs?.[npcId]
}

export const getNpc = <
  TCategory extends string,
  TNpcId extends string
>(
  params: GetNpcParams<TCategory, TNpcId>
): NpcType => {
  const npc = findNpc(params)

  if (!npc) {
    throw new Error(`Unknown NPC: ${params.category}.${params.npcId}`)
  }

  return npc
}
