import type { DigiviceType } from '@/Types/Digivice.type'

import { useDigiviceStore } from '@/Stores/Digivice.store'

export const setCurrentDetails = (value: DigiviceType['currentDetails']) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()

  if (!digivice) {
    return
  }

  setDigivice({
    ...digivice,
    currentDetails: value
  })
}
