import type { ProfileType } from '@/Types/Profile.type'

import { isQuestDone } from '@/Helpers/Systems/Quests'

export const getQuestGroups = (profile: ProfileType) => {
  const questIds = Object.keys(profile.quests ?? {})

  return {
    notDone: questIds.filter((quest) => !isQuestDone(quest)),
    done: questIds.filter((quest) => !!isQuestDone(quest))
  }
}
