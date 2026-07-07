import { THEMES } from '@/Consts/Themes.const'

export const getThemeGroups = () =>
  Object.keys(THEMES).map((category) => ({
    category,
    themes: Object.keys(THEMES[category])
  }))
