import type { DigiviceType } from '@/Types/Digivice.type'

import { useDigiviceStore } from '@/Stores/Digivice.store'

type UpdateDigiviceParams = {
  isOpen?: boolean | undefined
  currentApp?: DigiviceType['currentApp']
  currentDetails?: DigiviceType['currentDetails']
  equipmentSlot?: DigiviceType['equipmentSlot']
}

export const updateDigivice = (updates: UpdateDigiviceParams): void => {
  const { digivice, setDigivice } = useDigiviceStore.getState()

  if (!digivice) {
    return
  }

  const updatedDigivice = { ...digivice }

  if ('isOpen' in updates && updates.isOpen !== undefined) {
    updatedDigivice.isOpen = updates.isOpen
  }

  if ('currentApp' in updates) {
    if (updates.currentApp === undefined) {
      delete updatedDigivice.currentApp
    } else {
      updatedDigivice.currentApp = updates.currentApp
    }
  }

  if ('currentDetails' in updates) {
    if (updates.currentDetails === undefined) {
      delete updatedDigivice.currentDetails
    } else {
      updatedDigivice.currentDetails = updates.currentDetails
    }
  }

  if ('equipmentSlot' in updates) {
    if (updates.equipmentSlot === undefined) {
      delete updatedDigivice.equipmentSlot
    } else {
      updatedDigivice.equipmentSlot = updates.equipmentSlot
    }
  }

  setDigivice(updatedDigivice)
}
