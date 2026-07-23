import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const addNewQuest = ({
  questId,
  ignoreSession
}: {
  questId: string
  ignoreSession?: boolean
}) => {
  const { profile, setProfile } = useProfileStore.getState()

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

  if (ignoreSession) {
    setProfile(updatedProfile)
    return
  }

  saveSession(updatedProfile)
}
