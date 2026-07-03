import type { SpawnableDigimonType } from '@/Types/SpawnableDigimon.type'

export type DungeonRoomType = {
  name: string
  description: string
  branchesTo?: Array<string>
  type: 'battle' | 'event'

  spawns?: {
    min: number
    max: number

    digimons: {
      [digimonId: string]: SpawnableDigimonType
    }
  }

  choices?: {
    [eventId: string]: {
      name: string
      description: string
      event: () => void
    }
  }
}
