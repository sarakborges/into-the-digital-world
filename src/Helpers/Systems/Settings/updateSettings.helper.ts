import type {
  PersistedSettingsType,
  SettingsType
} from '@/Types/Settings.type'

import { writeLocalStorageJson } from '@/Systems/Storage/BrowserStorage'

import { getStorageKey } from '@/Consts/Storage.const'

import { useSettingsStore } from '@/Stores/Settings.store'

type UpdateSettingsParams = Partial<PersistedSettingsType>

export const updateSettings = ({
  language,
  theme
}: UpdateSettingsParams): void => {
  const { settings, setSettings } = useSettingsStore.getState()

  const updatedSettings: SettingsType = {
    ...settings,
    language: language ?? settings.language,
    theme: theme ?? settings.theme
  }
  const persistedSettings: PersistedSettingsType = {
    language: updatedSettings.language,
    theme: updatedSettings.theme
  }

  setSettings(updatedSettings)

  try {
    writeLocalStorageJson({
      key: getStorageKey('settings'),
      value: persistedSettings
    })
  } catch (error) {
    console.warn(`Error saving settings: ${error}`)
  }
}
