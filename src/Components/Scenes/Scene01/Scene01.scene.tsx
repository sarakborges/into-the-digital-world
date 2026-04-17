import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Scene01 = () => {
  const { profile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'SCENE01_DIGIMON',
    text: `Oh dear! Hello, young ${profile?.name}. Did you rest well?\n*cough*\nSorry for not introducing myself.\n*AHEM*\nMy name is Piyomon! What were we talking about? Oh, yes. It has been a few hours since you arrived at the Digital World. Talk to our buddy Culumon over there. I am sure he is eager to show you around!`
  }

  return <Dialog {...dialogOptions} />
}
