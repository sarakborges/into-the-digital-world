export type DungeonRoomType = {
  name: string

  choices: {
    [eventId: string]: {
      name: string
      description: string
      event: () => void
    }
  }
}
