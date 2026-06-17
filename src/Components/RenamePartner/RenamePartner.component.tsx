import { BiPencil } from 'react-icons/bi'

import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/DesignSystem/Button'

export const RenamePartner = () => {
  const { scene, setScene } = useSceneStore((state) => state)

  const openRenamePartner = () => {
    setScene({
      currentScene: 'renamePartner',
      currentStage: '001'
    })
  }

  return (
    <Button disabled={!!scene} onClick={openRenamePartner}>
      <BiPencil />
    </Button>
  )
}
