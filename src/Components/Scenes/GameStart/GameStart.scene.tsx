import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'
import { saveData } from '@/Helpers/saveData.helper'

export const GameStart = () => {
  const { setProfile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'AGUMON',
    text: `A human child? Don't move! I'll let the others know!\n*runs away*`,
    options: [
      {
        text: `[...]`,
        action: () => {
          const name = prompt(`Insert name to proceed`) || ''

          const newProfile = {
            name,
            theme: ''
          }

          setProfile(newProfile)
          saveData({ key: 'profile', value: newProfile })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
