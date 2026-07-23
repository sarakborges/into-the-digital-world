import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
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
    ...AllNpcs.general.gennai,
    isVisible: true
  }
}
