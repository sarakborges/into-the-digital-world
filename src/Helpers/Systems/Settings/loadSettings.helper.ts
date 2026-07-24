import type { SettingsType } from '@/Types/Settings.type'

import { parsePersistedSettings } from '@/Systems/Settings/Settings.schema'

import { loadData } from '@/Helpers/Systems/Data/loadData.helper'

import { DEFAULT_SETTINGS } from '@/Consts/Settings.const'

export const loadSettings = (): SettingsType => ({
  ...DEFAULT_SETTINGS,
  ...parsePersistedSettings(loadData('settings'))
})
