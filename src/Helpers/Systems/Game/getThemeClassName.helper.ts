import { THEMES } from '@/Consts/Themes.const'

export const getThemeClassName = (theme: string | undefined): string => {
  const allThemes = {
    ...THEMES.default,
    ...THEMES.crests,
    ...THEMES.families,
    ...THEMES.other
  }

  if (theme && Object.keys(allThemes).includes(theme)) {
    return theme
  }

  return 'default'
}
