export const getPercentage = ({
  current,
  max
}: {
  current: number
  max: number
}): number => {
  if (max <= 0) return 0

  const percentage = (current / max) * 100

  return Math.round(Math.min(100, Math.max(0, percentage)))
}
