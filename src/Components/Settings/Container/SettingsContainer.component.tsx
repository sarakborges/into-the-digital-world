import { FaCog, FaTimes } from 'react-icons/fa'

import { getTranslation } from '@/Helpers/Language'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Modal } from '@/Components/DesignSystem/Modal'
import { Text } from '@/Components/DesignSystem/Text'

import { SettingsLanguage } from '@/Components/Settings/Languages'
import { SettingsTheme } from '@/Components/Settings/Themes'

import './SettingsContainer.style.scss'

export const SettingsContainer = () => {
  const { settings, setSettings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  const toggleModal = () => {
    setSettings({ ...settings, isOpen: !settings.isOpen })
  }

  return (
    <div className="settings">
      {!!settings.isOpen && (
        <Modal>
          <header className="settings-header">
            <Text>{getTranslation('SETTINGS_TITLE')}</Text>

            <Button style="secondary" onClick={toggleModal}>
              {<FaTimes />}
            </Button>
          </header>

          <main>
            <SettingsLanguage />
            <SettingsTheme />
          </main>
        </Modal>
      )}

      <Button style="secondary" onClick={toggleModal}>
        {<FaCog />}
      </Button>
    </div>
  )
}
