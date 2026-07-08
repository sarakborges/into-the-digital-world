import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const BattleStart = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('BATTLE_START_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battlestart-confirm',
        text: getTranslation('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'battle',
            currentStage: 'turn'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
