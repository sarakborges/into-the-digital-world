import {BiPencil} from 'react-icons/bi'

import {useSceneStore} from '@/Stores/Scene.store'

import {Button} from '@/Components/DesignSystem/Button'

export const RenamePartner = () => {
  const { scene, setScene } = useSceneStore((state) => state)

  return (
    <Button
      disabled={!!scene}
      style="secondary"
      onClick={() => {
        setScene({
          currentScene: 'renamePartner',
          currentStage: '001'
        })
      }}
    >
      <BiPencil />
    </Button>
  )
}
