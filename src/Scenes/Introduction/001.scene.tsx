import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction001 = () => {
  const { setScene } = useScene()

  const dialogOptions = {
    text: `As you wake up, you realize you are not in your bed. This place looks totally alien. 0s and 1s floating. Data streams flowing through.`,
    options: [
      {
        text: `Continue`,
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
