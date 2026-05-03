import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/Components/System/Text'

import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction010 = () => {
  const { setScene } = useScene()
  const { loadProfiles } = useSavedProfiles()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: <Text as="p">{getDialogs('INTRODUCTION_010_TEXT')}</Text>,

    options: [
      {
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(null)
          loadProfiles()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
