import { useCompositionStore } from '@/Stores/Composition.store'
import { AllResearches } from '@/GameData/Researches'

const getCompositionFill = (): number => {
  const { composition } = useCompositionStore.getState()

  if (!composition) {
    return 0
  }

  const baseDigimon = composition.baseDigimon
  const optionalItems = AllResearches[baseDigimon.id].optionalItems

  return Object.keys(optionalItems ?? {}).reduce((acc, item) => {
    const weight = optionalItems![item]
    return acc + weight * (composition.optionalItems?.[item] || 0)
  }, 0)
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
  const requiredItems = AllResearches[baseDigimon.id].requiredItems
  const optionalItems = AllResearches[baseDigimon.id].optionalItems

  const compositionFill = composition.completed || 0

  if (
    (amount === -1 && compositionFill <= 0) ||
    (amount === 1 && compositionFill >= 100)
  ) {
    return
  }

  const updatedAmount = (composition.optionalItems?.[item] || 0) + amount

  const totalItems: Record<string, number> = {}

  for (let item in requiredItems) {
    totalItems[item] = (totalItems[item] || 0) + requiredItems[item]
  }

  for (let item in optionalItems) {
    totalItems[item] = (totalItems[item] || 0) + optionalItems[item]
  }

  totalItems[item] += amount

  setComposition({
    ...composition,
    totalItems,

    completed: getCompositionFill() + (optionalItems?.[item] || 0) * amount,

    optionalItems: {
      ...composition.optionalItems,
      [item]: updatedAmount
    }
  })
}
