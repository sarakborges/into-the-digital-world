import { FaCheck } from 'react-icons/fa'

import { getTranslation } from '@/Helpers/Language'
import { updateSettings } from '@/Helpers/Systems/Settings'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './UpdateLanguage.style.scss'

export const UpdateLanguage = ({ language }: { language: string }) => {
  const { settings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  const updateLanguage = () => {
    updateSettings({
      language
    })
  }

  return (
    <div className="update-language">
      <Button onClick={updateLanguage}>
        <div className={`language-flag`}>
          <Portrait alt={language} src={`/languages/${language}.webp`} />
        </div>

        <Text>
          {getTranslation(
            `LANGUAGE_${language.replace('-', '').toUpperCase()}`
          )}
        </Text>

        {language === settings?.language && <FaCheck />}
      </Button>
    </div>
  )
}
