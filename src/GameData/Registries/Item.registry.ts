import type { ItemType } from '@/Types/Item.type'

import { DigiviceItem } from '@/GameData/Items/Digivice.item'
import { DorimonCoreItem } from '@/GameData/Items/DorimonCore.item'
import { DragonsRoarCoreItem } from '@/GameData/Items/DragonsRoarCore.item'
import { EquipmentDrAllItem } from '@/GameData/Items/EquipmentDrAll.item'
import { KoromonCoreItem } from '@/GameData/Items/KoromonCore.item'
import { NatureSpiritsCoreItem } from '@/GameData/Items/NatureSpiritsCore.item'
import { VirusBustersCoreItem } from '@/GameData/Items/VirusBustersCore.item'

const ItemRegistry = {
  [DigiviceItem.id]: DigiviceItem,
  [EquipmentDrAllItem.id]: EquipmentDrAllItem,
  [KoromonCoreItem.id]: KoromonCoreItem,
  [DorimonCoreItem.id]: DorimonCoreItem,
  [VirusBustersCoreItem.id]: VirusBustersCoreItem,
  [DragonsRoarCoreItem.id]: DragonsRoarCoreItem,
  [NatureSpiritsCoreItem.id]: NatureSpiritsCoreItem
} satisfies Record<string, ItemType>

export type ItemId = Extract<keyof typeof ItemRegistry, string>

export const isItemId = (itemId: string): itemId is ItemId => {
  return itemId in ItemRegistry
}

export const findItem = (itemId: string): ItemType | undefined => {
  return isItemId(itemId) ? ItemRegistry[itemId] : undefined
}

export const getItem = (itemId: string): ItemType => {
  const item = findItem(itemId)

  if (!item) {
    throw new Error(`Unknown item: ${itemId}`)
  }

  return item
}

export const getItemIds = (): ItemId[] => {
  return Object.keys(ItemRegistry).filter(isItemId)
}
