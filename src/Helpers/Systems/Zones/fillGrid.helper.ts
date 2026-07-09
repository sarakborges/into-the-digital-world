import type { GridType } from '@/Types/Grid.type'

export const fillGrid = ({
  grid,
  gridSize
}: {
  grid: GridType
  gridSize: number
}): GridType => {
  const gridArr = new Array(gridSize).fill(null)

  for (const y in gridArr) {
    if (!grid[y]) {
      grid[y] = {}
    }

    for (const x in gridArr) {
      if (!grid[y][x]) {
        grid[y][x] = null
      }
    }
  }

  return grid
}
