import { AllItems } from '@/GameData/Items'

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

  Object.keys(profile.items ?? {}).forEach((item) => {
    const category = AllItems[item].category
    categories[category][item] = profile.items[item]
  })

  return categories
}
