export const ItemTypes = {
  CONSUMABLE: `CONSUMABLE`,
  EVOLUTION: `EVOLUTION`,
  QUEST: `QUEST`,
  KEY: `KEY`,
  EQUIPMENT: `EQUIPMENT`
}

export type ItemTypes = (typeof ItemTypes)[keyof typeof ItemTypes]

export type ItemType = {
  id: string
  name: string
  description: string
  type: ItemTypes
}
