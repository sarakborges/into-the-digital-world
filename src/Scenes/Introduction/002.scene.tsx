import { useScene } from '@/Hooks/Scene.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction002 = () => {
  const { setScene } = useScene()

  const dialogOptions = {
    text: `You realize a strange, but cute, creature approaches.`,
    image: {
      alt: 'Strange creature',
      src: '/digimons/CULUMON.jpg'
    },

    options: [
      {
        text: `Continue`,
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
