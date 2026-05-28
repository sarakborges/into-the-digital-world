import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import { getTexts } from '@/Helpers/getTexts.helper'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/System/Button'

import { CharacterHeader } from '@/Components/App/CharacterHeader'
import { Dialog } from '@/Components/App/Dialog'

import './InteractableTiles.style.scss'
import { Text } from '@/Components/System/Text'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

export const InteractableTiles = () => {
  const profile = useProfileStore((state) => state.profile)

  if (!profile?.currentZone) {
    return
  }

  const currentZone: ZoneType =
    AllZones[profile.currentZone.id][profile.currentZone.map]

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
      (tile.condition === undefined || !!tile.condition())
  )

  const triggerEvent = (event) => {
    currentZone?.events?.[event]?.()
  }

  if (!surroundingTiles.length) {
    return
  }

  return (
    <aside className="interactable-tiles">
      {surroundingTiles.map((tile) => (
        <Fragment
          key={`interactable-tile-y-${tile!.y}-x${tile!.x}-${tile!.npc!.id}`}
        >
          {(!!tile?.event || !!tile.defaultText) && (
            <div className="events">
              <div className="scene">
                <Dialog
                  content={
                    <div className="event">
                      {!!tile.defaultText && (
                        <Text as="p">{tile.defaultText}</Text>
                      )}

                      {!!tile.event && (
                        <div>
                          <Button
                            onClick={() => triggerEvent(tile.event?.eventId)}
                          >
                            <HiOutlineChatBubbleLeftEllipsis />
                            <Text>{tile.event.eventText}</Text>
                          </Button>
                        </div>
                      )}
                    </div>
                  }
                  speaker={tile.npc}
                />
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </aside>
  )
}
