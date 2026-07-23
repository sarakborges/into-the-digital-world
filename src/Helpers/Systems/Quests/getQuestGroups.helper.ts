import { isQuestDone } from '@/Helpers/Systems/Quests/isQuestDone.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const getQuestGroups = () => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return { notDone: [], done: [] }
  }

  const questIds = Object.keys(profile.quests ?? {})

  return {
    notDone: questIds.filter((quest) => !isQuestDone(quest)),
    done: questIds.filter((quest) => !!isQuestDone(quest))
  }
}
