import type { ProfileType } from '@/Types/Profile.type'

export type SaveSlotId = string

export type SaveProfile = ProfileType

export type SavePayload = {
  schemaVersion: number
  slotId: SaveSlotId
  createdAt: string
  updatedAt: string
  profile: SaveProfile
}

export type StoredSave = SavePayload & {
  checksum: string
}

export type SaveRevision = {
  id: string
  slotId: SaveSlotId
  createdAt: string
  save: StoredSave
}

export type QuarantinedSave = {
  id: string
  slotId: SaveSlotId
  createdAt: string
  reason: string
  save: unknown
}

export type SaveSlotStatus =
  | {
      slotId: SaveSlotId
      status: 'valid'
      createdAt: string
      updatedAt: string
    }
  | {
      slotId: SaveSlotId
      status: 'invalid'
      reason: string
    }

export type LoadSaveResult = {
  save: StoredSave
  migrated: boolean
  recoveredFromBackup: boolean
}
