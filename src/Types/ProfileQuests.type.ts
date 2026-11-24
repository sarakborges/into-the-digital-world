import type { QuestType } from '@/Types/Quest.type'

export type ProfileQuestsType = {
  [key: string]: QuestType & {
    status: 'inProgress' | 'completed'
    progress: {}
  }
}
