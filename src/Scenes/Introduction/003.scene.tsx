import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialog } from '@/Texts'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction003 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'ROOT_DOMAIN-CULUMON',
    text: getDialog('INTRODUCTION_003_TEXT'),
    options: [
      {
        text: getDialog('INTRODUCTION_003_ACTION'),
        action: () => {
          const name = prompt(getDialog('INTRODUCTION_003_PROMPT')) || ''

          setProfile({ ...profile!, name })

          setScene({
            currentScene: 'introduction',
            currentStage: '004'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
