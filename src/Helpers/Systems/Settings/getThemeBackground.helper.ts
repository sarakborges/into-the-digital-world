import type { ThemeId } from '@/Consts/Themes.const'
import { hasThemeBackground } from '@/Consts/Themes.const'

import { useSettingsStore } from '@/Stores/Settings.store'

export const getThemeBackground = (): ThemeId => {
  const theme = useSettingsStore.getState().settings.theme

  return hasThemeBackground(theme) ? theme : 'default'
}
