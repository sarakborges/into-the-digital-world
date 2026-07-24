import type { ReactNode } from 'react'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { ItemDisplay } from '@/Components/Global/ItemDisplay/ItemDisplay.component'
import '@/Components/Global/ItemsList/ItemsList.style.scss'

type ItemsListProps = {
  list: Record<string, number> | undefined
  title?: ReactNode
  displayPlayerResouce?: boolean
}

export const ItemsList = ({
  list,
  title,
  displayPlayerResouce
}: ItemsListProps) => {
  if (!list || !Object.keys(list).length) {
    return
  }

  return (
    <div className="items-list">
      {title && <Text>{title}</Text>}

      <div className="items">
        {Object.entries(list).map(([item, amount]) => (
          <ItemDisplay
            key={`items-list-${item}-item-${item}`}
            item={item}
            amount={amount}
            displayPlayerResouce={displayPlayerResouce}
          />
        ))}
      </div>
    </div>
  )
}
