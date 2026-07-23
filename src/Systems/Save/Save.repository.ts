import { MAX_SAVE_REVISIONS, SAVE_STORES } from '@/Systems/Save/Save.constants'
import {
  getSaveDatabase,
  requestToPromise,
  waitForTransaction
} from '@/Systems/Save/Save.database'
import type {
  QuarantinedSave,
  SaveRevision,
  SaveSlotId,
  StoredSave
} from '@/Systems/Save/Save.types'

const createRecordId = (): string => {
  return crypto.randomUUID()
}

export class SaveRepository {
  async read(slotId: SaveSlotId): Promise<unknown | undefined> {
    const database = await getSaveDatabase()

    return requestToPromise(
      database
        .transaction(SAVE_STORES.saves, 'readonly')
        .objectStore(SAVE_STORES.saves)
        .get(slotId)
    )
  }

  async readAll(): Promise<unknown[]> {
    const database = await getSaveDatabase()

    return requestToPromise(
      database
        .transaction(SAVE_STORES.saves, 'readonly')
        .objectStore(SAVE_STORES.saves)
        .getAll()
    )
  }

  async readRevisions(slotId: SaveSlotId): Promise<SaveRevision[]> {
    const database = await getSaveDatabase()
    const transaction = database.transaction(SAVE_STORES.revisions, 'readonly')
    const revisions = await requestToPromise(
      transaction
        .objectStore(SAVE_STORES.revisions)
        .index('by-slot')
        .getAll(slotId)
    )

    return revisions.sort((left, right) =>
      right.createdAt.localeCompare(left.createdAt)
    )
  }

  async write(save: StoredSave): Promise<void> {
    const database = await getSaveDatabase()
    const transaction = database.transaction(
      [SAVE_STORES.saves, SAVE_STORES.revisions],
      'readwrite'
    )
    const saves = transaction.objectStore(SAVE_STORES.saves)
    const revisions = transaction.objectStore(SAVE_STORES.revisions)
    const previous = await requestToPromise(saves.get(save.slotId))

    if (previous) {
      const revision: SaveRevision = {
        id: createRecordId(),
        slotId: save.slotId,
        createdAt: new Date().toISOString(),
        save: previous
      }

      revisions.put(revision)
    }

    saves.put(save)
    await waitForTransaction(transaction)
    await this.pruneRevisions(save.slotId)
  }

  async replace(save: StoredSave): Promise<void> {
    const database = await getSaveDatabase()
    const transaction = database.transaction(SAVE_STORES.saves, 'readwrite')

    transaction.objectStore(SAVE_STORES.saves).put(save)
    await waitForTransaction(transaction)
  }

  async delete(slotId: SaveSlotId): Promise<void> {
    const revisions = await this.readRevisions(slotId)
    const database = await getSaveDatabase()
    const transaction = database.transaction(
      [SAVE_STORES.saves, SAVE_STORES.revisions],
      'readwrite'
    )

    transaction.objectStore(SAVE_STORES.saves).delete(slotId)

    for (const revision of revisions) {
      transaction.objectStore(SAVE_STORES.revisions).delete(revision.id)
    }

    await waitForTransaction(transaction)
  }

  async quarantine({
    slotId,
    save,
    reason
  }: {
    slotId: SaveSlotId
    save: unknown
    reason: string
  }): Promise<void> {
    const database = await getSaveDatabase()
    const value: QuarantinedSave = {
      id: createRecordId(),
      slotId,
      createdAt: new Date().toISOString(),
      reason,
      save
    }
    const transaction = database.transaction(
      [SAVE_STORES.saves, SAVE_STORES.quarantine],
      'readwrite'
    )

    transaction.objectStore(SAVE_STORES.quarantine).put(value)
    transaction.objectStore(SAVE_STORES.saves).delete(slotId)
    await waitForTransaction(transaction)
  }

  async getMetadata<Value>(key: string): Promise<Value | undefined> {
    const database = await getSaveDatabase()

    return requestToPromise(
      database
        .transaction(SAVE_STORES.metadata, 'readonly')
        .objectStore(SAVE_STORES.metadata)
        .get(key)
    )
  }

  async setMetadata({
    key,
    value
  }: {
    key: string
    value: unknown
  }): Promise<void> {
    const database = await getSaveDatabase()
    const transaction = database.transaction(SAVE_STORES.metadata, 'readwrite')

    transaction.objectStore(SAVE_STORES.metadata).put(value, key)
    await waitForTransaction(transaction)
  }

  private async pruneRevisions(slotId: SaveSlotId): Promise<void> {
    const revisions = await this.readRevisions(slotId)
    const staleRevisions = revisions.slice(MAX_SAVE_REVISIONS)

    if (!staleRevisions.length) {
      return
    }

    const database = await getSaveDatabase()
    const transaction = database.transaction(SAVE_STORES.revisions, 'readwrite')
    const revisionStore = transaction.objectStore(SAVE_STORES.revisions)

    for (const revision of staleRevisions) {
      revisionStore.delete(revision.id)
    }

    await waitForTransaction(transaction)
  }
}
