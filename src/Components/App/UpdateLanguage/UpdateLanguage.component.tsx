import { FaCheck } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { saveData } from '@/Systems/Profile/saveData.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import './UpdateLanguage.style.scss'
import { Portrait } from '@/Components/System/Portrait'

export const UpdateLanguage = ({ language }: { language: string }) => {
  const { settings, setSettings } = useSettingsStore((state) => state)

  const updateLanguage = () => {
    setSettings({ ...settings!, language })
    saveData({ key: 'settings', value: { ...settings, language } })
  }

  return (
    <div className="update-language">
      <Button onClick={updateLanguage}>
        <div className={`language-flag`}>
          <Portrait alt={language} src={`/languages/${language}.webp`} />
        </div>

        <Text>
          {getTexts(`LANGUAGE_${language.replace('-', '').toUpperCase()}`)}
        </Text>

        {language === settings?.language && <FaCheck />}
      </Button>
    </div>
  )
}
