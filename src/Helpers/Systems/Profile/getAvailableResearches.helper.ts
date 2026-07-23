import { getResearchIds } from '@/GameData/Registries/Research.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAvailableResearches = (): string[] => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return []
  }

  return getResearchIds()
    .filter((research) => !profile.researches.includes(research))
    .sort((a, b) => (a > b ? 1 : -1))
}
