import { getDigimon } from '@/GameData/Registries/Digimon.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getResearches = (): Array<{
  id: string
  name: string
  portrait: string
}> => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return []
  }

  return Object.values(profile.researches ?? {}).map((researchId) => {
    const digimon = getDigimon(researchId)

    return {
      id: researchId,
      name: digimon.name,
      portrait: digimon.portrait
    }
  })
}
