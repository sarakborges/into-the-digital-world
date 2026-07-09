export const getGameboardStyles = (
  currentX: number,
  currentY: number,
  gridSize: number,
  isWarping: boolean
): React.CSSProperties => {
  return {
    '--current-x': currentX,
    '--current-y': currentY,
    '--grid-size': gridSize,
    '--is-warping': !isWarping ? 1 : 0
  } as React.CSSProperties
}
