import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { saveData } from '@/Helpers/saveData.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { Dialog } from '@/Components/App/Dialog'
import { getDialog } from '@/Texts'

export const Introduction006 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()
  const { savedProfiles, loadProfiles } = useSavedProfiles()

  const dialogOptions = {
    speaker: 'Culumon',
    speakerAvatar: 'ROOT_DOMAIN-CULUMON',
    text: getDialog('INTRODUCTION_005_TEXT').replaceAll(
      '[NAME]',
      profile?.name
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
