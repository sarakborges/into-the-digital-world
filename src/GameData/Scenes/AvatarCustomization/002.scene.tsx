import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const AvatarCustomization002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('AVATARCUSTOMIZATION_002_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-avatarCustomization-002-confirm',
        text: getTranslation('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
