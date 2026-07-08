import type { ProfileType } from '@/Types/Profile.type'

import { AllDigimons } from '@/GameData/Digimons'

export const getResearches = (profile: ProfileType) =>
  Object.values(profile.researches ?? {}).map((research) => ({
    ...AllDigimons[research]
  }))
