import { saveSession } from '@/Helpers/saveSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const addNewQuest = (questId: string) => {
  const { profile, setProfile } = useProfileStore.getState()

  const updatedProfile = {
    ...profile!,
    quests: {
      ...profile!.quests,

      [questId]: {
        objectives: {}
      }
    }
  }

  setProfile(updatedProfile)

  saveSession({
    key: 'profile',
    value: updatedProfile
  })
}
