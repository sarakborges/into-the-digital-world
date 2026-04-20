import type { ProfileType } from '@/Types/Profile.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'
import { saveData } from '@/Helpers/saveData.helper'

export const Introduction003 = () => {
  const { setScene } = useScene()
  const { setProfile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'ROOT_DOMAIN-PIYOMON',
    text: `Oh dear! Hello, young one.\nMy name is Piyomon! What is yours?\n `,
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
