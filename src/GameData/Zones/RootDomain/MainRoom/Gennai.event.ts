import type { TileType } from '@/Types/Tile.type'

import { AllNpcs } from '@/GameData/Npcs'

export const Gennai: TileType = {
  npc: AllNpcs.gennai,

  events: {
    openCustomizationDialog: ({ setScene }) => {
      setScene({
        currentScene: 'avatarCustomization',
        currentStage: '001'
      })
    }
  }
}
