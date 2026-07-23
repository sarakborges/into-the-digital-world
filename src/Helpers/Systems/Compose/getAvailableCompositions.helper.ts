import type { ProfileType } from '@/Types/Profile.type'

import { getDigimon } from '@/GameData/Registries/Digimon.registry'
import {
  getResearch,
  getResearchIdsAvailableAt
} from '@/GameData/Registries/Research.registry'

export const getAvailableCompositions = (profile: ProfileType) =>
  getResearchIdsAvailableAt('jijimon')
    .filter((researchId) => profile.researches?.includes(researchId))
    .map((researchId) => ({
      ...getResearch(researchId),
      baseDigimon: getDigimon(researchId)
    }))
    .sort((a, b) => a.baseDigimon.name.localeCompare(b.baseDigimon.name))
