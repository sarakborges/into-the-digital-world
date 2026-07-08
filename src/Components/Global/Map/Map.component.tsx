import type { CSSProperties } from 'react'

import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { GiCrossedSwords, GiPortal } from 'react-icons/gi'
import { BiSolidUserCircle } from 'react-icons/bi'
import { TbStars } from 'react-icons/tb'

import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import {
  getVisibleTiles,
  getNpcsOnZone,
  getEventsOnZone
} from '@/Helpers/Systems/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

import './Map.style.scss'

export const Map = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile?.currentZone) {
    return
  }

  const currentZone: ZoneType = AllZones[profile.currentZone.id][
    profile.currentZone.map
  ] as ZoneType

  const npcs = getNpcsOnZone(currentZone.tiles)
  const events = getEventsOnZone(currentZone.tiles)

  const tiles = getVisibleTiles(
    currentZone,
    profile,
    events as Array<{
      x: number
      y: number
      onEnter?: { type?: 'warp' }
      events?: Array<{ eventType?: 'important' | 'dungeon' }>
    }>,
    npcs
  )

  const tileIcons = {
    dungeon: <GiCrossedSwords />,
    npc: <HiOutlineChatBubbleLeftEllipsis />,
    event: <TbStars />,
    warp: <GiPortal />,
    player: <BiSolidUserCircle />,
    important: <AiOutlineExclamationCircle />
  }

  return (
    <div
      className="map"
      style={
        {
          '--tile-x': profile.currentZone.x,
          '--tile-y': profile.currentZone.y,
          '--grid-size': currentZone.gridSize
        } as CSSProperties
      }
    >
      <div className="map-tiles">
        {tiles.map((tile) => (
          <div
            style={{ '--tile-x': tile.x, '--tile-y': tile.y } as CSSProperties}
            className={tile.type}
            key={`minimap-${currentZone.name}-tile-${tile.id}`}
          >
            {tileIcons[tile.type]}
          </div>
        ))}
      </div>
    </div>
  )
}
