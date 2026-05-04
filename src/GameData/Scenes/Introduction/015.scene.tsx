import type { DialogType } from '@/Types/Dialog.type'
import type { ProfileType } from '@/Types/Profile.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const Introduction015 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: { id: 'player', name: profile!.name, portrait: `avatars/glitch` },

    content: <Text as="p">{getDialogs('INTRODUCTION_015_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-015-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile: ProfileType = {
            ...profile!,
            currentScene: null
          }

          setScene(null)
          setProfile(updatedProfile)
          saveSession({ key: 'profile', value: updatedProfile })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
