import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction004 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_004_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-004-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setProfile({
            ...profile,
            npcAcquaintances: {
              ...(profile.npcAcquaintances ?? {}),
              [AllNpcs.general.gennai.id]: {}
            }
          })

          setScene(AllScenes.introduction['005'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
