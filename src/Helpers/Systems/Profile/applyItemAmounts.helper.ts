type ItemAmounts = Record<string, number>

export const applyItemAmounts = ({
  inventory,
  items,
  operation = 'add'
}: {
  inventory: ItemAmounts
  items: ItemAmounts | undefined
  operation?: 'add' | 'subtract'
}): ItemAmounts => {
  const updatedInventory = { ...inventory }
  const multiplier = operation === 'add' ? 1 : -1

  for (const [item, amount] of Object.entries(items ?? {})) {
    updatedInventory[item] = (updatedInventory[item] ?? 0) + amount * multiplier
  }

  return updatedInventory
}
