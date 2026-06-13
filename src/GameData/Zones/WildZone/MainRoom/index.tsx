import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { grid } from './MainRoom.grid'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const WildZoneMainRoom: ZoneType = {
  id: `wildZoneMainRoom`,
  background: `WildZone/MainRoom`,
  name: `Root Domain`,
  gridSize,
  grid: filledGrid,
  tiles: []
}
