import { FaCircleCheck } from 'react-icons/fa6'

import { getTexts } from '@/Texts'

import { saveData } from '@/Helpers/saveData.helper'

import { useSettings } from '@/Hooks/Settings.hook'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import './UpdateLanguage.style.scss'

export const UpdateLanguage = ({ language }: { language: string }) => {
  const { settings, setSettings } = useSettings()

  const updateLanguage = () => {
    setSettings({ ...settings, language })
    saveData({ key: 'settings', value: { ...settings, language } })
  }

  return (
    <div className="update-language">
      <Button
        onClick={updateLanguage}
        disabled={language === settings.language}
      >
        <div className={`language-colors language-${language}`}>
          <div className="icon" />
        </div>

        <Text>
          {getTexts(`LANGUAGE_${language.replace('-', '').toUpperCase()}`)}
        </Text>

        {language === settings.language && <FaCircleCheck />}
      </Button>
    </div>
  )
}
