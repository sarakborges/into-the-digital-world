import { FaCog, FaTimes } from 'react-icons/fa'

import { getTexts } from '@/Texts'

import { useProfile } from '@/Hooks/Profile.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'
import { Text } from '@/Components/System/Text'
import { useSettings } from '@/Hooks/Settings.hook'

import { SettingsTheme } from '@/Components/App/SettingsTheme'

import './Settings.style.scss'

export const Settings = () => {
  const { profile, setProfile } = useProfile()
  const { settings, setSettings } = useSettings()

  const toggleModal = () => {
    setSettings({ ...settings, isOpen: !settings.isOpen })
  }

  const returnToMainScreen = () => {
    setProfile(null)
    setSettings({ ...settings, isOpen: false })
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
            {!!profile && (
              <Button onClick={returnToMainScreen}>
                Return to main screen
              </Button>
            )}

            <SettingsTheme />
          </main>
        </Modal>
      )}

      <header>
        <Text>{profile?.name}</Text>

        <Button onClick={toggleModal}>{<FaCog />}</Button>
      </header>
    </div>
  )
}
