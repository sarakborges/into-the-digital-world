import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction005 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions = {
    speaker: 'Culumon',
    speakerAvatar: 'ROOT_DOMAIN-CULUMON',
    text: `"${profile?.name}mon"? What a funny name!`,
    options: [
      {
        text: `- Only "${profile?.name}". No "mon".`,
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
