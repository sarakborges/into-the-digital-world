import type { AvatarType } from '@/Types/Avatar.type'
import type { DialogType } from '@/Types/Dialog.type'
import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

export type ProfileType = {
  id?: number
  name?: string
  avatar?: AvatarType
  lastSave: Date

  currentTitle: string
  currentScene: React.FC | null
  currentDialog: DialogType | null

  titles: Array<string>
  npcAcquaintances: Array<string>
  party?: Array<number>
  researchesFound?: Array<string>
  researchesConcluded?: Array<string>

  quests?: {
    [questId: string]: {
      objectives: {
        [objectiveId: string]: number | boolean
      }
    }
  }

  items?: {
    [itemId: string]: number
  }

  partnerDigimons?: {
    [key: string]: PartnerDigimonType
  }

  meaningfulChoices?: {
    [key: string]: string
  }
}
