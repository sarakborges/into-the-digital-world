import { FaCheck } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language'
import { updateSettings } from '@/Helpers/Systems/Settings'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'
import '@/Components/Settings/Theme/UpdateTheme.style.scss'

export const UpdateTheme = ({ theme }: { theme: string }) => {
  const { settings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  const updateTheme = () => {
    updateSettings({
      theme
    })
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

        {theme === settings.theme && <FaCheck />}
      </Button>
    </div>
  )
}
