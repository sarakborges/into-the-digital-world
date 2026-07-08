import type { ProfileType } from '@/Types/Profile.type'

import { AllDigimons } from '@/GameData/Digimons'
import { AvailableResearchesAtJijimon } from '@/GameData/Researches'

export const getAvailableCompositions = (profile: ProfileType) =>
  Object.keys(AvailableResearchesAtJijimon)
    .filter((research) => profile.researches?.includes(research))
    .map((research) => ({
      ...AvailableResearchesAtJijimon[research],
      baseDigimon: AllDigimons[research]
    }))
    .sort((a, b) => (a > b ? 1 : -1))
