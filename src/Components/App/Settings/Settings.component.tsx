import { FaCog, FaTimes } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'
import { Text } from '@/Components/System/Text'

import { SettingsTheme } from '@/Components/App/SettingsTheme'
import { SettingsLanguage } from '@/Components/App/SettingsLanguage'

import './Settings.style.scss'

export const Settings = () => {
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
            <Text>{getTexts('SETTINGS_TITLE')}</Text>

            <Button onClick={toggleModal}>{<FaTimes />}</Button>
          </header>

          <main>
            <SettingsLanguage />
            <SettingsTheme />
          </main>
        </Modal>
      )}

      <Button onClick={toggleModal}>{<FaCog />}</Button>
    </div>
  )
}
