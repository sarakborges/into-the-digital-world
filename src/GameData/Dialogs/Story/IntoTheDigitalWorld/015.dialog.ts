import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld016 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/019.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { getChoice } from '@/Helpers/Systems/Profile/getChoice.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld015 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  const choice = getChoice('INTO_THE_DIGITAL_WORLD_NAME_REACTION')

  if (!choice) {
    throw new Error('Missing INTO_THE_DIGITAL_WORLD_NAME_REACTION choice')
  }

  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts(`ITDW_015_${choice.toUpperCase()}`, {
      '[NAME]': profile.name
    }),

    actions: [
      {
        id: 'ITDW_015_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld016())
        }
      }
    ]
  }
}
