import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BiSolidUserCircle } from 'react-icons/bi'
import { GiCrossedSwords, GiPortal } from 'react-icons/gi'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { TbStars } from 'react-icons/tb'

import type { CSSProperties } from 'react'

import { getCurrentZone, getVisibleTiles } from '@/Helpers/Systems/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

import './Map.style.scss'

export const Map = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile?.currentZone) {
    return
  }

  const currentZone = getCurrentZone()
  const tiles = getVisibleTiles()

  if (!currentZone) {
    return
  }

  const tileIcons = {
    dungeon: <GiCrossedSwords />,
    npc: <HiOutlineChatBubbleLeftEllipsis />,
    event: <TbStars />,
    warp: <GiPortal />,
    player: <BiSolidUserCircle />,
    important: <AiOutlineExclamationCircle />
  }

  return (
    <section
      className="map"
      style={
        {
          '--tile-x': profile.currentZone.x,
          '--tile-y': profile.currentZone.y,
          '--grid-size': currentZone.gridSize
        } as CSSProperties
      }
      aria-label="Game map"
    >
      <ul className="map-tiles">
        {tiles.map((tile) => (
          <li
            style={{ '--tile-x': tile.x, '--tile-y': tile.y } as CSSProperties}
            className={tile.type}
            key={`minimap-${currentZone.name}-tile-${tile.id}`}
          >
            {tileIcons[tile.type]}
          </li>
        ))}
      </ul>
    </section>
  )
}
