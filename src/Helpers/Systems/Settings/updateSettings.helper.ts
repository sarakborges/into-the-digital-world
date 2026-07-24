import type {
  PersistedSettingsType,
  SettingsType
} from '@/Types/Settings.type'

import { saveData } from '@/Helpers/Systems/Data/saveData.helper'

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
  saveData({ key: 'settings', value: persistedSettings })
}
