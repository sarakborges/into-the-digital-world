import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import { getTexts } from '@/Helpers/getTexts.helper'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'
import { useGameStore } from '@/Stores/Game.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/System/Button'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './InteractableTiles.style.scss'

export const InteractableTiles = () => {
  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

  const setGame = useGameStore((state) => state.setGame)

  const setScene = useSceneStore((state) => state.setScene)

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
      (tile.condition === undefined || !!tile.condition)
  )

  const triggerEvent = (event) => {
    currentZone?.events?.[event]?.({ setScene, setProfile, profile, setGame })
  }

  return (
    <aside className="interactable-tiles">
      {surroundingTiles.map((tile) => (
        <Fragment
          key={`interactable-tile-y-${tile!.y}-x${tile!.x}-${tile!.npc!.id}`}
        >
          {!!tile?.event && (
            <div className="events">
              <CharacterHeader character={tile.npc!}>
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
              </CharacterHeader>
            </div>
          )}
        </Fragment>
      ))}
    </aside>
  )
}
