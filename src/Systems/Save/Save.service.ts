import {
  createStoredSave,
  hasValidSaveChecksum
} from '@/Systems/Save/Save.checksum'
import { CURRENT_SAVE_SCHEMA_VERSION } from '@/Systems/Save/Save.constants'
import { migrateSave, needsSaveRewrite } from '@/Systems/Save/Save.migrations'
import { SaveRepository } from '@/Systems/Save/Save.repository'
import { SavePayloadSchema, StoredSaveSchema } from '@/Systems/Save/Save.schema'
import type {
  LoadSaveResult,
  SaveSlotId,
  SaveSlotStatus,
  StoredSave
} from '@/Systems/Save/Save.types'

import type { ProfileType } from '@/Types/Profile.type'

const getErrorMessage = (error: unknown): string => {
  return error instanceof Error ? error.message : String(error)
}

const getRawSlotId = ({
  save,
  fallbackSlotId
}: {
  save: unknown
  fallbackSlotId: SaveSlotId
}): SaveSlotId => {
  if (!save || typeof save !== 'object' || !('slotId' in save)) {
    return fallbackSlotId
  }

  return typeof save.slotId === 'string' && save.slotId
    ? save.slotId
    : fallbackSlotId
}

export class SaveService {
  constructor(private readonly repository = new SaveRepository()) {}

  async save({
    slotId,
    profile
  }: {
    slotId: SaveSlotId
    profile: ProfileType
  }): Promise<StoredSave> {
    const previous = await this.repository.read(slotId)
    const previousSave = previous ? StoredSaveSchema.parse(previous) : undefined
    const now = new Date().toISOString()
    const clonedProfile: unknown = JSON.parse(JSON.stringify(profile))
    const payload = SavePayloadSchema.parse({
      schemaVersion: CURRENT_SAVE_SCHEMA_VERSION,
      slotId,
      createdAt: previousSave?.createdAt ?? now,
      updatedAt: now,
      profile: clonedProfile
    })
    const save = await createStoredSave(payload)

    await this.repository.write(save)

    return save
  }

  async load(slotId: SaveSlotId): Promise<LoadSaveResult> {
    const current = await this.repository.read(slotId)

    if (!current) {
      throw new Error(`Save slot not found: ${slotId}`)
    }

    try {
      const result = await this.prepareSave({
        rawSave: current,
        fallbackSlotId: slotId
      })

      if (result.migrated) {
        await this.repository.replace(result.save)
      }

      return {
        ...result,
        recoveredFromBackup: false
      }
    } catch (currentError) {
      await this.repository.quarantine({
        slotId,
        save: current,
        reason: getErrorMessage(currentError)
      })

      const revisions = await this.repository.readRevisions(slotId)

      for (const revision of revisions) {
        try {
          const result = await this.prepareSave({
            rawSave: revision.save,
            fallbackSlotId: slotId
          })

          await this.repository.replace(result.save)

          return {
            ...result,
            recoveredFromBackup: true
          }
        } catch {
          continue
        }
      }

      throw currentError
    }
  }

  async importUnknown({
    slotId,
    save
  }: {
    slotId: SaveSlotId
    save: unknown
  }): Promise<StoredSave> {
    const prepared = await this.prepareSave({
      rawSave: save,
      fallbackSlotId: slotId
    })

    await this.repository.write(prepared.save)

    return prepared.save
  }

  async list(): Promise<SaveSlotStatus[]> {
    const saves = await this.repository.readAll()
    const statuses: SaveSlotStatus[] = []

    for (const [index, rawSave] of saves.entries()) {
      const fallbackSlotId = `unknown-${index}`
      const slotId = getRawSlotId({ save: rawSave, fallbackSlotId })

      try {
        const result = await this.prepareSave({
          rawSave,
          fallbackSlotId: slotId
        })

        statuses.push({
          slotId: result.save.slotId,
          status: 'valid',
          createdAt: result.save.createdAt,
          updatedAt: result.save.updatedAt
        })
      } catch (error) {
        statuses.push({
          slotId,
          status: 'invalid',
          reason: getErrorMessage(error)
        })
      }
    }

    return statuses
  }

  async delete(slotId: SaveSlotId): Promise<void> {
    await this.repository.delete(slotId)
  }

  async export(slotId: SaveSlotId): Promise<string> {
    const { save } = await this.load(slotId)

    return JSON.stringify(save, null, 2)
  }

  private async prepareSave({
    rawSave,
    fallbackSlotId
  }: {
    rawSave: unknown
    fallbackSlotId: SaveSlotId
  }): Promise<{ save: StoredSave; migrated: boolean }> {
    const migrated = needsSaveRewrite(rawSave)

    if (migrated) {
      const payload = migrateSave({ rawSave, fallbackSlotId })

      return {
        save: await createStoredSave(payload),
        migrated
      }
    }

    const save = StoredSaveSchema.parse(rawSave)

    if (!(await hasValidSaveChecksum(save))) {
      throw new Error('Save checksum does not match its contents.')
    }

    return {
      save,
      migrated
    }
  }
}

export const saveService = new SaveService()
