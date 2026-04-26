import { LANGUAGES } from '@/Consts/Languages.const'

import { getTexts } from '@/Helpers/getTexts.helper'

import { Text } from '@/Components/System/Text'

import { UpdateLanguage } from '@/Components/App/UpdateLanguage'

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
