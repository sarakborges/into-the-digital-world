import { Fragment } from 'react/jsx-runtime'

import { getTexts } from '@/Helpers/getTexts.helper'

import { AllItems } from '@/GameData/Items'

import { useProfileStore } from '@/Stores/Profile.store'

import { ItemsList } from '@/Components/App/ItemsList'

import './Inventory.style.scss'

export const Inventory = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile || !Object.keys(profile.items).length) {
    return
  }

  const categories = {
    general: {},
    equipment: {},
    keyItem: {},
    core: {}
  }

  for (let item of Object.keys(profile.items)) {
    categories[AllItems[item].category][item] = profile.items[item]
  }

  return (
    <div className="inventory">
      {Object.keys(categories).map((category) => (
        <Fragment key={`inventory-category-${category}`}>
          {Object.keys(categories[category]).length > 0 && (
            <ItemsList
              list={categories[category]}
              title={getTexts(
                `INVENTORY_CATEGORY_${category.toLocaleUpperCase()}`
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}
