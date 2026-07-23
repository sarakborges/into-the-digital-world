import { THEMES } from '@/Consts/Themes.const'

export const getThemeGroups = () =>
  Object.entries(THEMES).map(([category, themes]) => ({
    category,
    themes: Object.keys(themes)
  }))
