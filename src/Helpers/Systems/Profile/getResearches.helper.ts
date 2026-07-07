import { AllDigimons } from '@/GameData/Digimons'

import type { ProfileType } from '@/Types/Profile.type'

export const getResearches = (profile: ProfileType) =>
  Object.values(profile.researches ?? {}).map((research) => ({
    ...AllDigimons[research]
  }))
