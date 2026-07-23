import {
  SAVE_DATABASE_NAME,
  SAVE_DATABASE_VERSION,
  SAVE_STORES
} from '@/Systems/Save/Save.constants'

let databasePromise: Promise<IDBDatabase> | undefined

const createDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(SAVE_DATABASE_NAME, SAVE_DATABASE_VERSION)

    request.onupgradeneeded = () => {
      const database = request.result

      if (!database.objectStoreNames.contains(SAVE_STORES.saves)) {
        database.createObjectStore(SAVE_STORES.saves, {
          keyPath: 'slotId'
        })
      }

      if (!database.objectStoreNames.contains(SAVE_STORES.revisions)) {
        const revisions = database.createObjectStore(SAVE_STORES.revisions, {
          keyPath: 'id'
        })
        revisions.createIndex('by-slot', 'slotId')
      }

      if (!database.objectStoreNames.contains(SAVE_STORES.quarantine)) {
        const quarantine = database.createObjectStore(SAVE_STORES.quarantine, {
          keyPath: 'id'
        })
        quarantine.createIndex('by-slot', 'slotId')
      }

      if (!database.objectStoreNames.contains(SAVE_STORES.metadata)) {
        database.createObjectStore(SAVE_STORES.metadata)
      }
    }

    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onerror = () => {
      reject(request.error ?? new Error('Could not open the save database.'))
    }
  })
}

export const getSaveDatabase = (): Promise<IDBDatabase> => {
  databasePromise ??= createDatabase()

  return databasePromise
}

export const requestToPromise = <Value>(
  request: IDBRequest<Value>
): Promise<Value> => {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onerror = () => {
      reject(request.error ?? new Error('IndexedDB request failed.'))
    }
  })
}

export const waitForTransaction = (
  transaction: IDBTransaction
): Promise<void> => {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => {
      resolve()
    }

    transaction.onabort = () => {
      reject(transaction.error ?? new Error('IndexedDB transaction aborted.'))
    }

    transaction.onerror = () => {
      reject(transaction.error ?? new Error('IndexedDB transaction failed.'))
    }
  })
}
