type Coordinate = { x: number; y: number } | null

export const getGamepadCoordinates = (): Array<Coordinate> => {
  return [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: +1, y: -1 },
    { x: -1, y: 0 },
    null,
    { x: +1, y: 0 },
    { x: -1, y: +1 },
    { x: +0, y: +1 },
    { x: +1, y: +1 }
  ]
}
