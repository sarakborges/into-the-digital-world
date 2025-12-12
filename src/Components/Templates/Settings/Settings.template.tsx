import { getTexts } from '@/Texts'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { SettingsAvatar } from '@/Components/App/SettingsAvatar'
import { SettingsProfile } from '@/Components/App/SettingsProfile'

import './Settings.style.scss'

export const SettingsTemplate = () => {
  return (
    <MenuWrapper>
      <main className="settings-template">
        <header>
          <Typography as="h1">{getTexts('SETTINGS_TITLE')}</Typography>
        </header>

        <SettingsProfile />
        <SettingsAvatar />
      </main>
    </MenuWrapper>
  )
}
