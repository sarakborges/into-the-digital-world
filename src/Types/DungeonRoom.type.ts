import type { SpawnableDigimonType } from '@/Types/SpawnableDigimon.type'

type DungeonRoomChoice = {
  name: string
  description: string
  event: () => void
}

type DungeonRoomChoices = Record<string, DungeonRoomChoice>

export type DungeonRoomType = {
  name: string
  description: string
  branchesTo?: Array<string>
  type: 'battle' | 'event'

  encounters?: Array<{
    digimons: Array<SpawnableDigimonType>
  }>

  choices?: DungeonRoomChoices
  completionChoices?: DungeonRoomChoices
}
