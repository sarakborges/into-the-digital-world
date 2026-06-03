import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'
import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/getTexts.helper'
import { loadData } from '@/Helpers/loadData.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSettingsStore } from '@/Stores/Settings.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useGameStore } from '@/Stores/Game.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { Text } from '@/Components/System/Text'

import { InteractableTiles } from '@/Components/App/InteractableTiles'
import { Gamepad } from '@/Components/App/Gamepad'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { Digivice } from '@/Components/App/Digivice'
import { StartScreen } from '@/Components/App/StartScreen'
import { Battlefield } from '@/Components/App/Battlefield'
import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Game.style.scss'

export const Game = () => {
  const { profile } = useProfileStore((state) => state)
  const { settings } = useSettingsStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { setSavedProfiles } = useSavedProfilesStore((state) => state)

  const loadProfiles = () => {
    const savedProfiles = loadData({ key: `profiles` })
      .filter((profile) => !!profile)
      .map((profile) => loadData({ key: `profile${profile}` }))

    setSavedProfiles(savedProfiles)
  }

  useEffect(() => {
    loadProfiles()
  }, [settings, scene, profile, battle, digivice, game])

  return (
    <div className={`game-body theme-${settings?.theme}`}>
      <div className="main-game">
        <header>
          {!!profile && (
            <div className="current-zone">
              <Text>
                {!battle || scene?.currentStage === 'start'
                  ? getTexts('CURRENT_ZONE').replaceAll(
                      '[ZONE]',
                      AllZones[profile.currentZone.id][profile.currentZone.map]
                        .name
                    )
                  : getTexts('IN_COMBAT')}
              </Text>
            </div>
          )}

          <div className="player-actions">
            <Digivice />
            <Settings />
          </div>
        </header>

        {!!battle && scene?.currentStage !== 'start' && <Battlefield />}
        <Gameboard />

        <>
          {!profile && <StartScreen />}

          {!!profile && (
            <>
              {<Scene />}
              <InteractableTiles />

              <div className="screen-footer">
                <div className="player">
                  <PlayerAvatar />
                  <Text>{profile.name || '???'}</Text>
                </div>

                <Gamepad />
              </div>
            </>
          )}
        </>
      </div>
    </div>
  )
}
