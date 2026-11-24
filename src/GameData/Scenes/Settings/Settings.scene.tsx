import { getTexts } from '@/Helpers/Language'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'
import { Text } from '@/Components/DesignSystem/Text'
import { SettingsLanguage } from '@/Components/Settings/Languages'

import './Settings.style.scss'

export const Settings = () => {
  const closeSettings = () => {
    changeScene('startScreen')
  }

  return (
    <div className="settings">
      <main>
        <header className="settings-header">
          <Text>{getTexts('SETTINGS_TITLE')}</Text>
        </header>

        <main>
          <SettingsLanguage />
        </main>

        <footer>
          <ShadowButton onClick={closeSettings}>
            {getTexts('RETURN_TO_START_SCREEN')}
          </ShadowButton>
        </footer>
      </main>
    </div>
  )
}
