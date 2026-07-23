import type { SavePayload, StoredSave } from '@/Systems/Save/Save.types'

const normalizeValue = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map(normalizeValue)
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey))
        .map(([key, childValue]) => [key, normalizeValue(childValue)])
    )
  }

  return value
}

export const calculateSaveChecksum = async (
  payload: SavePayload
): Promise<string> => {
  const normalizedPayload = normalizeValue(payload)
  const serializedPayload = JSON.stringify(normalizedPayload)
  const bytes = new TextEncoder().encode(serializedPayload)
  const digest = await crypto.subtle.digest('SHA-256', bytes)

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export const createStoredSave = async (
  payload: SavePayload
): Promise<StoredSave> => {
  return {
    ...payload,
    checksum: await calculateSaveChecksum(payload)
  }
}

export const hasValidSaveChecksum = async (
  save: StoredSave
): Promise<boolean> => {
  const { checksum, ...payload } = save

  return checksum === (await calculateSaveChecksum(payload))
}
