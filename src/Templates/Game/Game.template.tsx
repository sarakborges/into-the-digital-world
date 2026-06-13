import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'
import { AllZones } from '@/GameData/Zones'
import { AllDigimons } from '@/GameData/Digimons'

import { THEMES } from '@/Consts/Themes.const'

import { getTexts } from '@/Helpers/getTexts.helper'
import { loadData } from '@/Helpers/loadData.helper'
import { loadSession } from '@/Helpers/loadSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSettingsStore } from '@/Stores/Settings.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useGameStore } from '@/Stores/Game.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { InteractableTiles } from '@/Components/App/InteractableTiles'
import { Gamepad } from '@/Components/App/Gamepad'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { Digivice } from '@/Components/App/Digivice'
import { StartScreen } from '@/Components/App/StartScreen'

import './Game.style.scss'

export const Game = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { settings, setSettings } = useSettingsStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { setSavedProfiles } = useSavedProfilesStore((state) => state)

  const loadProfiles = () => {
    const savedProfiles = loadData({ key: `profiles` })

    if (!savedProfiles) {
      return
    }

    setSavedProfiles(
      savedProfiles?.map((profile) => loadData({ key: `profile${profile}` }))
    )
  }

  useEffect(() => {
    loadProfiles()
  }, [settings, scene, profile, battle, digivice, game])

  useEffect(() => {
    setProfile(loadSession({ key: 'profile' }))
    setSettings({ ...loadData({ key: 'settings' }), isOpen: false })
  }, [])

  return (
    <div
      className={`game-body theme-${
        settings?.theme &&
        Object.keys({
          ...THEMES.default,
          ...THEMES.crests,
          ...THEMES.families,
          ...THEMES.other
        }).includes(settings?.theme)
          ? settings?.theme
          : 'default'
      }`}
    >
      <div className="main-game">
        <div className="game-container">
          <header>
            <div className="player-actions">
              <Digivice />
              <Settings />
            </div>

            {!!profile && (
              <div className="current-zone">
                <Text>
                  {getTexts('CURRENT_ZONE').replaceAll(
                    '[ZONE]',
                    AllZones[profile.currentZone.id][profile.currentZone.map]
                      .name
                  )}
                </Text>
              </div>
            )}
          </header>

          <Gameboard />
        </div>

        {!!profile && (
          <>
            <Scene />
            <InteractableTiles />

            <div className="screen-footer">
              {!battle && (
                <div className="party">
                  <Text>Party members</Text>

                  <div className="party-digimons">
                    {profile.party.map((digimon) => (
                      <div key={`profile-party-${digimon}`}>
                        <Text>
                          {profile.partnerDigimons[digimon].name ||
                            AllDigimons[
                              profile.partnerDigimons[digimon].baseDigimon
                            ].name}
                        </Text>

                        <Portrait
                          alt={
                            AllDigimons[
                              profile.partnerDigimons[digimon].baseDigimon
                            ].name
                          }
                          src={`/${
                            AllDigimons[
                              profile.partnerDigimons[digimon].baseDigimon
                            ].portrait
                          }.webp`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!scene && <Gamepad />}
            </div>
          </>
        )}

        {!profile && <StartScreen />}
      </div>
    </div>
  )
}
