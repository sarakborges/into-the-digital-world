import { BiPencil } from 'react-icons/bi'

import { RenamePartner001 } from '@/GameData/Scenes/Apps/RenamePartner/001.scene'

import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'

export const RenamePartner = () => {
  const { scene, setScene } = useSceneStore((state) => state)

  return (
    <Button
      disabled={!!scene}
      variant="secondary"
      onClick={() => {
        setScene(RenamePartner001)
      }}
    >
      <BiPencil />
    </Button>
  )
}
