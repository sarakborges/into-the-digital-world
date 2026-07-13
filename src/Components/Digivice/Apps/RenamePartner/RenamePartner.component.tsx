import { BiPencil } from 'react-icons/bi'
import { AllScenes } from '@/GameData/Scenes'

import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'

export const RenamePartner = () => {
  const { scene, setScene } = useSceneStore((state) => state)

  return (
    <Button
      disabled={!!scene}
      style="secondary"
      onClick={() => {
        setScene(AllScenes.renamePartner['001'])
      }}
    >
      <BiPencil />
    </Button>
  )
}
