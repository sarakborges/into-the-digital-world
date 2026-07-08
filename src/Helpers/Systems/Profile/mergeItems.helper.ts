export const mergeItems = (
  ...itemLists: Array<Record<string, number> | undefined | null>
): Record<string, number> => {
  const merged: Record<string, number> = {}

  for (const list of itemLists) {
    if (!list) continue

    for (const item in list) {
      merged[item] = (merged[item] || 0) + list[item]
    }
  }

  return merged
}
