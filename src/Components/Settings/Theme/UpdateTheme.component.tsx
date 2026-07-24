import { FaCheck } from 'react-icons/fa'

import type { ThemeId } from '@/Consts/Themes.const'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { updateSettings } from '@/Helpers/Systems/Settings/updateSettings.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Settings/Theme/UpdateTheme.style.scss'

export const UpdateTheme = ({ theme }: { theme: ThemeId }) => {
  const { settings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  return (
    <div className="update-theme">
      <Button onClick={() => updateSettings({ theme })}>
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
