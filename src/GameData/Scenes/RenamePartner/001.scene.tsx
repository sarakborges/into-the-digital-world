import type { DialogType } from '@/Types/Dialog.type'

import { AllDigimons } from '@/GameData/Digimons'
import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Input } from '@/Components/DesignSystem/Input'
import { Text } from '@/Components/DesignSystem/Text'

export const RenamePartner001 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile || !digivice?.currentDetails) {
    return
  }

  const digimon = profile.partnerDigimons[digivice.currentDetails]
  const baseDigimon = AllDigimons[digimon.baseDigimon]

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.bookmon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTranslation('RENAMEPARTNER_001_TEXT', {
              '[DIGIMON]': digimon.name || baseDigimon.name
            })}
          </Text>
        </div>

        <Input
          label={getTranslation('RENAMEPARTNER_001_INPUT')}
          placeholder={digimon?.name || baseDigimon.name}
          name="partner-name"
          defaultValue={digimon?.name}
          autoFocus
        />
      </div>
    ),

    options: [
      {
        id: 'scene-renamepartner-001-cancel',
        text: getTranslation('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      },

      {
        id: 'scene-renamepartner-001-confirm',
        text: getTranslation('SCENES_CONFIRM_BUTTON'),
        action: () => {
          if (!digivice?.currentDetails) {
            return
          }

          const name = (
            document.querySelector('[name=partner-name]') as HTMLInputElement
          ).value.trim()

          const updatedProfile = {
            ...profile,

            partnerDigimons: {
              ...profile.partnerDigimons,

              [digivice.currentDetails]: {
                ...profile.partnerDigimons[digivice.currentDetails],
                name
              }
            }
          }

          saveSession(updatedProfile)

          setScene({
            currentScene: 'renamePartner',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
