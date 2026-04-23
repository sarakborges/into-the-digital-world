import { useScene } from '@/Hooks/Scene.hook'

import { getDialog } from '@/Texts'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction002 = () => {
  const { setScene } = useScene()

  const dialogOptions = {
    text: getDialog('INTRODUCTION_002_TEXT'),

    image: {
      alt: getDialog('INTRODUCTION_002_ALT'),
      src: '/digimons/CULUMON.jpg'
    },

    options: [
      {
        text: getDialog('INTRODUCTION_002_ACTION'),
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
