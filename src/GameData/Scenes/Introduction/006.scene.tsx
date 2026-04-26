import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction006 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: profile?.name,
    speakerAvatar: `avatars/glitch`,

    content: (
      <>
        <Text as="p">
          {profile?.name.slice(-3) !== 'mon'
            ? getDialogs('INTRODUCTION_006_TEXT').replaceAll(
                '[NAME]',
                profile?.name
              )
            : getDialogs('INTRODUCTION_006_TEXT_ALT')}
        </Text>
      </>
    ),

    options: [
      {
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '007'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
