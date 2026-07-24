import type { AvatarType } from '@/Types/Avatar.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import type { MeaningfulChoices } from '@/GameData/Registries/MeaningfulChoice.registry'
import type { GameLocation } from '@/GameData/Registries/ZoneManifest.registry'

export type ProfileType = {
  id: number
  name: string
  lastSave: string
  avatar?: AvatarType | undefined
  currency?: number | undefined
  currentTitle: string
  currentScene: string | null
  party: Array<number>
  titles: Array<string>
  dungeonsFound: Array<string>
  researchesFound: Array<string>
  researches: Array<string>

  quests: {
    [questId: string]: {
      objectives: {
        [objectiveId: string]: number | boolean
      }
    }
  }

  items: {
    [itemId: string]: number
  }

  currentLocation: GameLocation

  partnerDigimons: {
    [key: string]: PartnerDigimonType
  }

  npcAcquaintances: {
    [key: string]: unknown
  }

  meaningfulChoices: MeaningfulChoices
}
