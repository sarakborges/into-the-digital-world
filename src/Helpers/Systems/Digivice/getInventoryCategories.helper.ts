import { findItem } from '@/GameData/Registries/Item.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getInventoryCategories = (): Record<
  string,
  Record<string, number>
> => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return { general: {}, equipment: {}, keyItem: {}, core: {} }
  }

  const categories = {
    general: {},
    equipment: {},
    keyItem: {},
    core: {}
  }

  Object.keys(profile.items ?? {}).forEach((itemId) => {
    const item = findItem(itemId)

    if (!item) {
      return
    }

    categories[item.category][itemId] = profile.items[itemId]
  })

  return categories
}
