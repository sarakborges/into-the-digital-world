export const LOCAL_STORAGE_KEYS = ['settings'] as const
export const GAME_SESSION_KEYS = ['profile', 'dungeon', 'battle'] as const

export type LocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[number]
export type GameSessionKey = (typeof GAME_SESSION_KEYS)[number]
export type StorageKey = LocalStorageKey | GameSessionKey

export const getStorageKey = (key: StorageKey): string => `itdw_${key}`
