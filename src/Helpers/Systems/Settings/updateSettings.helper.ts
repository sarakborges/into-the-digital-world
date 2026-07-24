import type { SettingsType } from '@/Types/Settings.type'

import { saveData } from '@/Helpers/Systems/Data/saveData.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

type UpdateSettingsParams = Partial<
  Pick<SettingsType, 'language' | 'theme'>
>

export const updateSettings = ({
  language,
  theme
}: UpdateSettingsParams): void => {
  const { settings, setSettings } = useSettingsStore.getState()

  if (!settings) {
    return
  }

  const updatedSettings: SettingsType = {
    ...settings,
    language: language ?? settings.language,
    theme: theme ?? settings.theme
  }

  setSettings(updatedSettings)
  saveData({ key: 'settings', value: updatedSettings })
}
