export type ZonePositionType = {
  x: number
  y: number
}

export type ZoneEventType = {
  x: number
  y: number
  onEnter?: { type?: 'warp' }
  events?: Array<{ eventType?: 'default' | 'important' | 'dungeon' }>
}

export type ZoneProfilePositionType = {
  currentZone: ZonePositionType
}

export type VisibleTileType = {
  id: string
  type: string
  x: number
  y: number
}
