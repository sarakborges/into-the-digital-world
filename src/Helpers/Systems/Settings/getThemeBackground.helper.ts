import { THEMES } from '@/Consts/Themes.const'

import { useSettingsStore } from '@/Stores/Settings.store'

export const getThemeBackground = (): string => {
  const theme = useSettingsStore.getState().settings?.theme

  const availableThemes = {
    ...THEMES.default,
    ...THEMES.crests
  }

  return theme && Object.keys(availableThemes).includes(theme)
    ? theme
    : 'default'
}
