type StorageWriteParams = {
  key: string
  value: unknown
}

const readStorageJson = ({
  storage,
  key
}: {
  storage: Storage
  key: string
}): unknown | undefined => {
  try {
    const storedValue = storage.getItem(key)

    if (storedValue === null) {
      return
    }

    const parsedValue: unknown = JSON.parse(storedValue)

    return parsedValue
  } catch (error) {
    console.warn(`Error reading browser storage ${key}: ${error}`)
    return
  }
}

const writeStorageJson = ({
  storage,
  key,
  value
}: StorageWriteParams & { storage: Storage }): void => {
  const serializedValue = JSON.stringify(value)

  if (serializedValue === undefined) {
    throw new TypeError(`Unable to serialize browser storage value: ${key}`)
  }

  storage.setItem(key, serializedValue)
}

export const readLocalStorageJson = (key: string): unknown | undefined =>
  readStorageJson({ storage: localStorage, key })

export const writeLocalStorageJson = ({
  key,
  value
}: StorageWriteParams): void =>
  writeStorageJson({ storage: localStorage, key, value })

export const removeLocalStorageValue = (key: string): void => {
  localStorage.removeItem(key)
}

export const readSessionStorageJson = (key: string): unknown | undefined =>
  readStorageJson({ storage: sessionStorage, key })

export const writeSessionStorageJson = ({
  key,
  value
}: StorageWriteParams): void =>
  writeStorageJson({ storage: sessionStorage, key, value })

export const removeSessionStorageValue = (key: string): void => {
  sessionStorage.removeItem(key)
}
