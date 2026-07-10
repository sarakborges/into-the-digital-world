import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { GiCrossedSwords, GiPortal } from 'react-icons/gi'
import { TbStars } from 'react-icons/tb'

import type { CSSProperties } from 'react'

import {
  getCurrentMap,
  getNpcAt,
  getVisibleTiles
} from '@/Helpers/Systems/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'

import './Map.style.scss'

export const Map = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile?.currentZone) {
    return
  }

  const currentMap = getCurrentMap()
  const tiles = getVisibleTiles()

  if (!currentMap) {
    return
  }

  const tileIcons = {
    dungeon: <GiCrossedSwords />,
    event: <TbStars />,
    warp: <GiPortal />,
    important: <AiOutlineExclamationCircle />
  }

  return (
    <section
      className="map"
      style={
        {
          '--grid-size': currentMap.gridSize,
          backgroundImage: `url("/zones/${currentMap.background}.webp")`
        } as CSSProperties
      }
      aria-label="Game map"
    >
      <ul className="map-tiles">
        {tiles.map((tile) => (
          <li
            style={{ '--tile-x': tile.x, '--tile-y': tile.y } as CSSProperties}
            className={tile.type}
            key={`minimap-${currentMap.name}-tile-${tile.id}`}
          >
            {!!tileIcons[tile.type] && tileIcons[tile.type]}

            {tile.type === 'player' && (
              <CharacterHeader character={{ ...profile, isPlayer: true }} />
            )}

            {tile.type === 'npc' && (
              <CharacterHeader
                character={getNpcAt({ tileX: tile.x, tileY: tile.y })!}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
