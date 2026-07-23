import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { LANGUAGES } from '@/Consts/Languages.const'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { UpdateLanguage } from '@/Components/Settings/Language/UpdateLanguage.component'
import '@/Components/Settings/Languages/SettingsLanguage.style.scss'

export const SettingsLanguage = () => {
  return (
    <div className="settings-language">
      <Text>{getTexts('LANGUAGES_TITLE')}</Text>

      <div className="languages-list">
        {LANGUAGES.map((language) => (
          <UpdateLanguage
            key={`languages-list-language-${language}`}
            language={language}
          />
        ))}
      </div>
    </div>
  )
}
