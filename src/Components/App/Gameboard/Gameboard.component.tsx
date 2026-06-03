import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'
import { useGameStore } from '@/Stores/Game.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Portrait } from '@/Components/System/Portrait'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!profile?.currentZone) {
    return
  }

  const currentZone: ZoneType =
    AllZones[profile.currentZone.id][profile.currentZone.map]

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
          '--is-visible': !battle || scene?.currentStage === 'start' ? 1 : 0
        } as React.CSSProperties
      }
    >
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
                        '--character-opacity':
                          tile.condition === undefined || !!tile.condition?.()
                            ? 1
                            : 0
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
