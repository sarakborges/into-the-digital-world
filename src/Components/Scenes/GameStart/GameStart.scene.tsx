import { useGame } from '@/Hooks/Game.hook'

import { Dialog } from '@/Components/App/Dialog'

export const GameStart = () => {
  const { setGame } = useGame()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'ROOT_DOMAIN-CULUMON',
    text: `A human child? Don't move! I'll let the others know!\n*runs away*`,
    options: [
      {
        text: `[...]`,
        action: () => {
          setGame((prevState) => ({
            ...prevState,
            currentScene: 'introduction'
          }))
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
