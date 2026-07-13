import type { DialogType } from '@/Types/Dialog.type'
import { AllScenes } from '@/GameData/Scenes'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const AvatarCustomization000 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('AVATARCUSTOMIZATION_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-avatarCustomization-000-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(AllScenes.avatarCustomization['003'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
