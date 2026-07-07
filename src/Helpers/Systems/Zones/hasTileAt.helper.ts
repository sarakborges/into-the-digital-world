export const hasTileAt = (
  tiles: Array<{ x: number; y: number }>,
  x: number,
  y: number
) => tiles.some((tile) => tile.x === x && tile.y === y)
