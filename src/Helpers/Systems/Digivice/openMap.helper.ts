import { useDigiviceStore } from '@/Stores/Digivice.store'

export const openMap = () => {
  const { setDigivice } = useDigiviceStore.getState()

  setDigivice({ isOpen: true, currentApp: 'map' })
}
