import { FaCog } from 'react-icons/fa'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Modal } from '@/Components/DesignSystem/Modal/Modal.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Settings/Container/SettingsContainer.style.scss'
import { SettingsLanguage } from '@/Components/Settings/Languages/SettingsLanguage.component'
import { SettingsTheme } from '@/Components/Settings/Themes/SettingsTheme.component'

export const SettingsContainer = () => {
  const { settings, setSettings } = useSettingsStore((state) => state)

  return (
    <div className="settings">
      {settings.isOpen && (
        <Modal>
          <header className="settings-header">
            <Text>{getTexts('SETTINGS_TITLE')}</Text>
          </header>

          <main>
            <SettingsLanguage />
            <SettingsTheme />
          </main>
        </Modal>
      )}

      <Button
        onClick={() =>
          setSettings({ ...settings, isOpen: !settings.isOpen })
        }
        variant={settings.isOpen ? 'cancel' : undefined}
      >
        {<FaCog />}
      </Button>
    </div>
  )
}
