import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'

import { AllApps } from '@/Consts/DigiviceApps'

import { useScene } from '@/Hooks/Scene.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'

import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'

import { DigiviceApp } from '@/Components/App/DigiviceApp'

import './Digivice.style.scss'
import { Text } from '@/Components/System/Text'
import { getTexts } from '@/Helpers/getTexts.helper'
import { FaTimes } from 'react-icons/fa'
import { Portrait } from '@/Components/System/Portrait'

export const Digivice = () => {
  const { profile } = useProfile()
  const { digivice, setDigivice } = useDigivice()
  const { settings } = useSettings()
  const { scene, setScene } = useScene()

  if (!Object.keys(profile?.items || {}).includes('digivice')) {
    return
  }

  const toggleModal = () => {
    setDigivice({
      ...digivice,
      isOpen: !digivice.isOpen,
      currentApp: undefined
    })

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

  const closeApp = () => {
    setDigivice({
      ...digivice,
      currentApp: undefined
    })
  }

  return (
    <div className="digivice">
      {!!digivice.isOpen && (
        <Modal>
          <main>
            <div className="digivice-body">
              {!digivice.currentApp && (
                <div className="digivice-apps">
                  {Object.values(AllApps).map((app) => (
                    <div key={`digivice-apps-${app.id}`}>
                      <DigiviceApp app={app} />
                    </div>
                  ))}
                </div>
              )}

              {!!digivice.currentApp && !!AllApps[digivice.currentApp] && (
                <div className="current-app">
                  <header className="app-header">
                    <div className="app-identifier">
                      <Portrait
                        alt={getTexts(
                          `APPS_${AllApps[digivice.currentApp].id.toLocaleUpperCase()}`
                        )}
                        src={`/apps/${AllApps[digivice.currentApp].id}.png`}
                      />

                      <Text>
                        {getTexts(
                          `APPS_${AllApps[digivice.currentApp].id.toLocaleUpperCase()}`
                        )}
                      </Text>
                    </div>

                    <Button cancel onClick={closeApp} disabled={!!scene}>
                      <FaTimes />
                    </Button>
                  </header>

                  <main>{AllApps[digivice.currentApp].component}</main>
                </div>
              )}
            </div>
          </main>
        </Modal>
      )}

      <Button
        onClick={toggleModal}
        cancel={!!digivice.isOpen}
        data-warning={
          scene?.currentScene === 'introduction' && scene.currentStage === '022'
        }
        disabled={
          (scene?.currentScene === 'introduction' &&
            !['022'].includes(scene.currentStage)) ||
          (!!scene && scene?.currentScene !== 'introduction') ||
          settings.isOpen
        }
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
