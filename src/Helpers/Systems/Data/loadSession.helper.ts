import type { GameSessionKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

export const loadSession = (
  key: GameSessionKey
): unknown | undefined => {
  const storageKey = getStorageKey(key)
  const data = sessionStorage.getItem(storageKey)

  if (data === null) {
    return
  }

  try {
    const parsedData: unknown = JSON.parse(data)

    return parsedData
  } catch {
    console.warn(`Error loading session: ${storageKey}`)
  }
}
