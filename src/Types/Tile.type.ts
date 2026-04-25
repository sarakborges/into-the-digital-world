export type TileType = {
  texture?: string

  canMove: {
    up?: boolean
    down?: boolean
    left?: boolean
    right?: boolean
  }
}
