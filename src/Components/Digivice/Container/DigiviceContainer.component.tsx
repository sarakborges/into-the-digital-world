import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { BiSolidSquareRounded } from 'react-icons/bi'
import { IoCaretBack } from 'react-icons/io5'

import { AllApps, DigiviceApps } from '@/Consts/DigiviceApps.const'

import { getTranslation } from '@/Helpers/Language'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Button } from '@/Components/DesignSystem/Button'
import { Modal } from '@/Components/DesignSystem/Modal'
import { Text } from '@/Components/DesignSystem/Text'

import { AppPlayerProfile } from '@/Components/Digivice/Apps/AppPlayerProfile'
import { DigiviceCurrentApp } from '@/Components/Digivice/CurrentApp'

import './DigiviceContainer.style.scss'

export const DigiviceContainer = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  if (!Object.keys(profile.items || {}).includes('digivice')) {
    return
  }

  const areButtonsDisabled = !!battle || !!scene

  const toggleModal = () => {
    setDigivice({
      isOpen: !digivice.isOpen
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
      {!!digivice.isOpen && (
        <Modal>
          <main>
            <div className="digivice-body">
              {!digivice.currentApp && (
                <>
                  <AppPlayerProfile />

                  <Text>{getTranslation('APPS_TITLE')}</Text>

                  <div className="digivice-apps">
                    {Object.values(DigiviceApps).map((app) => (
                      <div key={`digivice-apps-${app.id}`}>
                        <DigiviceCurrentApp app={app} />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {!!digivice.currentApp && !!AllApps[digivice.currentApp] && (
                <div className="current-app">
                  <header className="app-header">
                    <div className="app-identifier">
                      <Portrait
                        alt={getTranslation(
                          `APPS_${AllApps[digivice.currentApp].id.toLocaleUpperCase()}`
                        )}
                        src={`/apps/${AllApps[digivice.currentApp].id}.png`}
                      />

                      <Text>
                        {getTranslation(
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
        style={!!digivice.isOpen ? 'cancel' : 'secondary'}
        disabled={areButtonsDisabled}
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
