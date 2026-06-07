import { AllItems } from '@/GameData/Items'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import { ItemCore } from '@/Components/App/ItemCore'

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
            {profile?.items[item] || 0} / {amount || 0}
          </div>
        )}
      </Text>
    </div>
  )
}
