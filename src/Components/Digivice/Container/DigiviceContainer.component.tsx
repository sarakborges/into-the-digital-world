import { BiSolidSquareRounded } from 'react-icons/bi'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoCaretBack } from 'react-icons/io5'

import {
  findDigiviceApp,
  getMainDigiviceApps
} from '@/GameData/Registries/DigiviceApp.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { doesProfileHaveDigivice } from '@/Helpers/Systems/Digivice/doesProfileHaveDigivice.helper'
import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Modal } from '@/Components/DesignSystem/Modal/Modal.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { AppPlayerProfile } from '@/Components/Digivice/Apps/AppPlayerProfile/AppPlayerProfile.component'
import '@/Components/Digivice/Container/DigiviceContainer.style.scss'
import { DigiviceCurrentApp } from '@/Components/Digivice/CurrentApp/DigiviceCurrentApp.component'

export const DigiviceContainer = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!profile || !digivice || !doesProfileHaveDigivice(profile)) {
    return
  }

  const areButtonsDisabled = !!scene && !scene.enablesMovement
  const currentApp = digivice.currentApp
    ? findDigiviceApp(digivice.currentApp)
    : undefined
  const mainApps = getMainDigiviceApps()

  const toggleModal = () => {
    setDigivice({
      isOpen: !digivice.isOpen
    })

    openCurrentTileScene()
  }

  const pressBackButton = () => {
    if (digivice.currentDetails !== undefined) {
      updateDigivice({ currentDetails: undefined })
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

                  <Text>{getTexts('APPS_TITLE')}</Text>

                  <div className="digivice-apps">
                    {mainApps.map((app) => (
                      <div key={`digivice-apps-${app.id}`}>
                        <DigiviceCurrentApp app={app} />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {!!currentApp && (
                <div className="current-app">
                  <header className="app-header">
                    <div className="app-identifier">
                      <Portrait
                        alt={getTexts(
                          `APPS_${currentApp.id.toLocaleUpperCase()}`
                        )}
                        src={`/apps/${currentApp.id}.png`}
                      />

                      <Text>
                        {getTexts(`APPS_${currentApp.id.toLocaleUpperCase()}`)}
                      </Text>
                    </div>
                  </header>

                  <main>{currentApp.component}</main>

                  <footer>
                    <Button
                      onClick={pressBackButton}
                      disabled={areButtonsDisabled}
                    >
                      <IoCaretBack />
                    </Button>

                    <Button
                      onClick={() =>
                        updateDigivice({
                          currentApp: undefined,
                          currentDetails: undefined
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
        variant={digivice.isOpen ? 'cancel' : undefined}
        disabled={areButtonsDisabled}
      >
        {<HiOutlineDevicePhoneMobile />}
      </Button>
    </div>
  )
}
