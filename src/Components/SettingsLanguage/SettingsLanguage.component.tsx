import { LANGUAGES } from '@/Consts/Languages.const'

import { getTexts } from '@/Helpers/Language'

import { Text } from '@/DesignSystem/Text'

import { UpdateLanguage } from '@/Components/UpdateLanguage'

import './SettingsLanguage.style.scss'

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
