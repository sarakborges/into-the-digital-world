import { FaTimes } from 'react-icons/fa'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'

import { useScene } from '@/Hooks/Scene.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'

import './Digivice.style.scss'

export const Digivice = () => {
  const { profile } = useProfile()
  const { digivice, setDigivice } = useDigivice()
  const { settings, setSettings } = useSettings()
  const { scene, setScene } = useScene()

  if (!Object.keys(profile!.items || {}).includes('digivice')) {
    return
  }

  const toggleModal = () => {
    setDigivice({ ...digivice, isOpen: !digivice.isOpen })

    if (
      scene?.currentScene === 'introduction' &&
      scene.currentStage === '022'
    ) {
      setScene({
        currentScene: 'introduction',
        currentStage: '023'
      })
    }

    if (!!settings.isOpen) {
      setSettings({ ...settings, isOpen: false })
    }
  }

  return (
    <div className="digivice">
      {!!digivice.isOpen && (
        <Modal>
          <main>
            <header className="digivice-header">
              <Button onClick={toggleModal}>
                <FaTimes />
              </Button>
            </header>
          </main>
        </Modal>
      )}

      <Button
        onClick={toggleModal}
        data-warning={
          scene?.currentScene === 'introduction' && scene.currentStage === '022'
        }
        data-isOpen={digivice.isOpen}
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
