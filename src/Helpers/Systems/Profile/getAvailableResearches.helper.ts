import { AllResearches } from '@/GameData/Researches'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAvailableResearches = (): string[] => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return []
  }

  return Object.keys(AllResearches)
    .filter((research) => !profile.researches.includes(research))
    .sort((a, b) => (a > b ? 1 : -1))
}
