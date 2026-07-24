import type { LanguageId } from '@/Consts/Languages.const'
import type { ThemeId } from '@/Consts/Themes.const'

export type SettingsType = {
  isOpen: boolean
  theme: ThemeId
  language: LanguageId
}
