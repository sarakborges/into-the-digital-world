import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonWildZoneKoromonNest } from '@/GameData/Dungeons/WildZone/KoromonNest'

const DungeonRegistry = {
  wildZone: {
    koromonNest: DungeonWildZoneKoromonNest
  }
} satisfies Record<string, Record<string, DungeonType>>

type GetDungeonParams = {
  zoneId: string
  dungeonId: string
}

export const findDungeon = ({
  zoneId,
  dungeonId
}: GetDungeonParams): DungeonType | undefined => {
  const dungeons = Object.entries(DungeonRegistry).find(
    ([registeredZoneId]) => registeredZoneId === zoneId
  )?.[1]

  return dungeons
    ? Object.entries(dungeons).find(
        ([registeredDungeonId]) => registeredDungeonId === dungeonId
      )?.[1]
    : undefined
}

export const getDungeon = (params: GetDungeonParams): DungeonType => {
  const dungeon = findDungeon(params)

  if (!dungeon) {
    throw new Error(`Unknown dungeon: ${params.zoneId}.${params.dungeonId}`)
  }

  return dungeon
}
