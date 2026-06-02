import { AllItems } from '@/GameData/Items'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import { ItemCore } from '@/Components/App/ItemCore'

import './ItemDisplay.style.scss'

export const ItemDisplay = ({
  item,
  amount
}: {
  item: string
  amount: number
}) => {
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
        <div>{amount || 0}</div>
      </Text>
    </div>
  )
}
