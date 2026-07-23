import { findItem } from '@/GameData/Registries/Item.registry'

export const getIsItemCategoryCore = (item: string): boolean => {
  const itemDetails = findItem(item)

  if (!itemDetails) {
    return false
  }

  return itemDetails.category === 'core'
}
