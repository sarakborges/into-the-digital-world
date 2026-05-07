import { Fragment } from 'react/jsx-runtime'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'

import { AllApps } from '@/Consts/DigiviceApps'

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

  if (!Object.keys(profile?.items || {}).includes('digivice')) {
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
            <div className="digivice-body">
              {Object.values(AllApps).map((app) => (
                <Fragment key={`digivice-apps-${app.id}`}>
                  {app.component}
                </Fragment>
              ))}
            </div>
          </main>
        </Modal>
      )}

      <Button
        onClick={toggleModal}
        data-warning={
          scene?.currentScene === 'introduction' && scene.currentStage === '022'
        }
        data-isopen={digivice.isOpen}
        disabled={
          (scene?.currentScene === 'introduction' &&
            ['023', '024', '025', '026', '027', '028', '029'].includes(
              scene.currentStage
            ) &&
            !!digivice.isOpen) ||
          settings.isOpen
        }
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
