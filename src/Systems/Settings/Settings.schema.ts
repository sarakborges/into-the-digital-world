import { z } from 'zod'

import type { PersistedSettingsType } from '@/Types/Settings.type'

import { isLanguageId } from '@/Consts/Languages.const'
import { DEFAULT_SETTINGS } from '@/Consts/Settings.const'
import { isThemeId } from '@/Consts/Themes.const'

const StoredSettingsSchema = z.object({
  language: z.unknown().optional(),
  theme: z.unknown().optional()
})

export const parsePersistedSettings = (
  value: unknown
): PersistedSettingsType => {
  const storedSettings = StoredSettingsSchema.safeParse(value)

  if (!storedSettings.success) {
    return {
      language: DEFAULT_SETTINGS.language,
      theme: DEFAULT_SETTINGS.theme
    }
  }

  const { language, theme } = storedSettings.data

  return {
    language:
      typeof language === 'string' && isLanguageId(language)
        ? language
        : DEFAULT_SETTINGS.language,
    theme:
      typeof theme === 'string' && isThemeId(theme)
        ? theme
        : DEFAULT_SETTINGS.theme
  }
}
