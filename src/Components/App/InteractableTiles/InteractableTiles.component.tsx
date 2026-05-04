import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import { getTexts } from '@/Helpers/getTexts.helper'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import './InteractableTiles.style.scss'

export const InteractableTiles = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  if (!profile) {
    return
  }

  const currentZone: ZoneType = Zones[profile.currentZone.id]

  const surroundingTiles = {
    prevX: currentZone.tiles.find(
      (tile) =>
        tile.x === profile.currentZone.x - 1 && tile.y === profile.currentZone.y
    ),
    nextX: currentZone.tiles.find(
      (tile) =>
        tile.x === profile.currentZone.x + 1 && tile.y === profile.currentZone.y
    ),
    prevY: currentZone.tiles.find(
      (tile) =>
        tile.y === profile.currentZone.y - 1 && tile.x === profile.currentZone.x
    ),
    nextY: currentZone.tiles.find(
      (tile) =>
        tile.y === profile.currentZone.y + 1 && tile.x === profile.currentZone.x
    )
  }

  const triggerEvent = (event) => {
    currentZone?.events?.[event]?.({ setScene, setProfile, profile })
  }

  return (
    <aside className="interactable-tiles">
      {Object.values(surroundingTiles).map(
        (tile) =>
          !!tile?.npc &&
          (tile.npc.condition === undefined || !!tile.npc.condition) && (
            <Fragment
              key={`interactable-tile-y-${tile.y}-x${tile.x}-${tile.npc?.npcInfo.id}`}
            >
              {!!tile?.event && (
                <div className="events">
                  <header>
                    <Text>
                      {Object.keys(profile!.npcAcquintances).includes(
                        tile.npc?.npcInfo.id || ''
                      )
                        ? tile.npc?.npcInfo.name
                        : '???'}
                    </Text>

                    <Portrait
                      alt={tile.npc?.npcInfo.name || ''}
                      src={`/${tile.npc?.npcInfo.portrait}.webp`}
                    />
                  </header>

                  <footer>
                    <div>
                      <Button
                        onClick={() => {
                          triggerEvent(tile.event?.eventName)
                        }}
                      >
                        {getTexts('NPC_INTERACT')}
                      </Button>
                    </div>
                  </footer>
                </div>
              )}
            </Fragment>
          )
      )}
    </aside>
  )
}
