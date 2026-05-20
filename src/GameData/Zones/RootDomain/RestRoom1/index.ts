import type { GridType } from '@/Types/Grid.type'
import type { ZoneType } from '@/Types/Zone.type'
import type { SceneType } from '@/Types/Scene.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { SCENES } from '@/Consts/Scenes.const'

import { AllNpcs } from '@/GameData/Npcs'
import { floorTile } from '@/GameData/Zones/floor.tile'

import { WarpToCorridor } from './WarpToCorridor.event'

const fullFloorRow = {
  1: floorTile,
  2: floorTile,
  3: floorTile,
  4: floorTile,
  5: floorTile,
  6: floorTile,
  7: floorTile,
  8: floorTile,
  9: floorTile,
  10: floorTile
}

const grid: GridType = {
  2: {
    1: floorTile,
    2: floorTile,
    10: floorTile,
    11: floorTile
  },

  3: {
    1: floorTile,
    2: floorTile,
    3: floorTile,
    4: floorTile,
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile
  },

  4: { ...fullFloorRow },

  5: {
    3: floorTile,
    4: floorTile,
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile
  },

  6: { ...fullFloorRow },
  7: { ...fullFloorRow },

  8: {
    3: floorTile,
    4: floorTile,
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile
  },

  9: {
    4: floorTile,
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile
  },

  10: {
    4: floorTile,
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile
  }
}

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainRestRoom1 = ({
  scene
}: {
  scene: SceneType
}): ZoneType => {
  const zoneDetails: ZoneType = {
    id: `RootDomainRestRoom1`,
    background: `RootDomain/RestRoomLeft`,
    name: `Root Domain`,
    gridSize,
    grid: filledGrid,

    events: {
      warpToCorridor: (props) => WarpToCorridor(props)
    },

    tiles: [
      {
        x: 6,
        y: 11,
        event: 'warpToCorridor'
      },

      {
        x: 6,
        y: 11,

        condition:
          scene?.currentScene === SCENES.introduction.id &&
          scene?.currentStage !== '001',

        npc: AllNpcs.gennai
      }
    ]
  }

  return zoneDetails
}
