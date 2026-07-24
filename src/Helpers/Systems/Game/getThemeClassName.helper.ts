import type { ThemeId } from '@/Consts/Themes.const'
import { isThemeId } from '@/Consts/Themes.const'

export const getThemeClassName = (
  theme: string | undefined
): ThemeId => (theme && isThemeId(theme) ? theme : 'default')
