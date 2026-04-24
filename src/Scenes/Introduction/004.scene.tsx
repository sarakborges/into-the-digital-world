import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialog } from '@/Texts'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction004 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions = {
    speaker: profile?.name,
    text: getDialog('INTRODUCTION_004_TEXT').replaceAll(
      '[NAME]',
      profile?.name
    ),
    options: [
      {
        text: getDialog('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '005'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
