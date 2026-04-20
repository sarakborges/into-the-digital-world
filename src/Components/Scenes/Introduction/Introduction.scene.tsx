import type { ProfileType } from '@/Types/Profile.type'

import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction = () => {
  const { setProfile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'ROOT_DOMAIN-PIYOMON',
    text: `Oh dear! Hello, young one. Did you rest well?\n*cough*\nSorry for not introducing myself.\n*AHEM*\nMy name is Piyomon! What is yours?`,
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
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
