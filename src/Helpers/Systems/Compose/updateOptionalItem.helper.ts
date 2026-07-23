import { getResearch } from '@/GameData/Registries/Research.registry'

import { useCompositionStore } from '@/Stores/Composition.store'

const getCompositionFill = (): number => {
  const { composition } = useCompositionStore.getState()

  if (!composition) {
    return 0
  }

  const baseDigimon = composition.baseDigimon
  const optionalItems = getResearch(baseDigimon.id).optionalItems

  return Object.entries(optionalItems ?? {}).reduce(
    (fill, [item, weight]) =>
      fill + weight * (composition.optionalItems?.[item] ?? 0),
    0
  )
}

export const updateOptionalItem = ({
  item,
  amount
}: {
  item: string
  amount: -1 | 1
}) => {
  const { composition, setComposition } = useCompositionStore.getState()

  if (!composition) {
    return
  }

  const baseDigimon = composition.baseDigimon
  const research = getResearch(baseDigimon.id)
  const requiredItems = research.requiredItems
  const optionalItems = research.optionalItems

  const compositionFill = composition.completed || 0

  if (
    (amount === -1 && compositionFill <= 0) ||
    (amount === 1 && compositionFill >= 100)
  ) {
    return
  }

  const itemWeight = optionalItems?.[item]
  const currentAmount = composition.optionalItems?.[item] ?? 0

  if (itemWeight === undefined || (amount === -1 && currentAmount <= 0)) {
    return
  }

  const updatedAmount = currentAmount + amount

  const totalItems: Record<string, number> = {}

  for (const [requiredItem, requiredAmount] of Object.entries(
    requiredItems ?? {}
  )) {
    totalItems[requiredItem] = (totalItems[requiredItem] ?? 0) + requiredAmount
  }

  for (const [optionalItem, optionalAmount] of Object.entries(
    optionalItems ?? {}
  )) {
    totalItems[optionalItem] = (totalItems[optionalItem] ?? 0) + optionalAmount
  }

  totalItems[item] = (totalItems[item] ?? 0) + amount

  setComposition({
    ...composition,
    totalItems,

    completed: getCompositionFill() + itemWeight * amount,

    optionalItems: {
      ...composition.optionalItems,
      [item]: updatedAmount
    }
  })
}
