import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import { getTexts } from '@/Helpers/getTexts.helper'

import { AllZones } from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useGame } from '@/Hooks/Game.hook'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { profile } = useProfile()
  const { game } = useGame()
  const { scene } = useScene()

  if (!profile?.currentZone) {
    return
  }

  const currentZone: ZoneType = AllZones[profile.currentZone.id]({
    scene,
    profile
  })

  const gameboardBodyVars = {
    '--current-x': profile.currentZone.x,
    '--current-y': profile.currentZone.y,
    '--grid-size': currentZone.gridSize,
    '--is-warping': !game?.isWarping ? 1 : 0,
    backgroundImage: `url('/zones/${currentZone.background}.webp')`
  } as React.CSSProperties

  return (
    <div
      className="gameboard-wrapper"
      style={
        {
          '--is-visible': !profile.currentlyInBattle ? 1 : 0
        } as React.CSSProperties
      }
    >
      <header className="gameboard-title">
        <Text>
          {getTexts('CURRENT_ZONE').replaceAll('[ZONE]', currentZone.name)}
        </Text>
      </header>

      <main className="gameboard">
        <div className="gameboard-body" style={gameboardBodyVars}>
          <div
            className="character"
            style={
              {
                '--character-x': profile.currentZone.x,
                '--character-y': profile.currentZone.y
              } as React.CSSProperties
            }
          >
            <PlayerAvatar />
          </div>

          {currentZone.tiles.map((tile) => {
            return (
              <Fragment
                key={`zone-${currentZone.id}-x${tile.x}-y${tile.y}-${tile.id}`}
              >
                {!!tile.npc?.id && (
                  <div
                    className="character"
                    style={
                      {
                        '--character-x': tile.x,
                        '--character-y': tile.y,
                        '--character-opacity': !!tile.condition ? 1 : 0
                      } as React.CSSProperties
                    }
                  >
                    <Portrait
                      src={`/${tile!.npc.portrait}.webp`}
                      alt={tile!.npc.name}
                    />
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </main>
    </div>
  )
}
