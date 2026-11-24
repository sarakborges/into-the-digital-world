import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld033 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/033.dialog'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld032 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: NpcGennai.id,
      name: NpcGennai.name,
      title: getTexts(NpcGennai.title),
      portrait: NpcGennai.portrait
    },

    text: getTexts('ITDW_032', {
      '[NAME]': profile.name
    }),

    actions: [
      {
        id: 'ITDW_032_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld033())
        }
      }
    ]
  }
}
