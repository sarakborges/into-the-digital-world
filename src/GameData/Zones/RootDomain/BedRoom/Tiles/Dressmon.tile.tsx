import type { MapTileType } from '@/Types/MapTile.type'

import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { AvatarCustomization001 } from '@/GameData/Scenes/Apps/AvatarCustomization/001.scene'

export const RootDomainBedRoomDressmonRoomTile: MapTileType = {
  id: 'rootDomainBedRoomDressmon',
  x: 12,
  y: 3,

  scene: { component: AvatarCustomization001, enablesMovement: true },

  npc: {
    ...NpcDressmon,
    isVisible: false
  }
}
