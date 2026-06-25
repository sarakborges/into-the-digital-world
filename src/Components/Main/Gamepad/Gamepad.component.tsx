import { Fragment } from 'react/jsx-runtime'
import {
  BsArrowDown,
  BsArrowDownLeft,
  BsArrowDownRight,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
  BsArrowUpLeft,
  BsArrowUpRight
} from 'react-icons/bs'

import { canMoveToCoordinate, setLocation } from '@/Helpers/Systems/Zones'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useGameStore } from '@/Stores/Game.store'

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
    { x: 0, y: -1, icon: <BsArrowUpLeft /> },
    { x: 1, y: -1, icon: <BsArrowUp /> },
    { x: 1, y: 0, icon: <BsArrowUpRight /> },
    { x: -1, y: -1, icon: <BsArrowLeft /> },
    null,
    { x: 1, y: 1, icon: <BsArrowRight /> },
    { x: -1, y: 0, icon: <BsArrowDownLeft /> },
    { x: -1, y: 1, icon: <BsArrowDown /> },
    { x: 0, y: 1, icon: <BsArrowDownRight /> }
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
              {coordinate.icon}
            </Button>
          ) : (
            <div />
          )}
        </Fragment>
      ))}
    </aside>
  )
}
