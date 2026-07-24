import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const updateQuestObjective = ({
  questId,
  objectiveId,
  objectiveValue
}: {
  questId: string
  objectiveId: string
  objectiveValue: number | boolean
}): void => {
  const profile = useProfileStore.getState().profile
  const quest = profile?.quests[questId]

  if (!profile || !quest) {
    return
  }

  setProfileSession({
    ...profile,

    quests: {
      ...profile.quests,

      [questId]: {
        objectives: {
          ...quest.objectives,
          [objectiveId]: objectiveValue
        }
      }
    }
  })
}
