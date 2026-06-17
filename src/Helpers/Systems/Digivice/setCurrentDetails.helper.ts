import { useDigiviceStore } from '@/Stores/Digivice.store'

export const setCurrentDetails = (value: string | undefined) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()

  if (!digivice) {
    return
  }

  setDigivice({
    ...digivice,
    currentDetails: value
  })
}
