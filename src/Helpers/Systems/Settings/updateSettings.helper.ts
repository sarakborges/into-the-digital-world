import { saveData } from '@/Helpers/Systems/Data/saveData.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

export const updateSettings = ({
  language,
  theme
}: {
  language?: string
  theme?: string
}) => {
  const { settings, setSettings } = useSettingsStore.getState()

  if (!settings) {
    return
  }

  const updatedSettings = {
    ...settings,
    language: language ?? settings.language,
    theme: theme ?? settings.theme
  }

  setSettings(updatedSettings)
  saveData({ key: 'settings', value: updatedSettings })
}
