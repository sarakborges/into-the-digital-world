import { THEMES } from '@/Consts/Themes.const'

export const getThemeBackground = (theme?: string) => {
  const availableThemes = {
    ...THEMES.default,
    ...THEMES.crests
  }

  return theme && Object.keys(availableThemes).includes(theme)
    ? theme
    : 'default'
}
