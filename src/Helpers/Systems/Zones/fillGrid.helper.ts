import type { GridType } from '@/Types/Grid.type'

export const fillGrid = ({
  grid,
  gridSize
}: {
  grid: GridType
  gridSize: number
}): GridType => {
  const gridArr = new Array(gridSize).fill(null)

  for (const x in gridArr) {
    if (!grid[x]) {
      grid[x] = {}
    }

    for (const y in gridArr) {
      if (!grid[x][y]) {
        grid[x][y] = null
      }
    }
  }

  return grid
}
