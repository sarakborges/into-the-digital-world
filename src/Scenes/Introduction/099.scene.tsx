import type { DialogType } from '@/Types/Dialog.type'

import { getDialog } from '@/Texts'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { saveData } from '@/Helpers/saveData.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction099 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()
  const { savedProfiles, loadProfiles } = useSavedProfiles()

  const dialogOptions: DialogType = {
    speaker: 'Culumon',
    speakerAvatar: 'npcs/ROOT_DOMAIN-CULUMON',

    content: (
      <Text as="p">
        {getDialog('INTRODUCTION_005_TEXT').replaceAll('[NAME]', profile?.name)}
      </Text>
    ),

    options: [
      {
        text: getDialog('INTRODUCTION_005_ACTION').replaceAll(
          '[NAME]',
          profile?.name
        ),
        action: () => {
          const updatedProfile = { ...profile, lastSave: new Date() }

          saveData({
            key: `profile${profile?.id}`,
            value: updatedProfile
          })

          saveSession({
            key: 'profile',
            value: updatedProfile
          })

          const updatedProfiles = [
            ...(savedProfiles || [])?.map((profile) => profile.id),
            profile?.id
          ]

          saveData({
            key: 'profiles',
            value: updatedProfiles
          })

          loadProfiles()
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
