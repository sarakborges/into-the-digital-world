import type { DialogType } from '@/Types/Dialog.type'

import { NpcLogamon } from '@/GameData/Npcs/Logamon.npc'

import { getTexts } from '@/Helpers/Language'
import { closeScene, logoff } from '@/Helpers/Systems/Scenes'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Logoff001 = () => {
  const dialogOptions: DialogType = {
    speaker: NpcLogamon,

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
          closeScene()
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
