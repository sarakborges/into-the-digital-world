import { AvailableResearchesAtJijimon } from '@/GameData/Researches'
import { AllDigimons } from '@/GameData/Digimons'

import type { ProfileType } from '@/Types/Profile.type'

export const getAvailableCompositions = (profile: ProfileType) =>
  Object.keys(AvailableResearchesAtJijimon)
    .filter((research) => profile.researches?.includes(research))
    .map((research) => ({
      ...AvailableResearchesAtJijimon[research],
      baseDigimon: AllDigimons[research]
    }))
    .sort((a, b) => (a > b ? 1 : -1))
