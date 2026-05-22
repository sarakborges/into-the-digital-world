import type { GridType } from '@/Types/Grid.type'
import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { floorTile } from '@/GameData/Zones/floor.tile'

import { WarpToMainRoom } from './Events/WarpToMainRoom.event'
import { WarpToRestRoom1 } from './Events/WarpToRestRoom1.event'

const fullFloorRow = {
  1: { ...floorTile },
  2: { ...floorTile },
  3: { ...floorTile },
  4: { ...floorTile },
  5: { ...floorTile },
  6: { ...floorTile },
  7: { ...floorTile },
  8: { ...floorTile },
  9: { ...floorTile },
  10: { ...floorTile },
  11: { ...floorTile }
}

const grid: GridType = {
  5: { ...fullFloorRow },
  6: { ...fullFloorRow },
  7: { ...fullFloorRow }
}

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainCorridor = () => {
  const zoneDetails: ZoneType = {
    id: `rootDomainCorridor`,
    background: `RootDomain/Corridor`,
    name: `Root Domain`,
    gridSize,
    grid: filledGrid,

    events: {
      warpToMainRoom: (props) => WarpToMainRoom(props),
      warpToRestRoom1: (props) => WarpToRestRoom1(props)
    },

    tiles: [
      {
        id: 'warpToMainRoom',
        x: 0,
        y: 6,
        event: 'warpToMainRoom'
      },

      {
        id: 'warpToRestRoom1',
        x: 4,
        y: 4,
        event: 'warpToRestRoom1'
      }
    ]
  }

  return zoneDetails
}
