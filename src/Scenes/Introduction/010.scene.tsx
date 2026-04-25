import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialog } from '@/Texts'

import { saveProfile } from '@/Helpers/saveProfile.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'
import { useProfile } from '@/Hooks/Profile.hook'

export const Introduction010 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()
  const { savedProfiles, loadProfiles } = useSavedProfiles()

  const dialogOptions: DialogType = {
    speaker: 'Culumon',
    speakerAvatar: 'npcs/ROOT_DOMAIN-CULUMON',

    content: <Text as="p">{getDialog('INTRODUCTION_010_TEXT')}</Text>,

    options: [
      {
        text: getDialog('SCENES_CONTINUE_BUTTON'),
        action: () => {
          saveProfile({
            profile: profile!,
            savedProfiles: savedProfiles!
          })

          setScene(null)
          loadProfiles()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
