import { Fragment } from 'react/jsx-runtime'

import { getTexts } from '@/Helpers/getTexts.helper'

import { AllItems } from '@/GameData/Items'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { ItemCore } from '@/Components/App/ItemCore'

import './Inventory.style.scss'

export const Inventory = () => {
  const profile = useProfileStore((state) => state.profile)

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
            <div className="item-category">
              <Text>
                {getTexts(`INVENTORY_CATEGORY_${category.toLocaleUpperCase()}`)}
              </Text>

              <div className="items-list">
                {Object.keys(categories[category]).map((item) => (
                  <div
                    className="item"
                    key={`inventory-category-${category}-item-${item}`}
                  >
                    {AllItems[item].category === 'core' && (
                      <ItemCore item={item} />
                    )}

                    {AllItems[item].category !== 'core' && (
                      <Portrait
                        alt={AllItems[item].name}
                        src={`/${AllItems[item].portrait}.webp`}
                      />
                    )}

                    <Text>
                      <div>{AllItems[item].name}</div>
                      <div>{profile.items[item] || 0}</div>
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
