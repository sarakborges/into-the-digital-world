type GetGameboardStylesParams = {
  currentX: number
  currentY: number
  gridSize: number
  isWarping: boolean
}

export const getGameboardStyles = ({
  currentX,
  currentY,
  gridSize,
  isWarping
}: GetGameboardStylesParams): React.CSSProperties => {
  return {
    '--current-x': currentX,
    '--current-y': currentY,
    '--grid-size': gridSize,
    '--is-warping': !isWarping ? 1 : 0
  } as React.CSSProperties
}
