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

  const currentZone = Zones[profile.currentZone]

  if (
    !currentZone.grid?.[y]?.[x]?.npc &&
    !(profile.currentX === x && profile.currentY === y)
  ) {
    return
  }

  const tileVars = {
    '--x': x,
    '--y': y
  } as React.CSSProperties

  return (
    <div className="tile" style={tileVars}>
      {!!currentZone.grid?.[y]?.[x]?.npc && (
        <div className="npc">
          <Portrait
            src={`/${currentZone.grid?.[y]?.[x].npc.portrait}.webp`}
            alt={currentZone.grid?.[y]?.[x].npc.name}
          />
        </div>
      )}

      {profile.currentX === x && profile.currentY === y && (
        <div className="player-character">
          <PlayerAvatar />
        </div>
      )}
    </div>
  )
}
