import { Fragment } from 'react/jsx-runtime'

import { getInventoryCategories } from '@/Helpers/Systems/Digivice'
import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { ItemsList } from '@/Components/Global/ItemsList'

import './AppInventory.style.scss'

export const AppInventory = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile || !Object.keys(profile.items).length) {
    return
  }

  const categories = getInventoryCategories(profile)

  return (
    <div className="inventory">
      {Object.keys(categories).map((category) => (
        <Fragment key={`inventory-category-${category}`}>
          {Object.keys(categories[category]).length > 0 && (
            <ItemsList
              list={categories[category]}
              title={getTranslation(
                `INVENTORY_CATEGORY_${category.toLocaleUpperCase()}`
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}
