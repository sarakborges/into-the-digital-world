import { AllItems } from '@/GameData/Items'

import { getIsItemCategoryCore } from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { ItemCore } from '@/Components/Global/ItemCore'

import './ItemDisplay.style.scss'

export const ItemDisplay = ({
  item,
  amount,
  displayPlayerResouce
}: {
  item: string
  amount: number
  displayPlayerResouce?: boolean
}) => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const itemDetails = AllItems[item]

  return (
    <div className="item-display">
      {getIsItemCategoryCore(item) && <ItemCore item={item} />}

      {!getIsItemCategoryCore(item) && (
        <Portrait
          alt={itemDetails.name}
          src={`/${itemDetails.portrait}.webp`}
        />
      )}

      <Text>
        <div>{itemDetails.name}</div>

        {!displayPlayerResouce && <div>x{amount || 0}</div>}

        {!!displayPlayerResouce && (
          <div>
            {profile.items[item] || 0} / {amount || 0}
          </div>
        )}
      </Text>
    </div>
  )
}
