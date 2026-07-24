import type { SettingsType } from '@/Types/Settings.type'

import { parsePersistedSettings } from '@/Systems/Settings/Settings.schema'
import { readLocalStorageJson } from '@/Systems/Storage/BrowserStorage'

import { DEFAULT_SETTINGS } from '@/Consts/Settings.const'
import { getStorageKey } from '@/Consts/Storage.const'

export const loadSettings = (): SettingsType => ({
  ...DEFAULT_SETTINGS,
  ...parsePersistedSettings(readLocalStorageJson(getStorageKey('settings')))
})
