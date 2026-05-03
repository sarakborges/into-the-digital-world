import type { TileType } from '@/Types/Tile.type'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { getTexts } from '@/Helpers/getTexts.helper'

import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import './InteractableTiles.style.scss'
import { Fragment } from 'react/jsx-runtime'

export const InteractableTiles = () => {
  const { profile } = useProfile()
  const { setScene } = useScene()

  if (!profile) {
    return
  }

  const currentZone = Zones[profile.currentZone]

  const tiles: { [k: string]: TileType } = {
    'x:-1,y:0': currentZone.grid?.[profile.currentY]?.[profile.currentX - 1],
    'x:+1,y:0': currentZone.grid?.[profile.currentY]?.[profile.currentX + 1],
    'x:0,y:-1': currentZone.grid?.[profile.currentY - 1]?.[profile.currentX],
    'x:0,y:+1': currentZone.grid?.[profile.currentY + 1]?.[profile.currentX]
  }

  const filteredTiles = Object.values(tiles).filter(
    (tile) => !!tile.npc || !!tile.events
  )

  if (!filteredTiles.length) {
    return
  }

  const talkToNpc = (event) => {
    event({ setScene })
  }

  return (
    <aside className="interactable-tiles">
      {filteredTiles.map(
        (tile) =>
          !!tile.npc?.id && (
            <Fragment
              key={`interactable-tile-y-${profile.currentY}-x${profile.currentX}-${tile.npc?.id}`}
            >
              {!!tile.events && (
                <div className="events">
                  <header>
                    <Text>
                      {profile?.npcAcquintances.includes(tile.npc?.id || '')
                        ? tile.npc?.name
                        : '???'}
                    </Text>

                    <Portrait
                      alt={tile.npc?.name || ''}
                      src={`/${tile.npc?.portrait}.webp`}
                    />
                  </header>

                  <footer>
                    {Object.values(tile.events).map((event) => (
                      <div
                        key={`interactable-tile-y-${profile.currentY}-x${profile.currentX}-${tile.npc?.id}-${event}`}
                      >
                        <Button
                          onClick={() => {
                            talkToNpc(event)
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
