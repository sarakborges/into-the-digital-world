import type { ZoneType } from '@/Types/Zone.type'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'

import { Portrait } from '@/Components/System/Portrait'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Tile.style.scss'

export const Tile = ({ x, y }: { x: number; y: number }) => {
  const { profile } = useProfile()

  if (!profile) {
    return null
  }

  const currentZone: ZoneType = Zones[profile.currentZone.id]

  const currentTile = currentZone.tiles.find(
    (tile) => tile.x === x && tile.y === y
  )

  if (
    !currentTile?.npc &&
    !(profile.currentZone.x === x && profile.currentZone.y === y)
  ) {
    return
  }

  const tileVars = {
    '--x': x,
    '--y': y
  } as React.CSSProperties

  return (
    <div className="tile" style={tileVars}>
      {currentTile?.npc &&
        (currentTile?.npc.condition === undefined ||
          !!currentTile?.npc.condition) && (
          <div className="npc">
            <Portrait
              src={`/${currentTile.npc.npcInfo.portrait}.webp`}
              alt={currentTile.npc.npcInfo.name}
            />
          </div>
        )}

      {profile.currentZone.x === x && profile.currentZone.y === y && (
        <div className="player-character">
          <PlayerAvatar />
        </div>
      )}
    </div>
  )
}
