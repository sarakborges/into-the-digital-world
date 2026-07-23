import type { MapTileType } from '@/Types/MapTile.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { Location001 } from '@/GameData/Scenes/Apps/Location/001.scene'

export const WildZoneGennaiTile: MapTileType = {
  id: 'wildZoneGennai',
  x: 9,
  y: 7,

  scene: {
    component: Location001,
    enablesMovement: true
  },

  npc: {
    ...NpcGennai,
    isVisible: true
  }
}
