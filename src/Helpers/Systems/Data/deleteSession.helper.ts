import type { GameSessionKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

import { removeSessionStorageValue } from '@/Systems/Storage/BrowserStorage'

export const deleteSession = (key: GameSessionKey): void => {
  const storageKey = getStorageKey(key)

  try {
    removeSessionStorageValue(storageKey)
  } catch (error) {
    console.warn(`Error deleting session ${storageKey}: ${error}`)
  }
}
