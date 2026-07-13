import type { DialogType } from '@/Types/Dialog.type'

import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction023 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_023_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-027-confirm',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(AllScenes.introduction['024'])
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
