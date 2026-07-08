import { DigiviceItem } from './Digivice.item'
import { DorimonCoreItem } from './DorimonCore.item'
import { DragonsRoarCoreItem } from './DragonsRoarCore.item'
import { EquipmentDrAllItem } from './EquipmentDrAll.item'
import { KoromonCoreItem } from './KoromonCore.item'
import { NatureSpiritsCoreItem } from './NatureSpiritsCore.item'
import { VirusBustersCoreItem } from './VirusBustersCore.item'

import type { ItemType } from '@/Types/Item.type'

export const AllItems: {
  [itemId: string]: ItemType
} = {
  [DigiviceItem.id]: DigiviceItem,

  [EquipmentDrAllItem.id]: EquipmentDrAllItem,

  [KoromonCoreItem.id]: KoromonCoreItem,
  [DorimonCoreItem.id]: DorimonCoreItem,

  [VirusBustersCoreItem.id]: VirusBustersCoreItem,
  [DragonsRoarCoreItem.id]: DragonsRoarCoreItem,
  [NatureSpiritsCoreItem.id]: NatureSpiritsCoreItem
}
