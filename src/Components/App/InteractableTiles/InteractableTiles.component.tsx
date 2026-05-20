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
  const { scene, setScene } = useScene()

  if (!profile?.currentZone) {
    return
  }

  const currentZone: ZoneType = Zones[profile.currentZone.id]({
    scene,
    profile
  })

  const surroundingTiles = [
    ...currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x - 1 && tile.y === profile.currentZone.y
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x + 1 && tile.y === profile.currentZone.y
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y - 1 && tile.x === profile.currentZone.x
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y + 1 && tile.x === profile.currentZone.x
    )
  ].filter(
    (tile) =>
      !!tile.event &&
      !!tile.npc &&
      (tile.condition === undefined || !!tile.condition)
  )

  const triggerEvent = (event) => {
    currentZone?.events?.[event]?.({ setScene, setProfile, profile })
  }

  return (
    <aside className="interactable-tiles">
      {surroundingTiles.map((tile) => (
        <Fragment
          key={`interactable-tile-y-${tile!.y}-x${tile!.x}-${tile!.npc!.id}`}
        >
          {!!tile?.event && (
            <div className="events">
              <header>
                <Text>
                  {Object.keys(profile!.npcAcquintances).includes(
                    tile.npc!.id || ''
                  )
                    ? tile.npc!.name
                    : '???'}
                </Text>

                <Portrait
                  alt={tile.npc!.name || ''}
                  src={`/${tile.npc!.portrait}.webp`}
                />
              </header>

              <footer>
                <div>
                  <Button
                    onClick={() => {
                      triggerEvent(tile.event!)
                    }}
                  >
                    {getTexts('NPC_INTERACT')}
                  </Button>
                </div>
              </footer>
            </div>
          )}
        </Fragment>
      ))}
    </aside>
  )
}
