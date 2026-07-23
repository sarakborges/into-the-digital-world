export const SAVE_DATABASE_NAME = 'into-the-digital-world'
export const SAVE_DATABASE_VERSION = 1
export const CURRENT_SAVE_SCHEMA_VERSION = 1
export const MAX_SAVE_REVISIONS = 3

export const LEGACY_SAVE_KEYS = ['into-the-digital-world-save'] as const

export const SAVE_STORES = {
  saves: 'saves',
  revisions: 'revisions',
  quarantine: 'quarantine',
  metadata: 'metadata'
} as const
