import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction002 = () => {
  const { setScene } = useScene()

  const dialogOptions = {
    text: `The strange creature floats away, and leave you alone in the room for a while. Now there are a few more strange creatures.`,
    options: [
      {
        text: `[...]`,
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '003'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
