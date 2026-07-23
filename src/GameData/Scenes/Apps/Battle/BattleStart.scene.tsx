import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const BattleStart = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('BATTLE_START_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battlestart-confirm',
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setScene({ component: BattleTurn })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
