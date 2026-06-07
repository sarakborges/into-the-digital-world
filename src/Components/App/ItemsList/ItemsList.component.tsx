import { Text } from '@/Components/System/Text'

import { ItemDisplay } from '@/Components/App/ItemDisplay'

import './ItemsList.style.scss'

export const ItemsList = ({
  list,
  title,
  displayPlayerResouce
}: {
  list
  title?
  displayPlayerResouce?
}) => {
  if (!Object.keys(list).length) {
    return
  }

  return (
    <div className="items-list">
      {title && <Text>{title}</Text>}

      <div className="items">
        {Object.keys(list!).map((item) => (
          <ItemDisplay
            key={`items-list-${item}-item-${item}`}
            item={item}
            amount={list![item]}
            displayPlayerResouce={displayPlayerResouce}
          />
        ))}
      </div>
    </div>
  )
}
