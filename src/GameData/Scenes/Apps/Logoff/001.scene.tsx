import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { logoff } from '@/Helpers/Systems/Scenes'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Logoff001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.logamon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('LOGOFF_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-logoff-001-cancel',
        text: getTexts('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      },

      {
        id: 'scene-logoff-001-confirm',
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: logoff
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
