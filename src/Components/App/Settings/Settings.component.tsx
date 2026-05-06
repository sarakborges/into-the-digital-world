import { FaCog } from 'react-icons/fa'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useSettings } from '@/Hooks/Settings.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'
import { Text } from '@/Components/System/Text'

import { SettingsTheme } from '@/Components/App/SettingsTheme'
import { SettingsLanguage } from '@/Components/App/SettingsLanguage'
import { ReturnToMainScreen } from '@/Components/App/ReturnToMainScreen'
import { SaveGame } from '@/Components/App/SaveGame'

import './Settings.style.scss'

export const Settings = () => {
  const { settings, setSettings } = useSettings()
  const { digivice, setDigivice } = useDigivice()

  const toggleModal = () => {
    setSettings({ ...settings, isOpen: !settings.isOpen })

    if (!!digivice.isOpen) {
      setDigivice({ ...digivice, isOpen: false })
    }
  }

  return (
    <div className="settings">
      {!!settings.isOpen && (
        <Modal>
          <header className="settings-header">
            <Text>{getTexts('SETTINGS_TITLE')}</Text>
          </header>

          <main>
            <header>
              <ReturnToMainScreen />
              <SaveGame />
            </header>

            <SettingsLanguage />
            <SettingsTheme />
          </main>
        </Modal>
      )}

      <Button onClick={toggleModal} data-isOpen={settings.isOpen}>
        {<FaCog />}
      </Button>
    </div>
  )
}
