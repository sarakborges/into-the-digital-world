import type { LanguageId } from '@/Consts/Languages.const'
import type { ThemeId } from '@/Consts/Themes.const'

export type PersistedSettingsType = {
  language: LanguageId
  theme: ThemeId
}

export type SettingsType = PersistedSettingsType & {
  isOpen: boolean
}
