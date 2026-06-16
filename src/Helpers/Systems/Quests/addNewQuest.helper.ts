import { saveSession } from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'

export const addNewQuest = (questId: string) => {
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

  setProfile(updatedProfile)

  saveSession({
    key: 'profile',
    value: updatedProfile
  })
}
