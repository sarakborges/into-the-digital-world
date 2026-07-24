const STORAGE_PREFIX = 'itdw'

export const LOCAL_STORAGE_KEYS = ['settings'] as const
export const GAME_SESSION_KEYS = ['profile', 'dungeon', 'battle'] as const

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[number]
export type GameSessionKey = (typeof GAME_SESSION_KEYS)[number]
export type StorageKey = LocalStorageKey | GameSessionKey

export const getStorageKey = (key: StorageKey): string =>
  `${STORAGE_PREFIX}_${key}`

export const SAVED_PROFILE_IDS_STORAGE_KEY =
  `${STORAGE_PREFIX}_saved_profile_ids`

export const getSavedProfileStorageKey = (profileId: number): string =>
  `${STORAGE_PREFIX}_saved_profile_${profileId}`
