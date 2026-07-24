import { getItem } from '@/GameData/Registries/Item.registry'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { ItemCore } from '@/Components/Global/ItemCore/ItemCore.component'
import '@/Components/Global/ItemDisplay/ItemDisplay.style.scss'

export const ItemDisplay = ({
  item,
  amount,
  displayPlayerResouce
}: {
  item: string
  amount: number
  displayPlayerResouce: boolean | undefined
}) => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const itemDetails = getItem(item)
  const isCore = itemDetails.category === 'core'

  return (
    <div className="item-display">
      {isCore && <ItemCore item={item} />}

      {!isCore && (
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
