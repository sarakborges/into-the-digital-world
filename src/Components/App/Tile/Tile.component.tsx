import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Portrait } from '@/Components/System/Portrait'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Tile.style.scss'

export const Tile = ({ x, y }: { x: number; y: number }) => {
  const { profile } = useProfile()
  const { scene } = useScene()

  if (!profile) {
    return null
  }

  const currentZone: ZoneType = Zones[profile.currentZone.id]({
    scene,
    profile
  })

  const currentTiles = currentZone.tiles.filter(
    (tile) =>
      tile.x === x &&
      tile.y === y &&
      !!tile.npc &&
      (tile.condition === undefined || !!tile.condition)
  )

  const tileVars = {
    '--x': x,
    '--y': y
  } as React.CSSProperties

  return (
    <div className="tile" style={tileVars}>
      {currentTiles.map((tile) => (
        <Fragment key={`tile-${y}-${x}-${tile.npc?.id || tile.event}`}>
          <div className="npc">
            <Portrait
              src={`/${tile!.npc!.portrait}.webp`}
              alt={tile!.npc!.name}
            />
          </div>
        </Fragment>
      ))}

      {profile.currentZone.x === x && profile.currentZone.y === y && (
        <div className="player-character">
          <PlayerAvatar />
        </div>
      )}
    </div>
  )
}
