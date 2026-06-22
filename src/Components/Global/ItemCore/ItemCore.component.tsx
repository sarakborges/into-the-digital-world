import {AllItems} from '@/GameData/Items'

import {Portrait} from '@/Components/DesignSystem/Portrait'

import './ItemCore.style.scss'

export const ItemCore = ({ item }: { item: string }) => {
  return (
    <div className="item-core">
      <Portrait alt="Core border" src={`/items/chip.png`} />

      <Portrait
        alt={AllItems[item].name}
        src={`/${AllItems[item].portrait}.webp`}
      />
    </div>
  )
}
