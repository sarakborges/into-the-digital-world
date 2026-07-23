import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { Compose002 } from '@/GameData/Scenes/Apps/Compose/002.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Compose001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('COMPOSE_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-compose-001-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Compose002 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
