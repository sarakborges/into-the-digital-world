import { getTexts } from '@/Helpers/getTexts.helper'

import { AllItems } from '@/GameData/Items'

import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { ItemCore } from '@/Components/App/ItemCore'

import './Inventory.style.scss'
import { Portrait } from '@/Components/System/Portrait'

export const Inventory = () => {
  const { profile } = useProfile()

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
      {Object.keys(categories).map(
        (category) =>
          Object.keys(categories[category]).length > 0 && (
            <div className="item-category">
              <Text>
                {getTexts(`INVENTORY_CATEGORY_${category.toLocaleUpperCase()}`)}
              </Text>

              <div className="items-list">
                {Object.keys(categories[category]).map((item) => (
                  <div className="item">
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
                      <div>x{profile.items[item] || 0}</div>
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  )
}
