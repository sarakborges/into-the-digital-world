import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { saveData } from '@/Helpers/saveData.helper'

import { Dialog } from '@/Components/App/Dialog'
import type { ProfileType } from '@/Types/Profile.type'

export const Introduction003 = () => {
  const { setScene } = useScene()
  const { setProfile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'ROOT_DOMAIN-CULUMON',
    text: `You look funny. Hi! I'm Culumon. What is your name?`,
    options: [
      {
        text: `[...]`,
        action: () => {
          const name = prompt('Insert name to proceed') || ''

          const profile: ProfileType = {
            name,
            theme: 'default'
          }

          setProfile(profile)
          saveData({
            key: 'profile',
            value: profile
          })

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
