import { useDigiviceStore } from '@/Stores/Digivice.store'

export const setCurrentDetails = (value: string) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()

  if (!digivice) {
    return
  }

  setDigivice({
    ...digivice,
    currentDetails: value
  })
}
