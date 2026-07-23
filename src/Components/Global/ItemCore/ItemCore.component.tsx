import { getItem } from '@/GameData/Registries/Item.registry'

import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import '@/Components/Global/ItemCore/ItemCore.style.scss'

export const ItemCore = ({ item }: { item: string }) => {
  const itemDetails = getItem(item)

  return (
    <div className="item-core">
      <Portrait alt="Core border" src={`/items/chip.png`} />

      <Portrait alt={itemDetails.name} src={`/${itemDetails.portrait}.webp`} />
    </div>
  )
}
