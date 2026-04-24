import { useScene } from '@/Hooks/Scene.hook'

import { getDialog } from '@/Texts'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction001 = () => {
  const { setScene } = useScene()

  const dialogOptions = {
    text: getDialog('INTRODUCTION_001_TEXT'),

    image: {
      alt: getDialog('INTRODUCTION_001_ALT'),
      src: '/zones/root_domain.png'
    },

    options: [
      {
        text: getDialog('SCENES_CONTINUE_BUTTON'),
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
