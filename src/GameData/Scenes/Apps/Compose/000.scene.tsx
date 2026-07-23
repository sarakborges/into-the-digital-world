import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { Compose001 } from '@/GameData/Scenes/Apps/Compose/001.scene'

import { getTexts } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Compose000 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('COMPOSE_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-compose-000-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile,
            npcAcquaintances: {
              ...(profile.npcAcquaintances ?? {}),
              jijimon: {}
            }
          }

          saveSession(updatedProfile)

          setScene({ component: Compose001 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
