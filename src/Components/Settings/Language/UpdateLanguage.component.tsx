import { FaCheck } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { updateSettings } from '@/Helpers/Systems/Settings/updateSettings.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Settings/Language/UpdateLanguage.style.scss'

export const UpdateLanguage = ({ language }: { language: string }) => {
  const { settings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  return (
    <div className="update-language">
      <Button onClick={() => updateSettings({ language })}>
        <div className="language-flag">
          <Portrait alt={language} src={`/languages/${language}.webp`} />
        </div>

        <Text>
          {getTexts(`LANGUAGE_${language.replace('-', '').toUpperCase()}`)}
        </Text>

        {language === settings.language && <FaCheck />}
      </Button>
    </div>
  )
}
