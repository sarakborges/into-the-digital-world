import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoCaretBack } from 'react-icons/io5'
import { BiSolidSquareRounded } from 'react-icons/bi'

import { AllApps, DigiviceApps } from '@/Consts/DigiviceApps.const'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'
import { Modal } from '@/Components/System/Modal'

import { DigiviceApp } from '@/Components/App/DigiviceApp'
import { PlayerProfile } from '@/Components/App/PlayerProfile'

import './Digivice.style.scss'

export const Digivice = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!Object.keys(profile?.items || {}).includes('digivice')) {
    return
  }

  const areButtonsDisabled = !!battle || !!scene

  const toggleModal = () => {
    setDigivice({
      isOpen: !digivice?.isOpen
    })
  }

  const pressBackButton = () => {
    if (!!digivice?.currentDetails) {
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
      {!!digivice?.isOpen && (
        <Modal>
          <main>
            <div className="digivice-body">
              {!digivice?.currentApp && (
                <>
                  <PlayerProfile />

                  <Text>{getTexts('APPS_TITLE')}</Text>

                  <div className="digivice-apps">
                    {Object.values(DigiviceApps).map((app) => (
                      <div key={`digivice-apps-${app.id}`}>
                        <DigiviceApp app={app} />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {!!digivice?.currentApp && !!AllApps[digivice?.currentApp] && (
                <div className="current-app">
                  <header className="app-header">
                    <div className="app-identifier">
                      <Portrait
                        alt={getTexts(
                          `APPS_${AllApps[digivice?.currentApp].id.toLocaleUpperCase()}`
                        )}
                        src={`/apps/${AllApps[digivice?.currentApp].id}.png`}
                      />

                      <Text>
                        {getTexts(
                          `APPS_${AllApps[digivice?.currentApp].id.toLocaleUpperCase()}`
                        )}
                      </Text>
                    </div>
                  </header>

                  <main>{AllApps[digivice?.currentApp].component}</main>

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
        cancel={!!digivice?.isOpen}
        disabled={areButtonsDisabled}
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
