import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction003 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'ROOT_DOMAIN-CULUMON',
    text: `Hi! You look funny.\n*giggles*\nI'm Culumon. What are you?`,
    options: [
      {
        text: `Tell your name`,
        action: () => {
          const name = prompt('Insert name to proceed') || ''

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
