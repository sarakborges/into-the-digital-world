import { Fragment } from 'react/jsx-runtime'

import type { TileType } from '@/Types/Tile.type'

import { getTexts } from '@/Helpers/getTexts.helper'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useGame } from '@/Hooks/Game.hook'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import './InteractableTiles.style.scss'

export const InteractableTiles = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()
  const { game, setGame } = useGame()

  if (!profile) {
    return
  }

  const currentZone = Zones[profile.currentZone.id]

  const tiles: { [k: string]: TileType } = {
    'x:-1,y:0':
      currentZone?.grid[profile.currentZone.y]?.[profile.currentZone.x - 1],
    'x:+1,y:0':
      currentZone?.grid[profile.currentZone.y]?.[profile.currentZone.x + 1],
    'x:0,y:-1':
      currentZone?.grid[profile.currentZone.y - 1]?.[profile.currentZone.x],
    'x:0,y:+1':
      currentZone?.grid[profile.currentZone.y + 1]?.[profile.currentZone.x]
  }

  const filteredTiles = Object.values(tiles).filter(
    (tile) => !!tile?.npc || !!tile?.events
  )

  if (!filteredTiles.length) {
    return
  }

  const triggerEvent = (event) => {
    setGame({ ...game, event })
  }

  return (
    <aside className="interactable-tiles">
      {filteredTiles.map(
        (tile) =>
          !!tile.npc?.id && (
            <Fragment
              key={`interactable-tile-y-${profile.currentZone.y}-x${profile.currentZone.x}-${tile.npc?.id}`}
            >
              {!!tile.events && (
                <div className="events">
                  <header>
                    <Text>
                      {Object.keys(profile!.npcAcquintances).includes(
                        tile.npc?.id || ''
                      )
                        ? tile.npc?.name
                        : '???'}
                    </Text>

                    <Portrait
                      alt={tile.npc?.name || ''}
                      src={`/${tile.npc?.portrait}.webp`}
                    />
                  </header>

                  <footer>
                    {Object.keys(tile.events).map((event) => (
                      <div
                        key={`interactable-tile-y-${profile.currentZone.y}-x${profile.currentZone.x}-${tile.npc?.id}-${event}`}
                      >
                        <Button
                          onClick={() => {
                            triggerEvent(event)
                          }}
                        >
                          {getTexts('NPC_INTERACT')}
                        </Button>
                      </div>
                    ))}
                  </footer>
                </div>
              )}
            </Fragment>
          )
      )}
    </aside>
  )
}
