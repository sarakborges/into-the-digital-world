import { AllItems } from '@/GameData/Items'

export const getIsItemCategoryCore = (item: string): boolean => {
  const itemDetails = AllItems[item]

  if (!itemDetails) {
    return false
  }

  return itemDetails.category === 'core'
}
