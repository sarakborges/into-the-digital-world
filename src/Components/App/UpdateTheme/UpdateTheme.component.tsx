import { FaCircleCheck } from 'react-icons/fa6'

import { getTexts } from '@/Texts'

import { saveData } from '@/Helpers/saveData.helper'

import { useSettings } from '@/Hooks/Settings.hook'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'

import './UpdateTheme.style.scss'

export const UpdateTheme = ({ theme }: { theme: string }) => {
  const { settings, setSettings } = useSettings()

  const updateTheme = () => {
    setSettings({ ...settings, theme })
    saveData({ key: 'settings', value: { ...settings, theme } })
  }

  return (
    <div className="update-theme">
      <Button onClick={updateTheme} disabled={theme === settings.theme}>
        <div className={`theme-colors theme-${theme}`}>
          <div className="icon" />
        </div>

        <Text>{getTexts(`THEME_${theme.toLocaleUpperCase()}`)}</Text>

        {theme === settings.theme && <FaCircleCheck />}
      </Button>
    </div>
  )
}
