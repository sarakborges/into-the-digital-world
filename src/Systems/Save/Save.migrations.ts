import { CURRENT_SAVE_SCHEMA_VERSION } from '@/Systems/Save/Save.constants'
import { SavePayloadSchema } from '@/Systems/Save/Save.schema'
import type { SavePayload, SaveSlotId } from '@/Systems/Save/Save.types'

import type { ProfileType } from '@/Types/Profile.type'

type MutableRecord = Record<string, unknown>

const isRecord = (value: unknown): value is MutableRecord => {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

const cloneUnknown = (value: unknown): unknown => {
  return JSON.parse(JSON.stringify(value))
}

const getString = ({
  value,
  fallback
}: {
  value: unknown
  fallback: string
}): string => {
  return typeof value === 'string' && value ? value : fallback
}

const getInteger = ({
  value,
  fallback = 0
}: {
  value: unknown
  fallback?: number
}): number => {
  return typeof value === 'number' && Number.isInteger(value) ? value : fallback
}

const normalizeLocation = (profile: MutableRecord): void => {
  const currentLocation = isRecord(profile['currentLocation'])
    ? profile['currentLocation']
    : undefined
  const currentZone = isRecord(profile['currentZone'])
    ? profile['currentZone']
    : undefined
  const source = currentLocation ?? currentZone

  if (!source) {
    return
  }

  profile['currentLocation'] = {
    zone: getString({
      value: source['zone'] ?? source['zoneId'] ?? source['id'],
      fallback: ''
    }),
    map: getString({
      value: source['map'] ?? source['mapId'],
      fallback: ''
    }),
    x: getInteger({ value: source['x'] }),
    y: getInteger({ value: source['y'] })
  }

  delete profile['currentZone']
}

const normalizeSave = ({
  rawSave,
  fallbackSlotId
}: {
  rawSave: unknown
  fallbackSlotId: SaveSlotId
}): MutableRecord => {
  const source = isRecord(rawSave) ? cloneUnknown(rawSave) : {}

  if (!isRecord(source)) {
    throw new Error('Save data must be an object.')
  }

  const rawProfile = isRecord(source['profile']) ? source['profile'] : source
  const profile = cloneUnknown(rawProfile)

  if (!isRecord(profile)) {
    throw new Error('Save profile must be an object.')
  }

  normalizeLocation(profile)

  const now = new Date().toISOString()
  const updatedAt = getString({ value: source['updatedAt'], fallback: now })

  profile['lastSave'] = getString({
    value: profile['lastSave'],
    fallback: updatedAt
  })

  return {
    schemaVersion: getInteger({ value: source['schemaVersion'] }),
    slotId: getString({ value: source['slotId'], fallback: fallbackSlotId }),
    createdAt: getString({
      value: source['createdAt'],
      fallback: now
    }),
    updatedAt,
    profile
  }
}

const migrateFromVersionZero = (save: MutableRecord): MutableRecord => {
  if (!isRecord(save['profile'])) {
    throw new Error('Save profile must be an object.')
  }

  normalizeLocation(save['profile'])

  return {
    ...save,
    schemaVersion: 1
  }
}

const migrations: Record<number, (save: MutableRecord) => MutableRecord> = {
  0: migrateFromVersionZero
}

export const needsSaveRewrite = (rawSave: unknown): boolean => {
  if (!isRecord(rawSave)) {
    return true
  }

  return (
    rawSave['schemaVersion'] !== CURRENT_SAVE_SCHEMA_VERSION ||
    typeof rawSave['checksum'] !== 'string'
  )
}

export const migrateSave = ({
  rawSave,
  fallbackSlotId
}: {
  rawSave: unknown
  fallbackSlotId: SaveSlotId
}): SavePayload => {
  let save = normalizeSave({ rawSave, fallbackSlotId })
  let schemaVersion = getInteger({ value: save['schemaVersion'] })

  while (schemaVersion < CURRENT_SAVE_SCHEMA_VERSION) {
    const migration = migrations[schemaVersion]

    if (!migration) {
      throw new Error(`Missing save migration for schema ${schemaVersion}.`)
    }

    save = migration(save)
    schemaVersion = getInteger({ value: save['schemaVersion'] })
  }

  if (schemaVersion !== CURRENT_SAVE_SCHEMA_VERSION) {
    throw new Error(`Unsupported save schema version: ${schemaVersion}.`)
  }

  return SavePayloadSchema.parse(save)
}

export const migrateProfile = (rawProfile: unknown): ProfileType => {
  return migrateSave({
    rawSave: rawProfile,
    fallbackSlotId: 'session'
  }).profile
}
