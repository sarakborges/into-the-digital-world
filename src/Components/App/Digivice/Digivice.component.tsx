import { FaTimes } from 'react-icons/fa'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'

import { useScene } from '@/Hooks/Scene.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'

import './Digivice.style.scss'
import { useProfile } from '@/Hooks/Profile.hook'

export const Digivice = () => {
  const { profile } = useProfile()
  const { digivice, setDigivice } = useDigivice()
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
        className={
          scene?.currentScene === 'introduction' && scene.currentStage === '022'
            ? 'animated'
            : ''
        }
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
