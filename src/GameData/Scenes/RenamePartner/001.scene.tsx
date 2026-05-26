import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Text } from '@/Components/System/Text'
import { Input } from '@/Components/System/Input'

import { Dialog } from '@/Components/App/Dialog'
import { AllDigimons } from '@/GameData/Digimons'

export const RenamePartner001 = () => {
  const { profile } = useProfile()
  const { setScene } = useScene()
  const { digivice } = useDigivice()

  const digimon = profile?.partnerDigimons[digivice.currentDetails!]
  const baseDigimon = AllDigimons[digimon?.baseDigimon!]

  const dialogOptions: DialogType = {
    speaker: AllNpcs.bookmon,

    content: (
      <>
        <Text as="p">
          {getDialogs('RENAMEPARTNER_001_TEXT').replaceAll(
            '[DIGIMON]',
            digimon?.name || baseDigimon.name
          )}
        </Text>

        <Input
          label={getDialogs('RENAMEPARTNER_001_INPUT')}
          placeholder={digimon?.name || baseDigimon.name}
          name="partner-name"
          defaultValue={digimon?.name}
          autoFocus
        />
      </>
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

          profile!.partnerDigimons[digivice.currentDetails!].name = name

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
