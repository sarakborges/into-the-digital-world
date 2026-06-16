import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'
import { Input } from '@/Components/System/Input'

import { Dialog } from '@/Components/App/Dialog'
import { AllDigimons } from '@/GameData/Digimons'

export const RenamePartner001 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile || !digivice?.currentDetails) {
    return
  }

  const digimon = profile?.partnerDigimons[digivice.currentDetails]
  const baseDigimon = AllDigimons[digimon.baseDigimon]

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.bookmon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getDialogs('RENAMEPARTNER_001_TEXT').replaceAll(
              '[DIGIMON]',
              digimon.name || baseDigimon.name
            )}
          </Text>
        </div>

        <Input
          label={getDialogs('RENAMEPARTNER_001_INPUT')}
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
        text: getDialogs('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      },

      {
        id: 'scene-renamepartner-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          const name = (
            document.querySelector('[name=partner-name]') as HTMLInputElement
          ).value.trim()

          profile.partnerDigimons[digivice?.currentDetails!].name = name

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
