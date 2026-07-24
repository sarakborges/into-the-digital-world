export const hasItems = ({
  inventory,
  requiredItems
}: {
  inventory: Record<string, number>
  requiredItems: Record<string, number> | undefined
}): boolean => {
  return Object.entries(requiredItems ?? {}).every(
    ([item, amount]) => (inventory[item] ?? 0) >= amount
  )
}
