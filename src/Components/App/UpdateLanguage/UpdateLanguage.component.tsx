import { FaCircleCheck } from 'react-icons/fa6'

import { getTexts } from '@/Helpers/getTexts.helper'

import { saveData } from '@/Helpers/saveData.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import './UpdateLanguage.style.scss'
import { Portrait } from '@/Components/System/Portrait'

export const UpdateLanguage = ({ language }: { language: string }) => {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  const updateLanguage = () => {
    setSettings({ ...settings!, language })
    saveData({ key: 'settings', value: { ...settings, language } })
  }

  return (
    <div className="update-language">
      <Button
        onClick={updateLanguage}
        disabled={language === settings?.language}
      >
        <div className={`language-flag`}>
          <Portrait alt={language} src={`/languages/${language}.webp`} />
        </div>

        <Text>
          {getTexts(`LANGUAGE_${language.replace('-', '').toUpperCase()}`)}
        </Text>

        {language === settings?.language && <FaCircleCheck />}
      </Button>
    </div>
  )
}
