import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialog } from '@/Texts'

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
            ? getDialog('INTRODUCTION_006_TEXT').replaceAll(
                '[NAME]',
                profile?.name
              )
            : getDialog('INTRODUCTION_006_TEXT_ALT')}
        </Text>
      </>
    ),

    options: [
      {
        text: getDialog('SCENES_CONTINUE_BUTTON'),
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
