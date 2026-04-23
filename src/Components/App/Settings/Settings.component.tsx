import { FaCog, FaTimes } from 'react-icons/fa'

import { useProfile } from '@/Hooks/Profile.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'
import { Text } from '@/Components/System/Text'
import { useSettings } from '@/Hooks/Settings.hook'

import { ResetGame } from '@/Components/App/ResetGame'

import './Settings.style.scss'

export const Settings = () => {
  const { profile } = useProfile()
  const { settings, setSettings } = useSettings()

  const toggleModal = () => {
    setSettings({ isOpen: !settings.isOpen })
  }

  if (!profile) {
    return
  }

  const HeaderIcons = {
    cog: <FaCog />,
    times: <FaTimes />
  }

  const TextHeader = ({ icon }: { icon: string }) => (
    <header>
      <Text>{profile.name}</Text>

      <Button onClick={toggleModal}>{HeaderIcons[icon]}</Button>
    </header>
  )

  return (
    <div className="settings">
      {!!settings.isOpen && (
        <Modal>
          <TextHeader icon="times" />

          <main>
            <ResetGame />
          </main>
        </Modal>
      )}

      <TextHeader icon="cog" />
    </div>
  )
}
