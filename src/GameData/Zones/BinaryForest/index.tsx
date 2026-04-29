import type { ZoneType } from '@/Types/Zone.type'
import type { GameType } from '@/Types/Game.type'
import type { SceneType } from '@/Types/Scene.type'

import { defaultTile } from '@/GameData/Zones/default.tile'
import { RootDomain } from '@/GameData/Zones/RootDomain'

const defaultRow = {
  1: { ...defaultTile },
  2: { ...defaultTile },
  3: { ...defaultTile },
  4: { ...defaultTile },
  5: { ...defaultTile },
  6: { ...defaultTile },
  7: { ...defaultTile }
}

const defaultGrid = {
  1: { ...defaultRow },
  2: { ...defaultRow },
  3: { ...defaultRow },

  4: {
    1: {
      texture: 'white',

      canMove: {
        up: true,
        down: true,
        left: true,
        right: true
      },

      onEnter: ({
        setGame,
        setScene
      }: {
        setGame: React.Dispatch<React.SetStateAction<GameType>>
        setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
      }) => {
        setGame?.((prevGame) => ({
          ...prevGame,
          currentZone: RootDomain.id,
          currentX: 7
        }))
      }
    },

    2: { ...defaultTile },
    3: { ...defaultTile },
    4: { ...defaultTile },
    5: { ...defaultTile },
    6: { ...defaultTile },
    7: { ...defaultTile }
  },

  5: { ...defaultRow },
  6: { ...defaultRow },
  7: { ...defaultRow }
}

export const BinaryForest: ZoneType = {
  id: `BinaryForest`,
  name: `Binary Forest`,

  spawn: {
    x: 4,
    y: 4
  },

  gridSize: {
    x: 7,
    y: 7
  },

  grid: defaultGrid
}
