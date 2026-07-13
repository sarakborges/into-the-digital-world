import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllScenes } from '@/GameData/Scenes'

export const RootDomainBedRoomDressmonRoomTile: MapTileType = {
  id: 'rootDomainBedRoomDressmon',
  x: 12,
  y: 3,

  scene: AllScenes.avatarCustomization['001'],

  npc: {
    ...AllNpcs.appmon.dressmon,
    isVisible: false
  }
}
