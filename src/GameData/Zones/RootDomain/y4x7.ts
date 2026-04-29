import type { TileType } from '@/Types/Tile.type'
import type { GameType } from '@/Types/Game.type'
import type { SceneType } from '@/Types/Scene.type'

import { BinaryForest } from '@/GameData/Zones/BinaryForest'

export const RootDomainY4X7: TileType = {
  texture: 'black',

  canMove: {
    up: true,
    down: true,
    left: true,
    right: true
  },

  onEnter: ({
    setGame
  }: {
    setGame: React.Dispatch<React.SetStateAction<GameType>>
    setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
  }) => {
    setGame?.((prevGame) => ({
      ...prevGame,
      currentZone: BinaryForest.id,
      currentX: 1
    }))
  }
}
