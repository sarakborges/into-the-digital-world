import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'

export const RootDomainBedRoomDressmonRoomTile: MapTileType = {
  id: 'rootDomainBedRoomDressmon',
  x: 12,
  y: 3,

  scene: {
    currentScene: 'avatarCustomization',
    currentStage: '001',
    enablesMovement: true
  },

  npc: {
    ...AllNpcs.appmon.dressmon,
    isVisible: false
  }
}
