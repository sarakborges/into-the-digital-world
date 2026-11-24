import { getTexts } from '@/Helpers/Language'

import { LANGUAGES } from '@/Consts/Languages.const'

import { Text } from '@/Components/DesignSystem/Text'
import { UpdateLanguage } from '@/Components/Settings/UpdateLanguage'

import './SettingsLanguage.style.scss'

export const SettingsLanguage = () => {
  return (
    <div className="settings-language">
      <header>
        <Text>{getTexts('LANGUAGES_TITLE')}</Text>
      </header>

      <main className="languages-list">
        {LANGUAGES.map((language) => (
          <UpdateLanguage
            key={`languages-list-language-${language}`}
            language={language}
          />
        ))}
      </main>
    </div>
  )
}
