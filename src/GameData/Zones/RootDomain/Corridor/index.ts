import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Systems/Zones/fillGrid'

import { WarpToMainRoom } from './Events/WarpToMainRoom.event'
import { WarpToBedRoom } from './Events/WarpToBedRoom.event'
import { grid } from './Corridor.grid'

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainCorridor: ZoneType = {
  id: `rootDomainCorridor`,
  background: `RootDomain/Corridor`,
  name: `Corridor`,
  gridSize,
  grid: filledGrid,

  tiles: [
    {
      id: 'warpToMainRoom',
      x: 0,
      y: 6,
      onEnter: {
        function: WarpToMainRoom
      }
    },

    {
      id: 'warpToBedRoom',
      x: 4,
      y: 4,
      onEnter: {
        function: WarpToBedRoom
      }
    }
  ]
}
