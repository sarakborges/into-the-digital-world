import { useDialogStore } from '@/Stores/Dialog.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

export const openDeleteGameDialog = (profileId: number) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()
  const { setDialog } = useDialogStore.getState()

  if (!digivice) {
    return
  }

  setDigivice({
    ...digivice,
    currentDetails: profileId
  })

  setDialog(null)
}
