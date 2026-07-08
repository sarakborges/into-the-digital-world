import { AllDigimons } from '@/GameData/Digimons'

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

  return Object.values(profile.researches ?? {}).map((research) => ({
    id: research,
    name: AllDigimons[Number(research)].name,
    portrait: AllDigimons[Number(research)].portrait
  }))
}
