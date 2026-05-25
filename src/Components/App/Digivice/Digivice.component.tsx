import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoCaretBack } from 'react-icons/io5'
import { BiSolidSquareRounded } from 'react-icons/bi'

import { AllApps } from '@/Consts/DigiviceApps'
import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'

import { DigiviceApp } from '@/Components/App/DigiviceApp'

import './Digivice.style.scss'

export const Digivice = () => {
  const { profile } = useProfile()
  const { digivice, setDigivice } = useDigivice()
  const { scene, setScene } = useScene()

  if (!Object.keys(profile?.items || {}).includes('digivice')) {
    return
  }

  const isOpenDigiviceScene =
    scene?.currentScene === AllScenes.introduction.id &&
    scene?.currentStage === '022'

  const isSceneBlockingButtons = !!scene && !isOpenDigiviceScene

  const isFashionOpen = digivice.currentApp === 'fashion'
  const playerHasAvatar = !!profile?.avatar

  const isFirstCustomization = !!isFashionOpen && !playerHasAvatar

  const areButtonsDisabled =
    isSceneBlockingButtons ||
    isFirstCustomization ||
    !!profile?.currentlyInBattle

  const toggleModal = () => {
    setDigivice({
      isOpen: !digivice.isOpen
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

  const pressBackButton = () => {
    if (!!digivice.currentDetails) {
      setDigivice({
        ...digivice,
        currentDetails: undefined
      })

      return
    }

    setDigivice({
      isOpen: true
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
                  </header>

                  <main>{AllApps[digivice.currentApp].component}</main>

                  <footer>
                    <Button
                      onClick={pressBackButton}
                      disabled={areButtonsDisabled}
                    >
                      <IoCaretBack />
                    </Button>

                    <Button
                      onClick={() =>
                        setDigivice({
                          ...digivice,
                          currentDetails: undefined,
                          currentApp: undefined
                        })
                      }
                      disabled={!!areButtonsDisabled}
                    >
                      <BiSolidSquareRounded />
                    </Button>
                  </footer>
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
        disabled={areButtonsDisabled}
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
