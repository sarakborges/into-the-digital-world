import { BiCaretDown } from 'react-icons/bi'

import { Fragment } from 'react/jsx-runtime'

import { canMoveToCoordinate, setLocation } from '@/Helpers/Systems/Zones'

import { useBattleStore } from '@/Stores/Battle.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'

import './Gamepad.style.scss'

export const Gamepad = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { game } = useGameStore((state) => state)

  if (!profile || !!battle || !!scene) {
    return
  }

  const coordinates = [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: +1, y: -1 },
    { x: -1, y: 0 },
    null,
    { x: +1, y: 0 },
    { x: -1, y: +1 },
    { x: +0, y: +1 },
    { x: +1, y: +1 }
  ].map((coordinate) => {
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
          {!!coordinate ? (
            <Button
              style="secondary"
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
