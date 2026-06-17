import { saveSession } from '@/Helpers/Systems/Data'

import { useProfileStore } from '@/Stores/Profile.store'

export const addNewQuest = (questId: string) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const updatedProfile = {
    ...profile,
    quests: {
      ...profile.quests,

      [questId]: {
        objectives: {}
      }
    }
  }

  saveSession(updatedProfile)
}
