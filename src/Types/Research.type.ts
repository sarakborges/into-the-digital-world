export type ResearchType = {
  cost: {
    [itemId: string]: number
  }

  requiredItems?: {
    [itemId: string]: number
  }

  optionalItems?: {
    [itemId: string]: number
  }
}
