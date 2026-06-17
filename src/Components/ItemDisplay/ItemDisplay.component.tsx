import { AllItems } from '@/GameData/Items'

import { Portrait } from '@/DesignSystem/Portrait'
import { Text } from '@/DesignSystem/Text'

import { ItemCore } from '@/Components/ItemCore'

import './ItemDisplay.style.scss'
import { useProfileStore } from '@/Stores/Profile.store'

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
      {itemDetails.category === 'core' && <ItemCore item={item} />}

      {itemDetails.category !== 'core' && (
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
