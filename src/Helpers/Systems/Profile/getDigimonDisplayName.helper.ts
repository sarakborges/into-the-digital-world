import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { useProfileStore } from '@/Stores/Profile.store'

export const getDigimonDisplayName = ({
  digimonId,
  baseDigimon
}: {
  digimonId: number
  baseDigimon: BaseDigimonType | undefined
}): string => {
  const { profile } = useProfileStore.getState()

  if (!baseDigimon || !profile) {
    return ''
  }

  return profile.partnerDigimons[digimonId]?.name || baseDigimon.name
}
