import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

export const addNewQuest = ({ questId }: { questId: string }): void => {
  setProfileSession((profile) => ({
    ...profile,
    quests: {
      ...profile.quests,

      [questId]: {
        objectives: {}
      }
    }
  }))
}
