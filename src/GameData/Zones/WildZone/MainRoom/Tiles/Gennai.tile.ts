import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllScenes } from '@/GameData/Scenes'

export const WildZoneGennaiTile: MapTileType = {
  id: 'wildZoneGennai',
  x: 9,
  y: 7,

  scene: { ...AllScenes.location['001'], enablesMovement: true },

  npc: {
    ...AllNpcs.general.gennai,
    isVisible: true
  }
}
