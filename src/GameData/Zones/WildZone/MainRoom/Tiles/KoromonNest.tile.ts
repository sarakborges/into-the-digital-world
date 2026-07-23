import type { MapTileType } from '@/Types/MapTile.type'

import { DungeonTriggerWildZoneKoromonNest } from '@/GameData/Scenes/Apps/Dungeon/TriggerWildZoneKoromonNest.scene'

export const WildZoneKoromonNestTile: MapTileType = {
  id: 'wildZoneKoromonNest',
  x: 12,
  y: 11,

  scene: {
    component: DungeonTriggerWildZoneKoromonNest,
    enablesMovement: true
  }
}
