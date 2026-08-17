import { FaCheck } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language'
import { updateSettings } from '@/Helpers/Systems/Settings'

import { useSettingsStore } from '@/Stores/Settings.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'
import { Text } from '@/Components/DesignSystem/Text'

import './UpdateTheme.style.scss'

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
      <ShadowButton onClick={updateTheme}>
        <div className={`theme-colors theme-${theme}`}>
          <div className="icon" />
        </div>

        <Text>{getTexts(`THEME_${theme.toLocaleUpperCase()}`)}</Text>

        {theme === settings.theme && <FaCheck />}
      </ShadowButton>
    </div>
  )
}
