import { useState } from 'react'
import { FaCog, FaTimes } from 'react-icons/fa'

import { useProfile } from '@/Hooks/Profile.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'
import { Text } from '@/Components/System/Text'

import { ResetGame } from '@/Components/App/ResetGame'

import './Settings.style.scss'

export const Settings = () => {
  const { profile } = useProfile()
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  if (!profile) {
    return
  }

  return (
    <div className="settings">
      {!!isOpen && (
        <Modal>
          <header>
            <Text>Tamer: {profile.name}</Text>

            <Button onClick={toggleModal}>
              <FaTimes />
            </Button>
          </header>

          <main>
            <ResetGame />
          </main>
        </Modal>
      )}

      <header>
        <Text>Tamer: {profile.name}</Text>

        <Button onClick={toggleModal}>
          <FaCog />
        </Button>
      </header>
    </div>
  )
}
