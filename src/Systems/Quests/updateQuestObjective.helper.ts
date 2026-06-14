import { saveSession } from '@/Systems/Profile/saveSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const updateQuestObjective = ({
  questId,
  objectiveId,
  objectiveValue
}: {
  questId: string
  objectiveId: string
  objectiveValue: number | boolean
}) => {
  const { profile, setProfile } = useProfileStore.getState()

  const updatedProfile = {
    ...profile!,

    quests: {
      ...profile!.quests,

      [questId]: {
        objectives: {
          ...profile!.quests[questId].objectives,
          [objectiveId]: objectiveValue
        }
      }
    }
  }

  setProfile(updatedProfile)

  saveSession({
    key: 'profile',
    value: updatedProfile
  })
}
