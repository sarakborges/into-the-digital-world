import type { ProfileType } from '@/Types/Profile.type'

import { AllItems } from '@/GameData/Items'

export const getInventoryCategories = (profile: ProfileType) => {
  const categories = {
    general: {},
    equipment: {},
    keyItem: {},
    core: {}
  }

  Object.keys(profile.items).forEach((item) => {
    const category = AllItems[item].category
    categories[category][item] = profile.items[item]
  })

  return categories
}
