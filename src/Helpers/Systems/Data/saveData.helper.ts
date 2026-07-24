import type { LocalStorageKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

export const saveData = ({
  key,
  value
}: {
  key: LocalStorageKey
  value: unknown
}): void => {
  const storageKey = getStorageKey(key)

  try {
    localStorage.setItem(storageKey, JSON.stringify(value))
  } catch {
    console.warn(`Error saving data: ${storageKey}`)
    console.warn(value)
  }
}
