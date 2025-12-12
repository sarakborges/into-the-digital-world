export const InteractionTypes = {
  COMMERCE: `COMMERCE`,
  QUEST: `QUEST`,
  DIALOG: `DIALOG`
}

export type InteractionType = {
  type: (typeof InteractionTypes)[keyof typeof InteractionTypes]
}

export type NpcType = {
  id: string
  name: string

  interactionsPerZone: {
    [zoneName: string]: InteractionType[]
  }
}
