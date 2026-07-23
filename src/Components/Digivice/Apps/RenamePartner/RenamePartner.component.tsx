import { BiPencil } from 'react-icons/bi'

import { RenamePartner001 } from '@/GameData/Scenes/Apps/RenamePartner/001.scene'

import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'

export const RenamePartner = () => {
  const { scene, setScene } = useSceneStore((state) => state)

  return (
    <Button
      disabled={!!scene}
      style="secondary"
      onClick={() => {
        setScene({ component: RenamePartner001 })
      }}
    >
      <BiPencil />
    </Button>
  )
}
