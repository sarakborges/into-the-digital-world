import type { ZoneType } from '@/Types/Zone.type'

import { defaultTile } from '@/GameData/Zones/default.tile'

const createRow = (size: number) =>
  Object.fromEntries(
    Array.from({ length: size }, (_, i) => [i + 1, { ...defaultTile }])
  )

const createGrid = (size: number) =>
  Object.fromEntries(
    Array.from({ length: size }, (_, i) => [i + 1, createRow(size)])
  )

export const RootDomain: ZoneType = {
  id: `RootDomain`,
  name: `Root Domain`,

  spawn: {
    x: 4,
    y: 4
  },

  gridSize: {
    x: 15,
    y: 15
  },

  grid: createGrid(15)
}
