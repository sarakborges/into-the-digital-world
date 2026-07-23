import { BiCaretDown } from 'react-icons/bi'

import { Fragment } from 'react/jsx-runtime'

import { canMoveToCoordinate } from '@/Helpers/Systems/Zones/canMoveToCoordinate.helper'
import { getGamepadCoordinates } from '@/Helpers/Systems/Zones/getGamepadCoordinates.helper'
import { setLocation } from '@/Helpers/Systems/Zones/setLocation.helper'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import '@/Components/Main/Gamepad/Gamepad.style.scss'

export const Gamepad = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { game } = useGameStore((state) => state)

  if (!profile || (!!scene && !scene?.enablesMovement)) {
    return
  }

  const coordinates = getGamepadCoordinates().map((coordinate) => {
    if (!coordinate) {
      return null
    }

    return {
      ...coordinate,
      canMove: canMoveToCoordinate({ ...coordinate })
    }
  })

  return (
    <aside className="gamepad">
      {coordinates.map((coordinate, coordinateIndex) => (
        <Fragment key={`gamepad-${coordinateIndex}`}>
          {coordinate ? (
            <Button
              disabled={!coordinate.canMove || !!game?.isWarping}
              onClick={() => setLocation({ ...coordinate })}
            >
              <BiCaretDown />
            </Button>
          ) : (
            <div />
          )}
        </Fragment>
      ))}
    </aside>
  )
}
