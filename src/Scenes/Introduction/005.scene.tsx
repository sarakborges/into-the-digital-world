import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { saveData } from '@/Helpers/saveData.helper'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction005 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()
  const { savedProfiles } = useSavedProfiles()

  const dialogOptions = {
    speaker: 'Culumon',
    speakerAvatar: 'ROOT_DOMAIN-CULUMON',
    text: `"${profile?.name}mon"? What a funny name!`,
    options: [
      {
        text: `- Only "${profile?.name}". No "mon".`,
        action: () => {
          saveData({
            key: `profile${profile?.id}`,
            value: { ...profile }
          })

          saveData({
            key: 'profiles',
            value: [...(savedProfiles || []), profile?.id]
          })

          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
