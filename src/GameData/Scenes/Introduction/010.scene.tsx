import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { NpcCulumon } from '@/GameData/Npcs/Culumon.npc'

import { saveProfile } from '@/Helpers/saveProfile.helper'
import { Text } from '@/Components/System/Text'

import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction010 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()
  const { savedProfiles, loadProfiles } = useSavedProfiles()

  const dialogOptions: DialogType = {
    speaker: NpcCulumon.name,
    speakerAvatar: NpcCulumon.portrait,

    content: <Text as="p">{getDialogs('INTRODUCTION_010_TEXT')}</Text>,

    options: [
      {
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
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
