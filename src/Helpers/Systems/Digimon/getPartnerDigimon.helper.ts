import type { PartnerDigimonType } from '@/Types/PartnerDigimon.type'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const getPartnerDigimon = (): PartnerDigimonType | undefined => {
  const { profile } = useProfileStore.getState()
  const { digivice } = useDigiviceStore.getState()

  if (!profile || !digivice?.currentDetails) {
    return undefined
  }

  return profile.partnerDigimons[digivice.currentDetails] as
    PartnerDigimonType | undefined
}
