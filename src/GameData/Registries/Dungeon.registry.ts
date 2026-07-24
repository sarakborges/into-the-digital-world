import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonWildZoneKoromonNest } from '@/GameData/Dungeons/WildZone/KoromonNest'

const DungeonRegistry = {
  koromonNest: DungeonWildZoneKoromonNest
} satisfies Record<string, DungeonType>

export type DungeonId = Extract<keyof typeof DungeonRegistry, string>

export const isDungeonId = (dungeonId: string): dungeonId is DungeonId => {
  return dungeonId in DungeonRegistry
}

export const getDungeonIds = (): DungeonId[] => {
  return Object.keys(DungeonRegistry).filter(isDungeonId)
}

type GetDungeonParams = {
  zoneId: string
  dungeonId: string
}

export const findDungeon = ({
  zoneId,
  dungeonId
}: GetDungeonParams): DungeonType | undefined => {
  if (!isDungeonId(dungeonId)) {
    return undefined
  }

  const dungeon = DungeonRegistry[dungeonId]

  return dungeon.id === dungeonId && dungeon.zone === zoneId
    ? dungeon
    : undefined
}

export const getDungeon = (params: GetDungeonParams): DungeonType => {
  const dungeon = findDungeon(params)

  if (!dungeon) {
    throw new Error(`Unknown dungeon: ${params.zoneId}.${params.dungeonId}`)
  }

  return dungeon
}
