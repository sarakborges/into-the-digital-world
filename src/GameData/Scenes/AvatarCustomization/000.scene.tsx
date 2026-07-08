import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const AvatarCustomization000 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('AVATARCUSTOMIZATION_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-avatarCustomization-000-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'avatarCustomization',
            currentStage: '003'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
