import { Fragment } from 'react/jsx-runtime'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getInventoryCategories } from '@/Helpers/Systems/Digivice/getInventoryCategories.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import '@/Components/Digivice/Apps/AppInventory/AppInventory.style.scss'
import { ItemsList } from '@/Components/Global/ItemsList/ItemsList.component'

export const AppInventory = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile || !Object.keys(profile.items).length) {
    return
  }

  const categories = getInventoryCategories()

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
