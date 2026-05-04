import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import { getTexts } from '@/Helpers/getTexts.helper'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Tile } from '@/Components/App/Tile'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { profile } = useProfile()
  const { scene } = useScene()

  if (!profile) {
    return null
  }

  const currentZone: ZoneType = Zones[profile?.currentZone.id]({ scene })

  const gameboardVars = {
    '--view-size': currentZone?.gridSize || 0 > 13 ? currentZone.gridSize : 13
  } as React.CSSProperties

  const gameboardBodyVars = {
    '--current-x': profile.currentZone.x,
    '--current-y': profile.currentZone.y,
    '--grid-size': currentZone?.gridSize,
    backgroundImage: `url('/zones/${currentZone?.background}.webp')`
  } as React.CSSProperties

  return (
    <div className="gameboard-wrapper">
      <header className="gameboard-title">
        <Text>
          {getTexts('CURRENT_ZONE').replaceAll('[ZONE]', currentZone?.name)}
        </Text>
      </header>

      <main className="gameboard" style={gameboardVars}>
        <div className="gameboard-body" style={gameboardBodyVars}>
          {new Array(currentZone?.gridSize).fill(null).map((_, y) => {
            return (
              <Fragment key={`y-${y}`}>
                {new Array(currentZone?.gridSize).fill(null).map((_, x) => (
                  <Tile {...{ x, y }} key={`y-${y}-x-${x}`} />
                ))}
              </Fragment>
            )
          })}
        </div>
      </main>
    </div>
  )
}
