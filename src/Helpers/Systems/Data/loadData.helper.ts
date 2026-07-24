import type { LocalStorageKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

export const loadData = (key: LocalStorageKey): unknown | undefined => {
  const storageKey = getStorageKey(key)
  const data = localStorage.getItem(storageKey)

  if (data === null) {
    return
  }

  try {
    const parsedData: unknown = JSON.parse(data)

    return parsedData
  } catch {
    console.warn(`Error loading data: ${storageKey}`)
  }
}
