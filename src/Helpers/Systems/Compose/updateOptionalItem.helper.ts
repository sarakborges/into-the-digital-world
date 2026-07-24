import { getResearch } from '@/GameData/Registries/Research.registry'

import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'

import { useCompositionStore } from '@/Stores/Composition.store'

const getCompositionFill = (): number => {
  const { composition } = useCompositionStore.getState()

  if (!composition) {
    return 0
  }

  const optionalItems = getResearch(composition.baseDigimon.id).optionalItems

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

  const research = getResearch(composition.baseDigimon.id)
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

  const totalItems = applyItemAmounts({
    inventory: research.requiredItems ?? {},
    items: optionalItems
  })

  setComposition({
    ...composition,
    totalItems: applyItemAmounts({
      inventory: totalItems,
      items: { [item]: amount }
    }),

    completed: getCompositionFill() + itemWeight * amount,

    optionalItems: applyItemAmounts({
      inventory: composition.optionalItems ?? {},
      items: { [item]: amount }
    })
  })
}
