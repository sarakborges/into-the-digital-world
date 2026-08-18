import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld013 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/013.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { getChoice, getProfileName } from '@/Helpers/Systems/Profile'

import { useDialogOptionsStore } from '@/Stores/DialogOptions.store'
import { useDialogStore } from '@/Stores/Dialog.store'

export const getIntoTheDigitalWorld012 = (): DialogType => {
  const profileName = getProfileName()
  const choice = getChoice('INTO_THE_DIGITAL_WORLD_NAME_REACTION')

  if (!choice) {
    throw new Error('Missing INTO_THE_DIGITAL_WORLD_NAME_REACTION choice')
  }

  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      picture: NpcGennai.picture
    },

    text: getTexts(`ITDW_012_${choice.toUpperCase()}`, {
      '[NAME]': profileName
    }),

    actions: [
      {
        id: 'ITDW_012_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { setDialog } = useDialogStore.getState()
          const { setDialogOptions } = useDialogOptionsStore.getState()

          setDialogOptions([
            'where',
            'arrival',
            'human',
            'balance',
            'homeostasis',
            'guide'
          ])

          setDialog(IntoTheDigitalWorld013)
        }
      }
    ]
  }
}
