import type { ThemeId } from '@/Consts/Themes.const'
import {
  hasThemeBackground,
  isThemeId
} from '@/Consts/Themes.const'

import { useSettingsStore } from '@/Stores/Settings.store'

export const getThemeBackground = (): ThemeId => {
  const theme = useSettingsStore.getState().settings?.theme

  return theme && isThemeId(theme) && hasThemeBackground(theme)
    ? theme
    : 'default'
}
