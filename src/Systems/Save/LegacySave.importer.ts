import { LEGACY_SAVE_KEYS } from '@/Systems/Save/Save.constants'
import { SaveRepository } from '@/Systems/Save/Save.repository'
import { SaveService } from '@/Systems/Save/Save.service'
import type { SaveSlotId } from '@/Systems/Save/Save.types'

export type LegacySaveCandidate = {
  slotId: SaveSlotId
  save: unknown
}

export type LegacySaveExtractor = (storage: Storage) => LegacySaveCandidate[]

const LEGACY_IMPORT_METADATA_KEY = 'legacy-local-storage-imported'

const parseStoredJson = (value: string | null): unknown | undefined => {
  if (!value) {
    return undefined
  }

  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}

const extractLegacyProfiles: LegacySaveExtractor = (storage) => {
  const profileIds = parseStoredJson(storage.getItem('itdw_profiles'))

  if (!Array.isArray(profileIds)) {
    return []
  }

  const candidates: LegacySaveCandidate[] = []

  for (const profileId of profileIds) {
    if (typeof profileId !== 'number' && typeof profileId !== 'string') {
      continue
    }

    const profile = parseStoredJson(storage.getItem(`itdw_profile${profileId}`))

    if (profile) {
      candidates.push({
        slotId: String(profileId),
        save: profile
      })
    }
  }

  return candidates
}

const extractKnownLegacyKeys: LegacySaveExtractor = (storage) => {
  const candidates: LegacySaveCandidate[] = []

  for (const key of LEGACY_SAVE_KEYS) {
    const save = parseStoredJson(storage.getItem(key))

    if (save) {
      candidates.push({
        slotId: key,
        save
      })
    }
  }

  return candidates
}

export const importLegacyLocalStorageSaves = async ({
  storage = localStorage,
  extractors = [extractLegacyProfiles, extractKnownLegacyKeys],
  repository = new SaveRepository()
}: {
  storage?: Storage
  extractors?: LegacySaveExtractor[]
  repository?: SaveRepository
} = {}): Promise<number> => {
  const wasImported = await repository.getMetadata<boolean>(
    LEGACY_IMPORT_METADATA_KEY
  )

  if (wasImported) {
    return 0
  }

  const saveService = new SaveService(repository)
  let importedCount = 0

  for (const extractor of extractors) {
    for (const candidate of extractor(storage)) {
      try {
        const existingSave = await repository.read(candidate.slotId)

        if (existingSave) {
          continue
        }

        await saveService.importUnknown(candidate)
        importedCount += 1
      } catch {
        continue
      }
    }
  }

  await repository.setMetadata({
    key: LEGACY_IMPORT_METADATA_KEY,
    value: true
  })

  return importedCount
}
