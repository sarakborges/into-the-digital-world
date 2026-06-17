import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { getDialogs } from '@/Helpers/Language'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/DesignSystem/Text'

import { Dialog } from '@/Components/Dialog'

export const AvatarCustomization001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('AVATARCUSTOMIZATION_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-avatarCustomization-001-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
