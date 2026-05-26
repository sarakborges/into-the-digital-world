import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { WarpToMainRoom } from './Events/WarpToMainRoom.event'
import { WarpToRestRoom1 } from './Events/WarpToRestRoom1.event'
import { grid } from './Corridor.grid'

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
      warpToMainRoom: WarpToMainRoom,
      warpToRestRoom1: WarpToRestRoom1
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
