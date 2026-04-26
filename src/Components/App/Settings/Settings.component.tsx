import { FaCog, FaTimes } from 'react-icons/fa'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'
import { Text } from '@/Components/System/Text'

import { SettingsTheme } from '@/Components/App/SettingsTheme'
import { SettingsLanguage } from '@/Components/App/SettingsLanguage'
import { ReturnToMainScreen } from '@/Components/App/ReturnToMainScreen'
import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Settings.style.scss'

export const Settings = () => {
  const { profile } = useProfile()
  const { settings, setSettings } = useSettings()

  const toggleModal = () => {
    setSettings({ ...settings, isOpen: !settings.isOpen })
  }

  return (
    <div className="settings">
      {!!settings.isOpen && (
        <Modal>
          <header>
            <Text>{getTexts('SETTINGS_TITLE')}</Text>

            <Button onClick={toggleModal}>
              <FaTimes />
            </Button>
          </header>

          <main>
            <ReturnToMainScreen />
            <SettingsLanguage />
            <SettingsTheme />
          </main>
        </Modal>
      )}

      <header>
        <div className="player">
          <PlayerAvatar />
          <Text>{profile?.name}</Text>
        </div>

        <Button onClick={toggleModal}>{<FaCog />}</Button>
      </header>
    </div>
  )
}
