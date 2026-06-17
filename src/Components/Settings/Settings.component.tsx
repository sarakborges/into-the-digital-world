import { FaCog, FaTimes } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/DesignSystem/Button'
import { Modal } from '@/DesignSystem/Modal'
import { Text } from '@/DesignSystem/Text'

import { SettingsTheme } from '@/Components/SettingsTheme'
import { SettingsLanguage } from '@/Components/SettingsLanguage'

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
