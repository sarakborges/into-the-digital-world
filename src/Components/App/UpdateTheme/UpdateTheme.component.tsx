import { FaCheck } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { saveData } from '@/Systems/Profile/saveData.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import './UpdateTheme.style.scss'

export const UpdateTheme = ({ theme }: { theme: string }) => {
  const { settings, setSettings } = useSettingsStore((state) => state)

  const updateTheme = () => {
    setSettings({ ...settings!, theme })
    saveData({ key: 'settings', value: { ...settings, theme } })
  }

  return (
    <div className="update-theme">
      <Button onClick={updateTheme}>
        <div className={`theme-colors theme-${theme}`}>
          <div className="icon" />
        </div>

        <Text>
          {getTexts(`THEME_${theme.toLocaleUpperCase()}`).split(' ').join('\n')}
        </Text>

        {theme === settings?.theme && <FaCheck />}
      </Button>
    </div>
  )
}
