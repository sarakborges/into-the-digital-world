import type { MapTileType } from '@/Types/MapTile.type'

import { AllScenes } from '@/GameData/Scenes'

export const WildZoneKoromonNestTile: MapTileType = {
  id: 'wildZoneKoromonNest',
  x: 12,
  y: 11,

  scene: {
    ...AllScenes.dungeon.triggerWildZoneKoromonNest,
    enablesMovement: true
  }
}
