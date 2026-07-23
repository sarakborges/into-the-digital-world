import type { SpawnableDigimonType } from '@/Types/SpawnableDigimon.type'

export type DungeonRoomType = {
  name: string
  description: string
  branchesTo?: Array<string>
  type: 'battle' | 'event'

  encounters?: Array<{
    digimons: Array<SpawnableDigimonType>
  }>

  choices?: {
    [eventId: string]: {
      name: string
      description: string
      event: () => void
    }
  }
}
