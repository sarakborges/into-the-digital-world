import { THEMES } from '@/Consts/Themes.const'

export const getThemeClassName = (theme: string | undefined): string => {
  const allThemes = [...THEMES.default, ...THEMES.crests, ...THEMES.families]

  if (theme && allThemes.includes(theme)) {
    return theme
  }

  return 'default'
}
