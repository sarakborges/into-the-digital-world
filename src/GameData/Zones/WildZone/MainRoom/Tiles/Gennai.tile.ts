import type { MapTileType } from '@/Types/MapTile.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { Location000 } from '@/GameData/Scenes/Apps/Location/000.scene'

export const WildZoneGennaiTile: MapTileType = {
  id: 'wildZoneGennai',
  x: 9,
  y: 7,

  scene: Location000,

  npc: {
    ...NpcGennai,
    isVisible: true
  }
}
