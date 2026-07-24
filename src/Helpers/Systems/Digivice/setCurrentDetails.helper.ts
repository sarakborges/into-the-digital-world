import type { DigiviceType } from '@/Types/Digivice.type'

import { useDigiviceStore } from '@/Stores/Digivice.store'

export const setCurrentDetails = (value: DigiviceType['currentDetails']) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()

  if (!digivice) {
    return
  }

  const updatedDigivice = { ...digivice }

  if (value === undefined) {
    delete updatedDigivice.currentDetails
  } else {
    updatedDigivice.currentDetails = value
  }

  setDigivice(updatedDigivice)
}
